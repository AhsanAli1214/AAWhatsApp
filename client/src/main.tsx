import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1" ||
  window.location.hostname === "[::1]";

if (window.location.protocol !== "https:" && !isLocalhost) {
  window.location.replace(`https://${window.location.host}${window.location.pathname}${window.location.search}`);
}

createRoot(document.getElementById("root")!).render(<App />);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Service worker registration is best-effort in constrained environments.
    });
  });
}
