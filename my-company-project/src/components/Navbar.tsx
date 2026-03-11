import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import Backendless from "../services/backendless";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuthStore();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await Backendless.UserService.logout();
      logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout gagal:", err);
      logout();
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md font-sans">
      <div className="h-1.25 bg-[#991b1b] w-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="shrink-0 flex items-center">
            <Link to="/">
              <img
                className="h-14 w-auto"
                src="https://b856188.smushcdn.com/856188/wp-content/uploads/2022/02/logo3-e1511767184374.png?lossy=2&strip=1&webp=1&size=150x0"
                alt="Telkom University Logo"
              />
            </Link>
          </div>

          <div className="hidden lg:flex space-x-8 items-center">
            <Link
              to="/about"
              className="text-[#333] hover:text-[#991b1b] font-bold text-[13px] tracking-tight transition duration-300"
            >
              TENTANG KAMI
            </Link>
            <Link
              to="/services"
              className="text-[#333] hover:text-[#991b1b] font-bold text-[13px] tracking-tight transition duration-300"
            >
              LAYANAN
            </Link>
            <Link
              to="/teams"
              className="text-[#333] hover:text-[#991b1b] font-bold text-[13px] tracking-tight transition duration-300"
            >
              TIM KAMI
            </Link>
            <Link
              to="/blog"
              className="text-[#333] hover:text-[#991b1b] font-bold text-[13px] tracking-tight transition duration-300"
            >
              BLOG
            </Link>
          </div>

          <div className="flex items-center space-x-5">
            <button className="text-[#991b1b] hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <div className="hidden sm:flex items-center space-x-5">
              {isLoggedIn ? (
                <div className="flex items-center gap-4">
                  <Link
                    to="/create-blog"
                    className="bg-[#991b1b] text-white px-6 py-3 rounded-md font-bold text-[13px] hover:bg-red-900 transition shadow-lg tracking-wider"
                  >
                    BUAT BLOG
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-500 hover:text-red-700 text-[11px] font-bold tracking-widest"
                  >
                    LOGOUT
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-[#991b1b] text-white px-8 py-3 rounded-md font-bold text-[14px] hover:bg-red-900 transition shadow-md tracking-widest"
                >
                  LOGIN
                </Link>
              )}
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#991b1b] focus:outline-none"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-gray-50 border-t border-gray-100 shadow-inner">
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-3 text-[#333] font-bold text-sm border-b border-gray-100"
          >
            TENTANG KAMI
          </Link>
          <Link
            to="/services"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-3 text-[#333] font-bold text-sm border-b border-gray-100"
          >
            LAYANAN
          </Link>
          <Link
            to="/teams"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-3 text-[#333] font-bold text-sm border-b border-gray-100"
          >
            TIM KAMI
          </Link>
          <Link
            to="/blog"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-3 text-[#333] font-bold text-sm border-b border-gray-100"
          >
            BLOG
          </Link>

          <div className="pt-4 sm:hidden">
            {isLoggedIn ? (
              <div className="flex flex-col gap-3">
                <Link
                  to="/create-blog"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-[#991b1b] text-white text-center py-3 rounded-md font-bold text-xs"
                >
                  BUAT BLOG
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-red-700 font-bold text-[10px] tracking-widest py-2"
                >
                  LOGOUT
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#991b1b] text-white text-center block py-3 rounded-md font-bold text-xs"
              >
                LOGIN
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
