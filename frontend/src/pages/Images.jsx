import { useState } from "react";
import ReactPaginate from "react-paginate";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Images = () => {
  const dummyImagesData = [
    {
      id: 1,
      title: "Image 1",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      stars: 1,
    },
    {
      id: 2,
      title: "Image 2",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      stars: 2,
    },
    {
      id: 3,
      title: "Image 3",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      stars: 4,
    },
    {
      id: 4,
      title: "Image 4",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      stars: 5,
    },
    {
      id: 5,
      title: "Image 5",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      stars: 4,
    },
    {
      id: 6,
      title: "Image 6",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      stars: 1,
    },
    {
      id: 7,
      title: "Image 7",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      stars: 3,
    },
    {
      id: 8,
      title: "Image 8",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      stars: 5,
    },
    {
      id: 9,
      title: "Image 9",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
      stars: 4,
    },
    {
      id: 10,
      title: "Image 10",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      stars: 5,
    },
  ];

    const handlePageClick = (data) => {
      setCurrentPage(data.selected + 1);
    };

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyImagesData.slice(indexOfFirstItem, indexOfLastItem);

  const renderStars = (numStars) => {
    const yellowStarStyle = {
      color: "#FFD700", 
    };
    if (numStars > 0) {
        return (
          <div className="flex items-center">
            <span style={yellowStarStyle}>
              {"★".repeat(numStars)}
            </span>
            <span className="ml-1">{numStars}</span>
            <span className="ml-1">/ 5</span>
          </div>
        );
      }
      return "";
    };

  return (
    <>
      <Navbar />
      <h5 className="text-gray-400 mt-8 ml-8">Home - Images</h5>
      <h1 className="font-bold text-3xl ml-8">Images</h1>
      <div className="grid grid-cols-3 gap-4 mx-8 mt-2">
        {currentItems.map((image) => (
          <div key={image.id}>
            <img className="rounded-lg" src={image.src} alt={image.title} />
            <h2>{image.title}</h2>
            <div className="flex items-center mt-2">
              {renderStars(image.stars)}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-4 mt-6">
        <ReactPaginate
          pageCount={Math.ceil(dummyImagesData.length / itemsPerPage)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName="pagination flex space-x-2"
          pageClassName="px-4 py-2 border rounded-md border-gray-300 bg-white cursor-pointer"
          activeClassName="bg-gray-200 font-bold"
          previousClassName={`px-4 py-2 border rounded-md border-gray-300 ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-white cursor-pointer"
          }`}
          nextClassName={`px-4 py-2 border rounded-md border-gray-300 ${
            currentPage === Math.ceil(dummyImagesData.length / itemsPerPage)
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-white cursor-pointer"
          }`}
          previousLabel="Previous"
          nextLabel="Next"
        />
      </div>

      <Footer />
    </>
  );
};

export default Images;
