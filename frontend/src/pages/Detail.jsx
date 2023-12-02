import { useState } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from 'react-router-dom';
const Detail = () => {
    const dummyArtData = [
      { id: 1, title: "Art 1" ,src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"},
      { id: 2, title: "Art 2" ,src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"},
      { id: 3, title: "Art 3" ,src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"},
      { id: 4, title: "Art 4" ,src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"},
      { id: 5, title: "Art 5" ,src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"},
      { id: 6, title: "Art 6" ,src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"},
      { id: 7, title: "Art 7" ,src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"},
      { id: 8, title: "Art 8" ,src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"},
      { id: 9, title: "Art 9" ,src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"},
      { id: 10, title: "Art 10" ,src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"},
    ];
    const { id } = useParams();
    const selectedArt = dummyArtData.find((art) => art.id === parseInt(id, 10));
    if (!selectedArt) {
      return <div>
        Art not found
        </div>;
    }

    return (
      <div>
        <Navbar/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <div className="flex h-auto max-w-full justify-center align-center rounded-lg grid-col-1" >
        <img src={selectedArt.src} alt={selectedArt.title} />
        </div>
        <div className="h-auto max-w-full rounded-lg grid-col-1">
          <div>

          </div>
          
        </div>
        
        </div>
        <Footer/>
      </div>
    );
};

export default Detail;

