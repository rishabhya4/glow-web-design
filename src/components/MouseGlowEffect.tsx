import { useEffect } from "react";

export const MouseGlowEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update CSS variables for the glow effect - used for proximity effects
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Subtle Glow Orb - Much smaller and refined */}
      <div
        className="fixed pointer-events-none z-30 mix-blend-lighten"
        style={{
          width: "180px",
          height: "180px",
          left: "var(--mouse-x)",
          top: "var(--mouse-y)",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(152, 255, 152, 0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
          opacity: 0.4,
        }}
      />

      {/* Secondary Accent - Minimal */}
      <div
        className="fixed pointer-events-none z-20 mix-blend-lighten"
        style={{
          width: "120px",
          height: "120px",
          left: "var(--mouse-x)",
          top: "var(--mouse-y)",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(77, 128, 255, 0.08) 0%, transparent 80%)",
          filter: "blur(40px)",
          opacity: 0.3,
        }}
      />
    </>
  );
};
