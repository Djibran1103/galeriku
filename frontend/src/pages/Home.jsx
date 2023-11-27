import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Banner from "../components/banner";
// import MessageCard from "../components/MessageCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Card />
      <div className="-bottom-20">
        <Footer />
      </div>
        
      
      
    </div>
  );
};

export default Home;
