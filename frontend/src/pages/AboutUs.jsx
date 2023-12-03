import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
    return ( 
        <>
            <Navbar />
                <div className="flex flex-col justify-center text-center">
                    <h1 className="font-bold text-5xl mt-12">Our Gallery</h1>
                    <p>Kami adalah website yang dimana membuat kalian dapat memaparkan hasil karya karian dengan professional</p>
                    <p>Hargai para seniman yang telah membuat karya</p>
                </div>
            <Footer />
        </>
     );
}
 
export default AboutUs;