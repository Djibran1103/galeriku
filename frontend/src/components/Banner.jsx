import { useState } from 'react';

const Banner = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapseToggle = () => {
      setIsCollapsed(!isCollapsed);
    };
    const style = {
        backgroundImage: 'url("https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return(
        <div id='marketing-banner' style={style} tabIndex={-1} className={`top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 ${isCollapsed ? 'hidden' : ''}`} >
        
            <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
            <a
                href="https://flowbite.com/"
                className="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600"
            >
                <img
                src="../../vite.svg"
                className="h-6 me-2"
                alt="Flowbite Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-dark">
                Our Gallery
                </span>
            </a>
            <p className="flex items-center text-md ">
                Discover Art, Video, and Photo
            </p>
            </div>
            <div className="flex items-center flex-shrink-0">
            <a
                href="#"
                className="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                Sign In
            </a>
            <button
                onClick={handleCollapseToggle}
                data-dismiss-target='#marketing-banner'
                type="button"
                className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-white hover:text-dark rounded-lg text-sm p-1.5 dark:hover:bg-white dark:hover:text-default"
            >
                <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
                </svg>
                <span className="sr-only">Close banner</span>
            </button>
            </div>
      </div>
      )
};

export default Banner;