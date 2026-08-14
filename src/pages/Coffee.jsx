import SplashCursor from "../components/SplashCursor";
// import MaskedHeading from "../components/MaskedHeading";
import Nav from "./Nav";

export default function Coffee() {
    return (
        <div className="w-full min-h-screen bg-black flex flex-col justify-between items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 selection:bg-amber-500/30">
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
            {/* <MaskedHeading text="Coffee is art of love" src="public\coffee\coffee.jpg" />
            <MaskedHeading
                text="Coffee is art of love"
                // src={activeRoast.src}
                fillScale={1.35}
                parallax={32}
                reveal="rise"
                trigger="view"
                drift={14}
                brightness={1.15}
                saturation={1.2}
                duration={1.2}
                stagger={0.06}
                align="center"
                weight={900}
                tracking={-0.03}
                lineHeight={1.1}
                textScale={0.052}
                className="uppercase font-black text-white whitespace-nowrap"
            /> */}
            <div className="w-full h-[100px] flex items-center justify-center px-4 sm:px-6 lg:px-8 fixed top-0 left-0 z-50 backdrop-blur-md bg-black/40 border-b border-neutral-900">
                <Nav />
            </div>

        </div>


    );
}