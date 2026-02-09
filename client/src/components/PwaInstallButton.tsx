import { useEffect, useMemo, useState } from "react";
import { Download, Smartphone } from "lucide-react";

interface PwaInstallButtonProps {
  variant?: "navbar" | "mobile";
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

// Detect if the app is already running in installed/standalone mode.
const isStandaloneDisplay = () =>
  window.matchMedia("(display-mode: standalone)").matches ||
  ("standalone" in navigator && (navigator as Navigator & { standalone?: boolean }).standalone);

export function PwaInstallButton({ variant = "navbar" }: PwaInstallButtonProps) {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    setIsInstalled(isStandaloneDisplay());

    const handleBeforeInstall = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };

    // Update state when the user completes installation.
    const handleInstalled = () => {
      setIsInstalled(true);
      setInstallPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  const label = useMemo(() => {
    if (isInstalled) return "Open App";
    return "Install AA Mods App";
  }, [isInstalled]);

  const handleClick = async () => {
    if (isInstalled) {
      window.location.href = "/aa-whatsapp";
      return;
    }

    if (!installPrompt) {
      return;
    }

    // Trigger the native Add to Home Screen prompt.
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    if (choice.outcome === "accepted") {
      setIsInstalled(true);
      setInstallPrompt(null);
    }
  };

  const classes = `pwa-install-button tap-target ${variant === "mobile" ? "pwa-install-button--mobile" : ""}`;

  return (
    <button
      className={classes}
      onClick={handleClick}
      aria-label={label}
      title={!installPrompt && !isInstalled ? "Use your browser menu to add to home screen." : undefined}
    >
      {isInstalled ? <Smartphone className="h-4 w-4" /> : <Download className="h-4 w-4" />}
      <span>{label}</span>
    </button>
  );
}
