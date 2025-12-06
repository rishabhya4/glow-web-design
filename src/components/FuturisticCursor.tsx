import { useEffect, useRef } from "react";

export const FuturisticCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const isPointerRef = useRef(false);

  useEffect(() => {
    let animationFrameId: number;
    let lastCheckTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      // Check for clickable elements every 100ms instead of every frame
      const now = Date.now();
      if (now - lastCheckTime > 100) {
        const target = e.target as HTMLElement;
        const isClickable = target.closest(
          "button, a, [role='button'], input, textarea, select, .clickable"
        );
        isPointerRef.current = !!isClickable;
        lastCheckTime = now;
      }
    };

    const updateCursorPosition = () => {
      const { x, y } = posRef.current;
      const isPointer = isPointerRef.current;

      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${x}px`;
        ringRef.current.style.top = `${y}px`;
      }

      if (accentRef.current) {
        accentRef.current.style.left = `${x}px`;
        accentRef.current.style.top = `${y}px`;
        accentRef.current.style.display = isPointer ? "block" : "none";
      }

      animationFrameId = requestAnimationFrame(updateCursorPosition);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-3 h-3 bg-primary rounded-full mix-blend-screen"
        style={{
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 20px hsl(var(--primary))",
          opacity: 0.8,
          willChange: "left, top",
        }}
      />

      {/* Outer glow ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] rounded-full mix-blend-screen border"
        style={{
          width: "30px",
          height: "30px",
          transform: "translate(-50%, -50%)",
          borderColor: `hsl(var(--primary) / 0.5)`,
          opacity: 0.6,
          boxShadow: "inset 0 0 20px hsl(var(--primary) / 0.3)",
          willChange: "left, top",
        }}
      />

      {/* Accent ring (pointer state) */}
      <div
        ref={accentRef}
        className="fixed pointer-events-none z-[9997] rounded-full mix-blend-screen"
        style={{
          width: "50px",
          height: "50px",
          transform: "translate(-50%, -50%)",
          border: "2px solid",
          borderColor: `hsl(var(--accent) / 0.6)`,
          boxShadow: "0 0 30px hsl(var(--accent) / 0.4)",
          animation: "pulse-ring 1.5s ease-in-out infinite",
          opacity: 0.7,
          display: "none",
          willChange: "left, top",
        }}
      />

      <style>{`
        * {
          cursor: none !important;
        }

        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 30px hsl(var(--accent) / 0.4),
                        inset 0 0 20px hsl(var(--accent) / 0.2);
          }
          50% {
            box-shadow: 0 0 50px hsl(var(--accent) / 0.6),
                        inset 0 0 30px hsl(var(--accent) / 0.3);
          }
          100% {
            box-shadow: 0 0 30px hsl(var(--accent) / 0.4),
                        inset 0 0 20px hsl(var(--accent) / 0.2);
          }
        }
      `}</style>
    </>
  );
};
