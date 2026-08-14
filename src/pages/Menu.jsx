import Nav from "./Nav";
import SplashCursor from "../components/SplashCursor";

export default function Menu() {
    const menuItems = [
        {
            id: "01",
            title: "Lish Brew",
            price: "$6.50",
            badgeColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
            description: "A high-density double shot pulled over crisp velvety oat milk foam, infused with micro-nitrogen bubbles for a naturally sweet, cloud-like layered density."
        },
        {
            id: "02",
            title: "Cranberry Espresso Fizz",
            price: "$7.00",
            badgeColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
            description: "A radical combination pairing highly carbonated artisanal tonic with deep cold-pressed cranberry pulp, crowned with a bright, citrusy espresso float."
        },
        {
            id: "03",
            title: "Velvet Nitro Cold Brew",
            price: "$6.00",
            badgeColor: "text-amber-300 bg-amber-300/10 border-amber-300/20",
            description: "Single-origin Ethiopian beans saturated inside cold steel barrels for 12 hours. Poured straight from the draft line with cascading layers of creamy texture."
        },
        {
            id: "04",
            title: "Velvet Nitro Cold Brew",
            price: "$6.00",
            badgeColor: "text-amber-300 bg-amber-300/10 border-amber-300/20",
            description: "Single-origin Ethiopian beans saturated inside cold steel barrels for 12 hours. Poured straight from the draft line with cascading layers of creamy texture."
        }
    ];

    return (

        <div className="w-full min-h-screen bg-black text-white relative selection:bg-amber-500/30">
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
            {/* Fixed Navigation Bar so it stays pinned at the top */}
            <div className="w-full h-[100px] flex items-center justify-center px-4 sm:px-6 lg:px-8 fixed top-0 left-0 z-50 backdrop-blur-md bg-black/40 border-b border-neutral-900">
                <Nav />
            </div>

            {/* Content Container with large top margin to clear the fixed Nav */}
            <div className="max-w-3xl mx-auto px-4 pt-36 pb-32">

                {/* Section Title Header */}
                <div className="text-center mb-24">
                    <span className="text-xs font-mono tracking-[0.4em] text-amber-500/80 uppercase block mb-3">
                        03 // The Menu Archive
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase text-white">
                        Signature <span className="font-serif italic normal-case font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-300 to-amber-100">Combinations</span>
                    </h1>
                </div>

                {/* STICKY STACK LAYOUT CONTAINER */}
                {/* space-y-24 handles layout spacing on fallback/older screens */}
                <div className="flex flex-col space-y-24">
                    {menuItems.map((item, index) => (
                        <div
                            key={item.id}
                            /* 
                              CRITICAL FIXES HERE:
                              - 'sticky' enables the stacking behavior
                              - 'top-32' dictates where the card pins relative to screen height
                            */
                            className="sticky top-32 w-full min-h-[380px] bg-neutral-950 border border-neutral-900 rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-[0_-20px_50px_rgba(0,0,0,0.8)] transition-transform duration-300"
                            style={{
                                // Adds a slight offset to lower cards so the top header handles remain visible
                                marginTop: index === 0 ? "0px" : `${index * 20}px`,
                                zIndex: index + 1
                            }}
                        >
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <span className={`text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full border ${item.badgeColor}`}>
                                        {item.id}. {item.type}
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-6 text-white">
                                        {item.title}
                                    </h2>
                                </div>
                                <span className="text-xl font-mono text-neutral-400 pt-1">{item.price}</span>
                            </div>

                            <p className="text-sm text-neutral-400 leading-relaxed max-w-xl mt-8">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}