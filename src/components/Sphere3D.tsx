import { useEffect, useRef } from 'react';

// Matrix Helper Class
class Matrix3D {
    d: number[];

    constructor() {
        this.d = [];
        this.identity();
    }

    identity() {
        this.d = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    }

    appendScale(x: number, y: number, z: number) {
        this.append([x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1]);
    }

    appendTranslation(x: number, y: number, z: number) {
        this.append([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1]);
    }

    appendRotation(deg: number, axis: string) {
        const rad = (deg * Math.PI) / 180;
        const c = Math.cos(rad);
        const s = Math.sin(rad);
        let m = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

        if (axis === "X") {
            m[5] = c;
            m[6] = s;
            m[9] = -s;
            m[10] = c;
        } else if (axis === "Y") {
            m[0] = c;
            m[2] = -s;
            m[8] = s;
            m[10] = c;
        } else if (axis === "Z") {
            m[0] = c;
            m[1] = s;
            m[4] = -s;
            m[5] = c;
        }
        this.append(m);
    }

    append(b: number[]) {
        const a = this.d;
        const out = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let sum = 0;
                for (let k = 0; k < 4; k++) {
                    sum += a[i * 4 + k] * b[k * 4 + j];
                }
                out[i * 4 + j] = sum;
            }
        }
        this.d = out;
    }

    transformVectors(inVerts: number[], outVerts: number[]) {
        const m = this.d;
        for (let i = 0; i < inVerts.length; i += 3) {
            const x = inVerts[i];
            const y = inVerts[i + 1];
            const z = inVerts[i + 2];

            outVerts.push(
                x * m[0] + y * m[4] + z * m[8] + m[12],
                x * m[1] + y * m[5] + z * m[9] + m[13],
                x * m[2] + y * m[6] + z * m[10] + m[14]
            );
        }
    }
}

export const Sphere3D = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const bufferCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationRef = useRef<number>();
    const mouseRef = useRef({ x: 0, y: 0, down: false, lastX: 0, lastY: 0, velocity: 0 });
    const offsetRef = useRef({ ox: 0, oy: 0 });
    const deltaRef = useRef({ dx: 0, dy: 0 });
    const rotationSpeedRef = useRef(0.3);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const bufferCanvas = document.createElement('canvas');
        bufferCanvas.width = 2000;
        bufferCanvas.height = 2000;
        const bufferCtx = bufferCanvas.getContext('2d');
        if (!bufferCtx) return;
        bufferCanvasRef.current = bufferCanvas;

        const squareNum = 1500;
        const stageWidth = 2000;
        const stageHeight = 2000;
        const hw = stageWidth / 2;
        const hh = stageHeight / 2;
        const baseVerts = [-40, 0, 0, 40, 0, 0, 40, 0, 80, -40, 0, 80, -40, 0, 0];
        const newVerts: number[] = [];
        const radius = 700;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const newX = e.clientX - rect.left;
            const newY = e.clientY - rect.top;

            const deltaX = newX - mouseRef.current.lastX;
            const deltaY = newY - mouseRef.current.lastY;
            const velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            mouseRef.current.velocity = velocity;
            mouseRef.current.x = newX;
            mouseRef.current.y = newY;
            mouseRef.current.lastX = newX;
            mouseRef.current.lastY = newY;
        };

        const handlePointerDown = () => {
            mouseRef.current.down = true;
        };

        const handlePointerUp = () => {
            mouseRef.current.down = false;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('pointerdown', handlePointerDown);
        window.addEventListener('pointerup', handlePointerUp);

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const m = new Matrix3D();
        for (let i = 0; i < squareNum; i++) {
            m.identity();
            const s = Math.random() * 0.5 + 0.5;
            m.appendScale(s, s, s);
            m.appendRotation(90, "X");
            m.appendTranslation(0, 0, radius);
            m.appendRotation(Math.random() * 360, "X");
            m.appendRotation(Math.random() * 360, "Y");
            m.appendRotation(Math.random() * 360, "Z");

            m.transformVectors(baseVerts, newVerts);
        }

        const onLoop = () => {
            const { x: mouseX, y: mouseY, down, velocity } = mouseRef.current;
            const { ox, oy } = offsetRef.current;
            let { dx, dy } = deltaRef.current;

            // Check if mouse is over sphere
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const distanceFromCenter = Math.sqrt(
                Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
            );
            const scale = Math.min(canvas.width / 2000, canvas.height / 2000) * 1.0;
            const sphereRadius = radius * scale;
            const isHoveringOverSphere = distanceFromCenter < sphereRadius;

            // Fast rotation ONLY when hovering over sphere
            const targetSpeed = isHoveringOverSphere && velocity > 1 ? 4.0 : 0.3;
            rotationSpeedRef.current += (targetSpeed - rotationSpeedRef.current) * 0.1;

            mouseRef.current.velocity *= 0.9;

            dx += (mouseX + ox - dx) / 14;
            dy += (mouseY + oy - dy) / 14;

            if (!down) {
                offsetRef.current.ox += rotationSpeedRef.current;
                offsetRef.current.oy += rotationSpeedRef.current;
            }

            deltaRef.current = { dx, dy };

            m.identity();
            m.appendRotation(dx, "Z");
            m.appendRotation(dy, "X");
            m.appendTranslation(hw, hh, 0);

            const mat = m.d;
            const pVerts: number[] = [];

            for (let i = 0; i < newVerts.length; i += 3) {
                const x = newVerts[i];
                const y = newVerts[i + 1];
                const z = newVerts[i + 2];

                const vx = x * mat[0] + y * mat[4] + z * mat[8] + mat[12];
                const vy = x * mat[1] + y * mat[5] + z * mat[9] + mat[13];

                pVerts.push(vx, vy);
            }

            bufferCtx.clearRect(0, 0, stageWidth, stageHeight);

            bufferCtx.fillStyle = "#FFFFFF";
            bufferCtx.beginPath();
            bufferCtx.arc(hw, hh, radius + 20, 0, Math.PI * 2);
            bufferCtx.fill();

            bufferCtx.fillStyle = "#000000";
            bufferCtx.beginPath();

            for (let i = 0; i < pVerts.length; i += 10) {
                bufferCtx.moveTo(pVerts[i], pVerts[i + 1]);
                bufferCtx.lineTo(pVerts[i + 2], pVerts[i + 3]);
                bufferCtx.lineTo(pVerts[i + 4], pVerts[i + 5]);
                bufferCtx.lineTo(pVerts[i + 6], pVerts[i + 7]);
                bufferCtx.lineTo(pVerts[i + 8], pVerts[i + 9]);
            }
            bufferCtx.fill();

            ctx.globalCompositeOperation = "source-over";
            ctx.filter = "none";
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const offsetX = (canvas.width - 2000 * scale) / 2;
            const offsetY = (canvas.height - 2000 * scale) / 2;

            ctx.save();
            ctx.translate(offsetX, offsetY);
            ctx.scale(scale, scale);
            ctx.drawImage(bufferCanvas, 0, 0);

            ctx.globalCompositeOperation = "screen";
            ctx.filter = "blur(20px)";
            ctx.drawImage(bufferCanvas, 0, 0);

            ctx.restore();
            ctx.filter = "none";
            ctx.globalCompositeOperation = "source-over";

            animationRef.current = requestAnimationFrame(onLoop);
        };

        animationRef.current = requestAnimationFrame(onLoop);

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('pointerdown', handlePointerDown);
            window.removeEventListener('pointerup', handlePointerUp);
            window.removeEventListener('resize', resize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0"
            style={{ zIndex: 1 }}
        />
    );
};
