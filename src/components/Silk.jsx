import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Silk = ({
    color = '#ffffff',
    className = '',
    waveCount = 5,
    speed = 1
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let width = (canvas.width = canvas.offsetWidth);
        let height = (canvas.height = canvas.offsetHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };

        window.addEventListener('resize', handleResize);

        // Initialize waves
        const waves = [];
        for (let i = 0; i < waveCount; i++) {
            waves.push({
                y: height / 2,
                length: 0.01 + i * 0.002,
                amplitude: 20 + i * 10,
                frequency: 0.01 * speed,
                phase: i * Math.PI / waveCount
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Set line styles
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.globalAlpha = 0.15;

            waves.forEach((wave) => {
                ctx.beginPath();
                ctx.moveTo(0, wave.y);

                for (let x = 0; x < width; x++) {
                    const y = wave.y + Math.sin(x * wave.length + wave.phase) * wave.amplitude * Math.sin(wave.phase * 0.5);
                    ctx.lineTo(x, y);
                }

                ctx.stroke();
                wave.phase += wave.frequency;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color, waveCount, speed]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
        />
    );
};

export default Silk;