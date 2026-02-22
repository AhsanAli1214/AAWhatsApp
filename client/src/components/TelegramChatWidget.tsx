import { useEffect } from "react";

const ELFSIGHT_SCRIPT_ID = "elfsight-platform-script";
const ELFSIGHT_APP_CLASS = "elfsight-app-77d4e223-c3bc-4a0f-ae68-972bbd9d0a67";

export default function TelegramChatWidget() {
  useEffect(() => {
    if (document.getElementById(ELFSIGHT_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement("script");
    script.id = ELFSIGHT_SCRIPT_ID;
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="telegram-chat-floating">
      <div className={ELFSIGHT_APP_CLASS} data-elfsight-app-lazy />
    </div>
  );
}
