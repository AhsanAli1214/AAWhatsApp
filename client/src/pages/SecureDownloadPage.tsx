import { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { ShieldCheck, Loader2, Download } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { APP_DOWNLOAD_REDIRECTS } from "@shared/downloadAssets";

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "0x4AAAAAACdQRmOK43MRBy2f";

export default function SecureDownloadPage() {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const asset = params.get("asset") || "";
  const isKnownAsset = asset in APP_DOWNLOAD_REDIRECTS;

  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const scriptId = "cf-turnstile-script";

    const renderTurnstile = () => {
      if (!window.turnstile || widgetIdRef.current || !document.getElementById("turnstile-widget")) {
        return;
      }

      const id = window.turnstile.render("#turnstile-widget", {
        sitekey: TURNSTILE_SITE_KEY,
        action: "secure_download",
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
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
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
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  const handleSecureDownload = async () => {
    if (!token || !asset) {
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

      const data = (await response.json()) as { success?: boolean; redirectUrl?: string; message?: string };

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
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <Helmet>
        <title>Secure Download Verification | AA Mods</title>
        <meta
          name="description"
          content="Complete Cloudflare CAPTCHA verification to access secure official download links."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="w-full max-w-lg glass-card border border-primary/30 rounded-3xl p-8 text-center space-y-6">
        <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center border border-primary/30">
          <ShieldCheck className="w-7 h-7 text-primary" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-black">Secure Download Checkpoint</h1>
          <p className="text-muted-foreground text-sm">
            Please confirm you are human to continue to the official download mirror.
          </p>
        </div>

        <div className="flex justify-center">
          <div id="turnstile-widget" className="min-h-[70px]" />
        </div>

        {!isKnownAsset ? (
          <p className="text-sm text-destructive font-medium">Invalid download request. Please go back and try again.</p>
        ) : null}
        {error ? <p className="text-sm text-destructive font-medium">{error}</p> : null}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={handleSecureDownload}
            disabled={!token || isLoading || !asset || !isKnownAsset}
            className="h-12 px-6 rounded-xl font-bold"
          >
            {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Download className="w-4 h-4 mr-2" />}
            Continue to Download
          </Button>

          <Link href="/">
            <Button variant="outline" className="h-12 px-6 rounded-xl font-bold w-full">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
