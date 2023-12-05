import { Link, useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <section className=" bg-no-repeat bg-[url('https://api-cdn.figma.com/resize/img/40e4/04e7/1112444da1295506c5f14d9defc417db?expiration=1702252800&signature=1a3738055524a181bda6731cef2303c3f5afcc58a6c61b5d88b6e82490a44b00&maxsize=2048&bucket=figma-alpha')] bg-white bg-blend-clear bg-cover">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-dark md:text-5xl lg:text-6xl">
          Selamat datang <br /> di Our Gallery
        </h1>
        <p className="mb-8 text-lg font-normal text-dark-300 lg:text-xl sm:px-16 lg:px-48">
          Lihatlah galeri online atas karya anak bangsa dari seni lukis, foto,
          video dan berbagai macam hal lainnya.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            to="/login"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#E9615A] hover:bg-[#F9D86C] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            onClick={handleSignInClick}
          >
            Sign in
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <Link
            to="/aboutus"
            className="inline-flex justify-center hover:text-white items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-dark rounded-lg border border-black hover:bg-gray-900 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
