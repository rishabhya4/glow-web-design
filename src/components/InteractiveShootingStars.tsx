import { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    rotation: number;
}

export const InteractiveShootingStars = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize cloud-like stars
        const initStars = () => {
            starsRef.current = Array.from({ length: 20 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: Math.random() * 2 - 1,
                vy: Math.random() * 2 + 1,
                size: Math.random() * 30 + 20, // Larger sizes for cloud effect
                opacity: Math.random() * 0.6 + 0.3,
                rotation: Math.random() * Math.PI * 2,
            }));
        };
        initStars();

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Draw star shape function
        const drawStar = (cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number, rotation: number, opacity: number) => {
            let rot = Math.PI / 2 * 3 + rotation;
            let x = cx;
            let y = cy;
            const step = Math.PI / spikes;

            ctx.beginPath();
            ctx.moveTo(cx, cy - outerRadius);

            for (let i = 0; i < spikes; i++) {
                x = cx + Math.cos(rot) * outerRadius;
                y = cy + Math.sin(rot) * outerRadius;
                ctx.lineTo(x, y);
                rot += step;

                x = cx + Math.cos(rot) * innerRadius;
                y = cy + Math.sin(rot) * innerRadius;
                ctx.lineTo(x, y);
                rot += step;
            }

            ctx.lineTo(cx, cy - outerRadius);
            ctx.closePath();

            // Glow effect
            ctx.shadowBlur = 30;
            ctx.shadowColor = `rgba(139, 233, 253, ${opacity * 0.8})`;

            // Gradient fill
            const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, outerRadius);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(139, 233, 253, ${opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(139, 233, 253, ${opacity * 0.3})`);

            ctx.fillStyle = gradient;
            ctx.fill();

            // Add sparkle effect
            ctx.shadowBlur = 15;
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.beginPath();
            ctx.arc(cx, cy, outerRadius * 0.3, 0, Math.PI * 2);
            ctx.fill();

            ctx.shadowBlur = 0;
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            starsRef.current.forEach((star) => {
                // Calculate direction towards mouse
                const dx = mouseRef.current.x - star.x;
                const dy = mouseRef.current.y - star.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance > 0) {
                    // Gentle pull towards mouse direction
                    star.vx += (dx / distance) * 0.05;
                    star.vy += (dy / distance) * 0.05;

                    // Limit velocity
                    const speed = Math.sqrt(star.vx * star.vx + star.vy * star.vy);
                    if (speed > 5) {
                        star.vx = (star.vx / speed) * 5;
                        star.vy = (star.vy / speed) * 5;
                    }
                }

                // Update position
                star.x += star.vx;
                star.y += star.vy;
                star.rotation += 0.02; // Slow rotation

                // Reset if out of bounds
                if (star.x < -100 || star.x > canvas.width + 100 ||
                    star.y < -100 || star.y > canvas.height + 100) {
                    star.x = Math.random() * canvas.width;
                    star.y = -50;
                    star.vx = Math.random() * 2 - 1;
                    star.vy = Math.random() * 2 + 1;
                }

                // Draw cloud-like star
                drawStar(
                    star.x,
                    star.y,
                    5, // 5-pointed star
                    star.size,
                    star.size * 0.5,
                    star.rotation,
                    star.opacity
                );
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 5 }}
        />
    );
};
