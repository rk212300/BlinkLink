import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";

const Landing = () => {
    return (
        <>
            <Navbar />
            <div className="px-12 py-6">
                <HeroBanner />
            </div>
        </>
    );
};

export default Landing;
