import PillNav from '../components/PillNav';
const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Coffee', href: '/coffee' },];
export default function Nav() {
    return (
        <>

            <PillNav
                className='w-full max-w-5xl'
                logo="/images/images.png"
                items={navItems}
                activeHref=""
                baseColor="#ECD3BF"
                pillColor="#6F4E37"
                hoveredPillTextColor="#000"
                pillTextColor="#ffffff"
                initialLoadAnimation={true}
            />

        </>
    );
}