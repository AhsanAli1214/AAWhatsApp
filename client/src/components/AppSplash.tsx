import { useEffect, useState } from "react";

export function AppSplash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Short splash screen to mimic native app launch.
    const timeout = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="app-splash" aria-hidden="true">
      <div className="app-splash__logo">
        <span>AA</span>
        <span>Mods</span>
      </div>
      <p>Loading secure experience...</p>
    </div>
  );
}
