import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import Comments from "../components/detail/Comments";

const Detail = () => {
  const dummyArtData = [
    // minimize aja, cuman data dummy kok
    {
      id: 1,
      title: "Art 1",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      desc: "Obat Herbal Hemp seed manjur joss prikitiew",
      ratings: 4.5,
      created_in: 1943,
      artist_name: "Edward Vladislav",
    },
    {
      id: 2,
      title: "Art 2",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      desc: "lorem ipsum",
      ratings: 2,
      created_in: 1943,
      artist_name: "Gerrard",
    },
    {
      id: 3,
      title: "Art 3",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      desc: "lorem ipsum",
      ratings: 4.5,
      created_in: 1943,
      artist_name: "John Doe",
    },
    {
      id: 4,
      title: "Art 4",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      desc: "lorem ipsum",
      ratings: 4.5,
      created_in: 1943,
      artist_name: "Rick Hutchison",
    },
    {
      id: 5,
      title: "Art 5",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      desc: "lorem ipsum",
      ratings: 4.5,
      created_in: 1943,
      artist_name: "Devan Apriandi Dwicahya",
    },
    {
      id: 6,
      title: "Art 6",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      desc: "lorem ipsum",
      ratings: 4.5,
      created_in: 1943,
      artist_name: "Superm4n",
    },
    {
      id: 7,
      title: "Art 7",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      desc: "lorem ipsum",
      ratings: 4.5,
      created_in: 1943,
      artist_name: "Edward Vladislav",
    },
    {
      id: 8,
      title: "Art 8",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      desc: "lorem ipsum",
      ratings: 4.5,
      created_in: 1943,
      artist_name: "Edward Vladislav",
    },
    {
      id: 9,
      title: "Art 9",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
      desc: "lorem ipsum",
      ratings: 4.5,
      created_in: 1943,
      artist_name: "Edward Vladislav",
    },
    {
      id: 10,
      title: "Art 10",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      desc: "lorem ipsum",
      ratings: 4.5,
      created_in: 1943,
      artist_name: "Edward Vladislav",
    },
  ];
  const { id } = useParams();
  const selectedArt = dummyArtData.find((art) => art.id === parseInt(id, 10));
  if (!selectedArt) {
    return <div>Art not found</div>;
  }

  const stars = [];
  for (let index = 1; index <= 5; index++) {
    const fill = index < selectedArt.ratings ? "#f39c12" : "gray";
    stars.push(
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 100 100"
      >
        <polygon
          points="50,0 61.8,35.4 100,40 74.5,65.4 80,100 50,80 20,100 25.5,65.4 0,40 38.2,35.4"
          fill={fill}
        />
      </svg>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <div className="flex h-auto max-w-full justify-center align-center rounded-lg grid-col-1">
          <a href={selectedArt.src}>
            <img
              className="hover:object-none object-fill"
              src={selectedArt.src}
              alt={selectedArt.title}
            />
          </a>
        </div>
        <div className="h-auto max-w-full rounded-lg grid-col-1">
          <div className="grid grid-cols-6 gap-4">
            <h1 className="col-span-4 mb-4 text-4xl font-extrabold tracking-tight leading-none text-dark md:text-5xl lg:text-6xl">
              {selectedArt.title}
            </h1>
            <a className="col-span-2 mb-4 text-end" href="/">
              &larr;back
            </a>
            <div className="grid grid-cols-5">{stars}</div>
            <p>{selectedArt.ratings}/5.0(1k)</p>
            <h5 className="col-span-6 mb-4 text-4md font-bold text-gray-400 tracking-tight leading-none text-dark md:text-4md lg:text-6md">
              {selectedArt.desc}
            </h5>
            <div className="col-span-6 grid grid-cols-6 border-t">
              <p className="col-span-6 m-2">
                created in : <br /> {selectedArt.created_in}
              </p>
            </div>
            <div className="col-span-6 grid grid-cols-6 border-t">
              <p className="col-span-6 m-2">Artist :</p>
              <p className="col-span-2 rounded-full bg-gray-900 text-white text-center">
                {selectedArt.artist_name}
              </p>
              <button className="col-span-2 rounded-full bg-gray-900 text-white text-center">
                <span className="sr-only">Download</span>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <Comments />
      <Footer />
    </div>
  );
};

export default Detail;
