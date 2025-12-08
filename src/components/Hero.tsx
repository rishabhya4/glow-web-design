import { useEffect, useRef } from 'react';
// @ts-ignore
import TubesCursor from 'threejs-components/build/cursors/tubes1.min.js';

const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        let app: any;
        try {
            app = TubesCursor(canvasRef.current, {
                tubes: {
                    colors: ["#f967fb", "#53bc28", "#6958d5"],
                    lights: {
                        intensity: 200,
                        colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
                    }
                }
            });
        } catch (e) {
            console.error("Failed to initialize TubesCursor", e);
        }

        const randomColors = (count: number) => {
            return new Array(count)
                .fill(0)
                .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
        };

        const handleClick = () => {
            if (app && app.tubes) {
                const colors = randomColors(3);
                const lightsColors = randomColors(4);
                app.tubes.setColors(colors);
                app.tubes.setLightsColors(lightsColors);
            }
        };

        document.addEventListener('click', handleClick);

        // Cleanup not fully supported by this library instance likely, but we remove listener
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div id="app" className="relative w-full h-screen m-0 overflow-hidden">
            <canvas
                ref={canvasRef}
                id="canvas"
                className="fixed top-0 left-0 w-full h-full pointer-events-none"
            />
            <div className="hero relative z-10 flex flex-col items-center justify-center h-full gap-6 text-center p-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
                    Bringing your
                    <br />
                    <span className="text-gradient">dream</span> into reality
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto pointer-events-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    We increase revenue and ensure sustainable long-term growth for your business through powerful websites.
                </p>
            </div>
        </div>
    );
};

export default Hero;
