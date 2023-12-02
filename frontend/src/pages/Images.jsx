import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Images = () => {
  const dummyImagesData = [
    {
      id: 1,
      title: "Image 1",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    },
    {
      id: 2,
      title: "Image 2",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    },
    {
      id: 3,
      title: "Image 3",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    },
    {
      id: 4,
      title: "Image 4",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    },
    {
      id: 5,
      title: "Image 5",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    },
    {
      id: 6,
      title: "Image 6",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    },
    {
      id: 7,
      title: "Image 7",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    },
    {
      id: 8,
      title: "Image 8",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    },
    {
      id: 9,
      title: "Image 9",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    },
    {
      id: 10,
      title: "Image 10",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    },
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
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({
          length: Math.ceil(dummyImagesData.length / itemsPerPage),
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
            currentPage === Math.ceil(dummyImagesData.length / itemsPerPage)
          }
        >
          Next
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Images;
