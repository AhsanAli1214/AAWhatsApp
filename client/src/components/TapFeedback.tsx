import { useEffect } from "react";

const TAP_SELECTOR = "button, a, [role='button'], .tap-target";

export function TapFeedback() {
  useEffect(() => {
    // Global tap listener to add ripple + press feedback to interactive elements.
    const handlePointerDown = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest(TAP_SELECTOR) as HTMLElement | null;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      target.style.setProperty("--ripple-x", `${x}px`);
      target.style.setProperty("--ripple-y", `${y}px`);
      target.classList.remove("tap-ripple-active");
      target.classList.add("tap-press");
      void target.offsetWidth;
      target.classList.add("tap-ripple-active");
      target.addEventListener(
        "animationend",
        () => {
          target.classList.remove("tap-ripple-active");
        },
        { once: true }
      );
    };

    const handlePointerUp = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest(TAP_SELECTOR) as HTMLElement | null;
      if (!target) return;
      target.classList.remove("tap-press");
    };

    document.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.addEventListener("pointercancel", handlePointerUp, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  return null;
}
