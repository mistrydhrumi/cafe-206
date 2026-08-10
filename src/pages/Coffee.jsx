import Nav from "./Nav";

export default function Coffee() {
    return (
        <>
            <div className="w-full min-h-screen bg-black flex flex-col justify-between relative overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center z-50" style={{ width: '100%', height: '100px', position: 'absolute', top: 0, left: 0 }}>
                    <Nav />
                </div>
            </div>
        </>
    );
}