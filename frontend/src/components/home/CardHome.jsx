import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="mx-24 mb-5">
      <h1 className="text-center pt-8 pb-8 font-bold text-4xl dark:text-white">
        Check The New Arrival Art
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Link to="/detail/art/1">
        <a href="#">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
        </a></Link>
        <Link to="/detail/art/2">
        <a href="#">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </a></Link>
        <Link to="/detail/art/3">
        <a href="#">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </a></Link>
        <Link to="/detail/art/4">
        <a href="#">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </a>
        </Link>
      </div>
      <div className="flex items-center justify-center pt-5">
          <Link to="/art">
              <button className="rounded-full bg-white text-black outline outline-offset-2 outline-1 outline-[#E9615A] px-16 py-4 hover:text-white hover:bg-[#F9D86C]">
                  View All
              </button>
          </Link>
      </div>
      <div>
        <h1 className="text-center pt-8 pb-8 font-bold text-4xl dark:text-white">
          Check The New Arrival Video
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link to="/detail/video/1">
          <a href="#">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </a>
          </Link>
          <Link to="/detail/video/2">
          <a href="#">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              alt=""
            />
          </a>
          </Link>
          <Link to="/detail/video/3">
          <a href="#">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
              alt=""
            />
          </a>
          </Link>
          <Link to="/detail/video/4">
          <a href="#">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
              alt=""
            />
          </a>
          </Link>
        </div>
        <div className="flex items-center justify-center pt-5">
          <Link to="/Videos">
              <button className="rounded-full bg-white text-black outline outline-offset-2 outline-1 outline-[#E9615A] px-16 py-4 hover:text-white hover:bg-[#F9D86C]">
                  View All
              </button>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-center pt-8 pb-8 font-bold text-4xl	dark:text-white">
          Check The New Photo
        </h1>
        <div className="flex flex-col bg-gray-200 rounded-lg mx-24 dark:bg-slate-900">
          <div className="grid grid-cols md:grid-cols-2 gap-4 mx-4 my-4">
          <Link to="/detail/image/9">
            <a href="#">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
                alt=""
              />
            </a>
            </Link>
            <Link to="/detail/image/10">
            <a href="#">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
                alt=""
              />
            </a>
            </Link>
            <Link to="/detail/image/11">
            <a href="#">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
                alt=""
              />
            </a>
            </Link>
            <Link to="/detail/image/12">
            <a href="#">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
                alt=""
              />
            </a>
            </Link>
          </div>
          <div className="flex items-center justify-center pt-5 pb-5">
            <Link to="/images">
              <button className="rounded-full bg-white text-black outline outline-offset-2 outline-1 outline-[#E9615A] px-16 py-4 hover:text-white hover:bg-[#F9D86C]">
                  View All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
