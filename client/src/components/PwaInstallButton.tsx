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
    setIsInstalled(isStandaloneDisplay() || false);

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
      // In some cases, we might want to just show it's already installed
      // but if the user clicks it, they expect an action.
      // For a PWA, "Open" usually means switching context if possible, 
      // but since we are in the browser, we just navigate to home.
      window.location.href = "/";
      return;
    }

    if (!installPrompt) {
      console.log("Install prompt not available yet");
      return;
    }

    try {
      // Trigger the native Add to Home Screen prompt.
      await installPrompt.prompt();
      const choice = await installPrompt.userChoice;
      console.log(`User response to install prompt: ${choice.outcome}`);
      
      if (choice.outcome === "accepted") {
        setIsInstalled(true);
        setInstallPrompt(null);
      }
    } catch (err) {
      console.error("Error during PWA installation:", err);
    }
  };

  const classes = `pwa-install-button tap-target ${variant === "mobile" ? "pwa-install-button--mobile" : ""}`;

  if (!installPrompt && !isInstalled) {
    return null;
  }

  return (
    <button
      className={classes}
      onClick={handleClick}
      aria-label={label}
      data-testid={`button-pwa-install-${variant}`}
    >
      {isInstalled ? <Smartphone className="h-4 w-4" /> : <Download className="h-4 w-4" />}
      <span>{label}</span>
    </button>
  );
}
