import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
// import MessageCard from "../components/MessageCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="justify-center text-center">Disini Letak Banner</div>
      <Card />
      <div className="-bottom-20">
        <Footer />
      </div>
        
      
      
    </div>
  );
};

export default Home;
