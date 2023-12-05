import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("islogin");
      window.alert("Logout Success");
      navigate("/login");
    } catch (error) {
      window.alert("Terdapat kesalahan saat logout" + error.message);
    }
  };

  const pagePaths = ["/aboutus", "/videos", "/art", "/images"];
  const filteredPagePaths = pagePaths.filter((path) =>
    path.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className="sticky top-0 z-50 bg-white border-gray-200 dark:bg-gray-900 shadow-lg">
      <div className="bg-[#F9D86C] py-3"></div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/ "
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="./src/assets/icon.png" className="w-8 h-8"/>
          <h1 className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            Our Gallery
          </h1>
        </Link>
        <div
          className="hidden md:flex md:space-x-8 rtl:space-x-reverse items-center"
          id="navbar-links"
        >
          <Link
            to="/aboutus"
            className="text-gray-900 hover:text-blue-700 dark:text-white"
          >
            About us
          </Link>
          <Link
            to="/videos"
            className="text-gray-900 hover:text-blue-700 dark:text-white"
          >
            Video
          </Link>
          <Link
            to="/art"
            className="text-gray-900 hover:text-blue-700 dark:text-white"
          >
            Art
          </Link>
          <Link
            to="/images"
            className="text-gray-900 hover:text-blue-700 dark:text-white"
          >
            Photo
          </Link>
          <input
            type="text"
            id="search-navbar"
            className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {isOpen && (
            <ul className="md:hidden">
              {filteredPagePaths.map((path) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    {path.replace("/", "")}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={handleClick}
            id="dropdownUserAvatarButton"
            data-dropdown-toggle="dropdownAvatar"
            className="flex text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 absolute right-14 mr-96"
            type="button"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="./assets/orang.jpg"
              alt=""
            />
          </button>
          {showMenu && (
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <div
                id="dropdownAvatar"
                className="fixed mt-56 bg-white divide-y divide-gray-100 right-7 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownUserAvatarButton"
                >
                  <li>
                    <Link
                      to={"/dashboard"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/edit-akun"}
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit Akun
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      type="button"
                    >
                      <span className="sr-only">Logout</span>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-search"
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-links"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden items-center justify-between w-full md:w-auto md:order-1`}
          id="navbar-links"
          ref={dropdownRef}
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          {isOpen && (
            <ul className="md:hidden">
              <li>
                <Link to="/aboutus"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link to="/videos"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Video
                </Link>
              </li>
              <li>
                <Link to="/art"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Art
                </Link>
              </li>
              <li>
                <Link to="/images"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Photo
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
