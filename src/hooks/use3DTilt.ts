import { useRef, useEffect } from "react";

interface TiltOptions {
  maxTilt?: number;
  scale?: number;
  speed?: number;
}

export const use3DTilt = (options: TiltOptions = {}) => {
  const { maxTilt = 15, scale = 1.05, speed = 400 } = options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate rotation based on mouse position
      const rotateX = ((mouseY - centerY) / (rect.height / 2)) * maxTilt;
      const rotateY = ((centerX - mouseX) / (rect.width / 2)) * maxTilt;

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      element.style.transition = `transform 0s ease-out`;
    };

    const handleMouseLeave = () => {
      element.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
      element.style.transition = `transform ${speed}ms ease-out`;
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt, scale, speed]);

  return ref;
};
