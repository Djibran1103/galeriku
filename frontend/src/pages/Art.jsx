import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Art = () => {
  const dummyArtData = [
    {
      id: 1,
      title: "Art 1",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    },
    {
      id: 2,
      title: "Art 2",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    },
    {
      id: 3,
      title: "Art 3",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    },
    {
      id: 4,
      title: "Art 4",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    },
    {
      id: 5,
      title: "Art 5",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    },
    {
      id: 6,
      title: "Art 6",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    },
    {
      id: 7,
      title: "Art 7",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    },
    {
      id: 8,
      title: "Art 8",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    },
    {
      id: 9,
      title: "Art 9",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    },
    {
      id: 10,
      title: "Art 10",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    },
  ];

  const itemsPerPage = 4; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyArtData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <h5 className="text-gray-400 mt-8 ml-8">Home - Art</h5>
      <h1 className="font-bold text-3xl ml-8">Art</h1>
      {currentItems.map((video) => (
        <div key={video.id}>
          <h2>{video.title}</h2>
        </div>
      ))}

      <div className="flex justify-center items-center space-x-4 mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({
          length: Math.ceil(dummyArtData.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 border rounded-md border-gray-300 ${
              currentPage === index + 1 ? "bg-gray-200 font-bold" : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(dummyArtData.length / itemsPerPage)
          }
        >
          Next
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Art;
