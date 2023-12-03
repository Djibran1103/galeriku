import { useState } from "react";
import ReactPaginate from "react-paginate";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Videos = () => {
  const dummyVideosData = [
    {
      id: 1,
      title: "Video 1",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      stars: 1,
    },
    {
      id: 2,
      title: "Video 2",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      stars: 2,
    },
    {
      id: 3,
      title: "Video 3",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      stars: 4,
    },
    {
      id: 4,
      title: "Video 4",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      stars: 5,
    },
    {
      id: 5,
      title: "Video 5",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      stars: 4,
    },
    {
      id: 6,
      title: "Video 6",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      stars: 1,
    },
    {
      id: 7,
      title: "Video 7",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      stars: 3,
    },
    {
      id: 8,
      title: "Video 8",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      stars: 5,
    },
    {
      id: 9,
      title: "Video 9",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      stars: 4,
    },
    {
      id: 10,
      title: "Video 10",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
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
  const currentItems = dummyVideosData.slice(indexOfFirstItem, indexOfLastItem);

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
      <h5 className="text-gray-400 mt-8 ml-8">Home - Videos</h5>
      <h1 className="font-bold text-3xl ml-8">Videos</h1>
      <div className="grid grid-cols-3 gap-4 mx-8 mt-2">
        {currentItems.map((video) => (
          <div key={video.id}>
            {/* Replace 'img' with 'video' for video rendering */}
            <video className="rounded-lg" controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h2>{video.title}</h2>
            <div className="flex items-center mt-2">
              {renderStars(video.stars)}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-4 mt-6">
        <ReactPaginate
          pageCount={Math.ceil(dummyVideosData.length / itemsPerPage)}
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
            currentPage === Math.ceil(dummyVideosData.length / itemsPerPage)
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

export default Videos;
