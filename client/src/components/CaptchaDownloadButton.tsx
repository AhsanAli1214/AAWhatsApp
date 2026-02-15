import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, ShieldCheck } from "lucide-react";
import type { SecureDownloadAsset } from "@shared/downloadAssets";
import { getSecureDownloadUrl } from "@shared/downloadAssets";
import { APP_SECURITY_CONFIG } from "@/config/appConfig";

const TURNSTILE_SITE_KEY = APP_SECURITY_CONFIG.turnstileSiteKey;
const TURNSTILE_ACTION = APP_SECURITY_CONFIG.turnstileAction;
const CAPTCHA_ENABLED =
  (import.meta.env.VITE_ENABLE_DOWNLOAD_CAPTCHA ?? `${APP_SECURITY_CONFIG.enableDownloadCaptcha}`) !== "false";
const RESOLVED_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

interface Props {
  asset: SecureDownloadAsset;
  children: ReactNode;
  buttonClassName?: string;
  panelClassName?: string;
  continueButtonClassName?: string;
}

export function CaptchaDownloadButton({
  asset,
  children,
  buttonClassName,
  panelClassName,
  continueButtonClassName,
}: Props) {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const widgetIdRef = useRef<string | null>(null);
  const containerIdRef = useRef(`turnstile-${asset}-${Math.random().toString(36).slice(2, 10)}`);

  useEffect(() => {
    if (!showCaptcha) return;

    const scriptId = "cf-turnstile-script";

    const renderTurnstile = () => {
      if (!window.turnstile || widgetIdRef.current) return;
      const container = document.getElementById(containerIdRef.current);
      if (!container) return;

      const id = window.turnstile.render(container, {
        sitekey: RESOLVED_SITE_KEY,
        action: TURNSTILE_ACTION,
        callback: (receivedToken: string) => {
          setToken(receivedToken);
          setError(null);
        },
        "expired-callback": () => setToken(null),
        "error-callback": () => {
          setToken(null);
          setError("CAPTCHA verification failed. Please retry.");
        },
      });

      widgetIdRef.current = id;
    };

    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener("load", renderTurnstile);
      renderTurnstile();

      return () => {
        existingScript.removeEventListener("load", renderTurnstile);
      };
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = renderTurnstile;
    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", renderTurnstile);
    };
  }, [asset, showCaptcha]);

  useEffect(() => {
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  const handleVerifyAndDownload = async () => {
    if (!CAPTCHA_ENABLED) {
      window.location.href = getSecureDownloadUrl(asset);
      return;
    }

    if (!token) {
      setError("Please complete CAPTCHA verification first.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/security/verify-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, asset }),
      });

      let data: { success?: boolean; redirectUrl?: string; message?: string } = {};
      const responseText = await response.text();

      if (responseText) {
        try {
          data = JSON.parse(responseText) as { success?: boolean; redirectUrl?: string; message?: string };
        } catch {
          data = {
            success: false,
            message: response.ok
              ? "Unexpected server response. Please try again."
              : "Server verification failed. Please try again in a moment.",
          };
        }
      }

      if (!response.ok || !data.success || !data.redirectUrl) {
        throw new Error(data.message || "Verification failed.");
      }

      window.location.href = data.redirectUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verification failed. Please try again.");
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
      setToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={() => {
          if (CAPTCHA_ENABLED) {
            setShowCaptcha(true);
            return;
          }
          void handleVerifyAndDownload();
        }}
        className={buttonClassName}
      >
        {children}
      </button>

      {showCaptcha && CAPTCHA_ENABLED ? (
        <div className={panelClassName || "w-full max-w-md rounded-2xl border border-primary/30 bg-background/70 p-4 space-y-3"}>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-primary" /> Verify before download
          </div>
          <div className="flex justify-center">
            <div id={containerIdRef.current} className="min-h-[70px]" />
          </div>
          {error ? <p className="text-sm text-destructive text-center font-medium">{error}</p> : null}
          <Button
            onClick={handleVerifyAndDownload}
            disabled={!token || isLoading}
            className={continueButtonClassName || "w-full rounded-xl font-bold"}
          >
            {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Continue to Download
          </Button>
        </div>
      ) : null}
    </div>
  );
}
