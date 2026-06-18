import React from "react";
import Nav from "./Nav";
import Gallary from "./Gallary";

export default function Hero() {
    return (
        /* Base Container covering the screen with a rich dark backdrop */
        <div className="w-full min-h-screen bg-black flex flex-col justify-between relative overflow-hidden px-4 sm:px-6 lg:px-8">

            {/* 1. Absolute Navigation Header Container */}
            <div className="flex justify-center items-center z-50" style={{ width: '100%', height: '100px', position: 'absolute', top: 0, left: 0 }}>
                <Nav />
            </div>

<p className="font-3xl">you are hacked</p>
            {/* 2. Editorial Cafe Content Layer (Dynamic device positioning using mt-32/mt-40) */}
            <div className="w-full max-w-4xl mx-auto text-center mt-32 sm:mt-40 mb-4 z-20 pointer-events-none select-none">

                {/* Cafe Tagline / Location Tracker */}
                <span className="text-xs font-mono tracking-[0.4em] text-amber-500/80 uppercase mb-3 block opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
                    Est. 2026 // Premium Specialty Brews
                </span>

                {/* Primary Core Typography */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[0.95] opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
                    Welcome to
                    <span className="block mt-2 bg-gradient-to-r from-amber-500 via-orange-300 to-amber-100 bg-clip-text text-transparent font-serif italic normal-case tracking-normal">
                        Cafe206
                    </span>
                </h1>

                {/* Luxury Cafe Brand Narrative */}
                <p className="mt-6 text-neutral-400 text-xs sm:text-sm md:text-base max-w-md sm:max-w-lg mx-auto font-light leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
                    Where precise artisanal roasting meets modern aesthetic design. Dive into our interactive catalog and explore a curated journey of roasted origins, premium blends, and slow-pour perfection.
                </p>

            </div>

            {/* 3. Interactive 3D Canvas Gallery Layer */}
            <div className="w-full items-center justify-center">
                <Gallary />
            </div>

            {/* 4. Interactive Navigation Guide Footer */}
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