import PillNav from '../components/PillNav';
import SideRays from '../components/SideRays';
const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Coffee', href: '/coffee' },];
export default function Nav() {
    return (
        <>
            <SideRays
                speed={2.5}
                rayColor1="#EAB308"
                rayColor2="#96c8ff"
                intensity={2}
                spread={2}
                origin="top-right"
                tilt={0}
                saturation={1.5}
                blend={0.75}
                falloff={1.6}
                opacity={1}
            />

            <PillNav
                logo="/images/images.jpg"
                items={navItems}
                activeHref=""
                baseColor="#ffffff"
                pillColor="#120F17"
                hoveredPillTextColor="#120F17"
                pillTextColor="#ffffff"
                initialLoadAnimation={true}
            />

        </>
    );
}