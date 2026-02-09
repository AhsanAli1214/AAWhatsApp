import { useEffect, useState } from "react";

export function AppSplash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Short splash screen to mimic native app launch.
    const timeout = window.setTimeout(() => setVisible(false), 3000);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="app-splash" aria-hidden="true">
      <div className="app-splash__logo">
        <img
          src="https://i.postimg.cc/mrqq6LxP/favicon.png"
          alt=""
          aria-hidden="true"
        />
        <div>
          <span>AA</span>
          <span>Mods</span>
        </div>
      </div>
      <p className="app-splash__headline">Securing your session</p>
      <p className="app-splash__subcopy">Encrypted launch · Verified updates · Protected access</p>
      <div className="app-splash__progress" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}
