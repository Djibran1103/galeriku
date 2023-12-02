import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Videos = () => {
  const dummyVideoData = [
    {
      id: 1,
      title: "Video 1",
      src: "https://youtu.be/BbeeuzU5Qc8?si=LbgdQgJu3eFffYwR",
    },
    {
      id: 2,
      title: "Video 2",
      src: "https://www.youtube.com/watch?v=8hthSIA7Q9g",
    },
    {
      id: 3,
      title: "Video 3",
      src: "https://www.youtube.com/watch?v=CIWlKltMur4",
    },
    {
      id: 4,
      title: "Video 4",
      src: "https://www.youtube.com/watch?v=f9nU7qKexRw",
    },
    {
      id: 5,
      title: "Video 5",
      src: "https://www.youtube.com/watch?v=HlDTUrpSXZA",
    },
    {
      id: 6,
      title: "Video 6",
      src: "https://www.youtube.com/watch?v=WpBtGe2WjlI",
    },
    {
      id: 7,
      title: "Video 7",
      src: "https://www.youtube.com/watch?v=A9YQ2GspTSk",
    },
    {
      id: 8,
      title: "Video 8",
      src: "https://www.youtube.com/watch?v=HxfE2VME4QA",
    },
    {
      id: 9,
      title: "Video 9",
      src: "https://www.youtube.com/watch?v=DxzOuJZ9hf0",
    },
    {
      id: 10,
      title: "Video 10",
      src: "https://www.youtube.com/watch?v=a04Fzq-Qd4c",
    },
  ];

  const itemsPerPage = 4; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyVideoData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <h5 className="text-gray-400 mt-8 ml-8">Home - Videos</h5>
      <h1 className="font-bold text-3xl ml-8">Videos</h1>
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
          length: Math.ceil(dummyVideoData.length / itemsPerPage),
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
            currentPage === Math.ceil(dummyVideoData.length / itemsPerPage)
          }
        >
          Next
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Videos;
