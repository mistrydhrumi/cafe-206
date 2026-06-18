import CircularGallery from "../components/CircularGallery";

export default function Gallary() {
    return (
        <>
            <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery
                    bend={1}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollEase={0.05}
                    // Optionally load a custom font for the labels.
                    // Accepts a stylesheet URL (e.g. Google Fonts) or a direct font file.
                    fontUrl=""
                    font="bold 30px Orbitron"
                    scrollSpeed={2}
                />
            </div>
        </>
    );
}