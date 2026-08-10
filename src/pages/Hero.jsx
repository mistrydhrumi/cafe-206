import React from "react";
import Nav from "./Nav";
import Gallary from "./Gallary";
import SplashCursor from "../components/SplashCursor";
export default function Hero() {
    return (
        <div className="w-full min-h-screen bg-black flex flex-col justify-between relative overflow-hidden px-4 sm:px-6 lg:px-8">

            <SplashCursor
                DENSITY_DISSIPATION={3.5}
                VELOCITY_DISSIPATION={2}
                PRESSURE={0.1}
                CURL={3}
                SPLAT_RADIUS={0.2}
                SPLAT_FORCE={6000}
                COLOR_UPDATE_SPEED={10}
                SHADING
                RAINBOW_MODE={false}
                COLOR="#6F4E37"
            />
            <div className="flex justify-center items-center z-50" style={{ width: '100%', height: '100px', position: 'absolute', top: 0, left: 0 }}>
                <Nav />
            </div>

            <div className="w-full max-w-4xl mx-auto text-center mt-32 sm:mt-40 mb-4 z-20 pointer-events-none select-none">

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[0.95] opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
                    Welcome to
                    <span className="block mt-2 bg-gradient-to-r from-amber-500 via-orange-300 to-amber-100 bg-clip-text text-transparent font-serif italic normal-case tracking-normal">
                        Cafe206
                    </span>
                </h1>

                <p className="mt-6 text-neutral-400 text-xs sm:text-sm md:text-base max-w-md sm:max-w-lg mx-auto font-light leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
                    Where precise artisanal roasting meets modern aesthetic design. Dive into our interactive catalog and explore a curated journey of roasted origins, premium blends, and slow-pour perfection.
                </p>

            </div>

            <div className="w-full items-center justify-center">
                <Gallary />
            </div>

            <footer className="text-center pb-6 sm:pb-8 z-20 text-neutral-600 text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase pointer-events-none select-none">
                <span className="hidden md:inline">
                    ← Drag or scroll to browse the 206 collection →
                </span>
                <span className="inline md:hidden">
                    ← Swipe left or right to explore →
                </span>
            </footer>
        </div>

    );
}