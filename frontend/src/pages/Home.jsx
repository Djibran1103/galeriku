import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/home/CardHome";
import Banner from "../components/home/Banner";
import CardComment from "../components/home/CardComment";
// import MessageCard from "../components/MessageCard";

const Home = () => {
  return (
    <div className="dark:bg-slate-800">
      <Navbar />
      <Banner />
      <div className="bg-[#E9615A] text-white font-bold text-3xl py-2 text-center">
        <h1>© All rights reserved by the Artists</h1>
      </div>
      <Card />
      <h1 className="text-center font-bold text-4xl mb-4 dark:text-white">Our Artists</h1>
      <div className="flex justify-center">
          <CardComment />
      </div>
      <div className="-bottom-20">
        <Footer />
      </div>
        
      
      
    </div>
  );
};

export default Home;
