import { useEffect, useRef } from "react";

// Elements that should trigger the hover scaling state.
const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, summary, .hover-elevate, .card, .cursor-interactive";

const IDLE_TIMEOUT_MS = 1600;
const EASE = 0.18;

export function SoftCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const rippleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;
    const ripple = rippleRef.current;
    if (!cursor || !glow || !ripple) {
      return;
    }

    let rafId = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let idleTimeout: number | undefined;
    let isVisible = false;
    let isHovering = false;

    const setVisibility = (visible: boolean) => {
      if (isVisible === visible) return;
      isVisible = visible;
      cursor.classList.toggle("soft-cursor--visible", visible);
      glow.classList.toggle("soft-cursor--visible", visible);
    };

    const resetIdleTimer = () => {
      if (idleTimeout) {
        window.clearTimeout(idleTimeout);
      }
      idleTimeout = window.setTimeout(() => {
        setVisibility(false);
      }, IDLE_TIMEOUT_MS);
    };

    const animate = () => {
      currentX += (targetX - currentX) * EASE;
      currentY += (targetY - currentY) * EASE;

      // Magnetic smoothing: ease toward the pointer position.
      const translate = `translate3d(${currentX}px, ${currentY}px, 0)`;
      cursor.style.transform = `${translate} translate(-50%, -50%) scale(${isHovering ? 1.15 : 1})`;
      glow.style.transform = `${translate} translate(-50%, -50%) scale(${isHovering ? 1.1 : 1})`;

      rafId = window.requestAnimationFrame(animate);
    };

    const updateTarget = (x: number, y: number) => {
      targetX = x;
      targetY = y;
      setVisibility(true);
      resetIdleTimer();
    };

    const handlePointerMove = (event: PointerEvent) => {
      updateTarget(event.clientX, event.clientY);
      if (!isVisible) {
        setVisibility(true);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      updateTarget(event.clientX, event.clientY);
      // Trigger ripple animation at the touch/click location.
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      ripple.classList.remove("soft-cursor-ripple--active");
      void ripple.offsetWidth;
      ripple.classList.add("soft-cursor-ripple--active");
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(INTERACTIVE_SELECTOR);
      isHovering = Boolean(interactive);
      cursor.classList.toggle("soft-cursor--hover", isHovering);
    };

    const handlePointerLeave = () => {
      setVisibility(false);
      isHovering = false;
      cursor.classList.remove("soft-cursor--hover");
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerleave", handlePointerLeave);
      if (rafId) window.cancelAnimationFrame(rafId);
      if (idleTimeout) window.clearTimeout(idleTimeout);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="soft-cursor-glow" aria-hidden="true" />
      <div ref={cursorRef} className="soft-cursor" aria-hidden="true" />
      <div ref={rippleRef} className="soft-cursor-ripple" aria-hidden="true" />
    </>
  );
}
