import { useState } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Images = () => {
  const dummyImagesData = [
    { id: 1, title: "Images 1" },
    { id: 2, title: "Images 2" },
    { id: 3, title: "Images 3" },
    { id: 4, title: "Images 4" },
    { id: 5, title: "Images 5" },
    { id: 6, title: "Images 6" },
    { id: 7, title: "Images 7" },
    { id: 8, title: "Images 8" },
    { id: 9, title: "Images 9" },
    { id: 10, title: "Images 10" },
  ];

  const itemsPerPage = 4; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyImagesData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
        <Navbar />
        <h5 className="text-gray-400 mt-8 ml-8">Home - Images</h5>
        <h1 className="font-bold text-3xl ml-8">Images</h1>
        {currentItems.map((video) => (
            <div key={video.id}>
                <h2>{video.title}</h2>
            </div>
        ))}

        <div className="flex justify-center items-center space-x-4 mt-6">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                Previous
            </button>
            {Array.from({ length: Math.ceil(dummyImagesData.length / itemsPerPage) }).map((_, index) => (
                <button key={index} onClick={() =>  paginate(index + 1)}
                className={`px-4 py-2 border rounded-md border-gray-300 ${
                    currentPage === index + 1 ? 'bg-gray-200 font-bold' : 'bg-white'
                }`}>
                    {index + 1}
                </button>
            ))}
            <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(dummyImagesData.length / itemsPerPage)}
            >
                Next
            </button>
        </div>

        <Footer />
    </>
);
};

export default Images;