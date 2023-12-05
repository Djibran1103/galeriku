import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams , Link } from "react-router-dom";
import Comments from "../components/detail/Comments";

const Detail = () => {
  const dummyData = [ // minimize aja, cuman data dummy kok
    { id: 1, 
      title: "Art 1", 
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      desc:"Obat Herbal Hemp seed manjur joss prikitiew",
      ratings:4.5,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"art"
    },
    { id: 2, 
      title: "Art 2",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      desc:"lorem ipsum",
      ratings:2,
      created_in:1943,
      artist_name:"Gerrard",
      genre:"art"
    },
    { id: 3, 
      title: "Art 3",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"John Doe",
      genre:"art"
    },
    { id: 4, 
      title: "Art 4",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Rick Hutchison",
      genre:"art"
    },
    { id: 5, 
      title: "Art 5",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Devan Apriandi Dwicahya",
      genre:"art"
    },
    { id: 6, 
      title: "Art 6",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Superm4n",
      genre:"art"
    },
    { id: 7, 
      title: "Art 7",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"art"
    },
    { id: 8, 
      title: "Art 8",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"art"
    },
    { id: 9, 
      title: "Art 9",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"art"
    },
    { id: 10, 
      title: "Art 10",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"art"
    },

    { id: 1,
      title: "Video 1",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      ratings: 1,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"video"
    },
    { id: 2,
      title: "Video 2",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      ratings: 2,
      created_in:2003,
      artist_name:"Vladimir Narodsky",
      genre:"video"
    },
    { id: 3,
      title: "Video 3",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      ratings: 4,
      created_in:2012,
      artist_name:"Ethan Koshnikov",
      genre:"video"
    },
    { id: 4,
      title: "Video 4",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      ratings: 5,
      created_in:2004,
      artist_name:"Boris Klashkaram",
      genre:"video"
    },
    { id: 5,
      title: "Video 5",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      ratings: 4,
      created_in:1943,
      artist_name:"Vadim Blyat",
      genre:"video"
    },
    { id: 6,
      title: "Video 6",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      ratings: 1,
      created_in:1943,
      artist_name:"Aleykhyn Pizdec",
      genre:"video"
    },
    { id: 7,
      title: "Video 7",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      ratings: 3,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"video"
    },
    { id: 8,
      title: "Video 8",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      ratings: 5,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"video"
    },
    { id: 9,
      title: "Video 9",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      ratings: 4,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"video"
    },
    { id: 10,
      title: "Video 10",
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      ratings: 5,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"video"
    },

    { id: 1, 
      title: "Image 1", 
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      desc:"Obat Herbal Hemp seed manjur joss prikitiew",
      ratings:4.5,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"image"
    },
    { id: 2, 
      title: "Image 2",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      desc:"lorem ipsum",
      ratings:2,
      created_in:1943,
      artist_name:"Gerrard",
      genre:"image"
    },
    { id: 3, 
      title: "Image 3",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"John Doe",
      genre:"image"
    },
    { id: 4, 
      title: "Image 4",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Rick Hutchison",
      genre:"image"
    },
    { id: 5, 
      title: "Image 5",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Devan Apriandi Dwicahya",
      genre:"image"
    },
    { id: 6, 
      title: "Image 6",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Superm4n",
      genre:"image"
    },
    { id: 7, 
      title: "Image 7",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"image"
    },
    { id: 8, 
      title: "Image 8",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"image"
    },
    { id: 9, 
      title: "Image 9",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"image"
    },
    { id: 10, 
      title: "Image 10",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"image"
    },
    { id: 11, 
      title: "Image 11",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"image"
    },
    { id: 12, 
      title: "Image 12",
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      desc:"lorem ipsum",
      ratings:4.5,
      created_in:1943,
      artist_name:"Edward Vladislav",
      genre:"image"
    },
  ];

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = selectedData.src;
    downloadLink.download = `${selectedData.title}.${selectedData.genre}`;
    downloadLink.click();
  };

  const { id, genre } = useParams();
  const selectedData = dummyData.find((data) => data.id === parseInt(id, 10) && data.genre === genre);
  if (!selectedData) {
    return <div>
      Data not found
      </div>;
  }

  const stars =[]
  for (let index = 1; index <= 5; index++) {
    const fill = index <= selectedData.ratings ? '#f39c12' : 'gray';
    stars.push(<svg key={index} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 100 100">
        <polygon points="50,0 61.8,35.4 100,40 74.5,65.4 80,100 50,80 20,100 25.5,65.4 0,40 38.2,35.4" fill={fill}/>
    </svg>);
  }

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <div className="flex h-auto max-w-full justify-center align-center rounded-lg grid-col-1">
          <a href={selectedData.src}>
          {selectedData.genre === "art" || selectedData.genre === "image" ? <a href={selectedData.src}><img className="hover:object-none object-fill rounded-lg" src={selectedData.src} alt={selectedData.title} /> </a>: <iframe width="560" height="315" src={selectedData.src} alt={selectedData.title}></iframe>}
          </a>
        </div>
        <div className="h-auto max-w-full rounded-lg grid-col-1">
          <div className="grid grid-cols-6 gap-4">
            <h1 className="col-span-4 mb-4 text-4xl font-extrabold tracking-tight leading-none text-dark md:text-5xl lg:text-6xl">
              {selectedData.title}
            </h1>
            <a className="col-span-2 mb-4 text-end" href="/">
              &larr;back
            </a>
            <div className="grid grid-cols-5">{stars}</div>
            <p>{selectedData.ratings}/5.0(1k)</p>
            <h5 className="col-span-6 mb-4 text-4md font-bold text-gray-400 tracking-tight leading-none text-dark md:text-4md lg:text-6md">
              {selectedData.desc}
            </h5>
            <div className="col-span-6 grid grid-cols-6 border-t">
              <p className="col-span-6 m-2">
                created in : <br /> {selectedData.created_in}
              </p>
            </div>
            <div className="col-span-6 grid grid-cols-6 border-t">
              <p className="col-span-6 m-2">Artist :</p>
              <p className="col-span-2 rounded-full bg-gray-900 text-white text-center">
                {selectedData.artist_name}
              </p>
              <br />
              <button className="col-span-2 rounded-full bg-gray-900 text-white text-center" onClick={handleDownload}>
                <span className="sr-only">Download</span>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <Comments />
      <h1 className="text-center font-bold text-3xl"> Rekomendasi Lainnya </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-24 mt-2">
        <Link to="/detail/art/1">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            />
            <h1 className="text-center">Gambar 1</h1>
          </Link>
          <Link to="/detail/art/2">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
            <h1 className="text-center">Gambar 2</h1>
          </Link>
          <Link to="/detail/art/3">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            />
            <h1 className="text-center">Gambar 3</h1>
          </Link>
          <Link to="/detail/art/4">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
            <h1 className="text-center">Gambar 4</h1>
          </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
