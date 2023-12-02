import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Banner from "../components/banner";
import CardComment from "../components/CardComment";
// import MessageCard from "../components/MessageCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="bg-[#E9615A] text-white font-bold text-3xl py-2 text-center">
        <h1>© All rights reserved by the Artists</h1>
      </div>
      <Card />
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4">
          <CardComment />
          <CardComment />
          <CardComment />
          <CardComment />
        </div>
      </div>
      <div className="-bottom-20">
        <Footer />
      </div>
        
      
      
    </div>
  );
};

export default Home;
