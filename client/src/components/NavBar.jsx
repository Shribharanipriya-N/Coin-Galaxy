import React, { useState } from "react";
import img from "../assets/landingimage.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Wishlist",
      path: "/",
    },
    {
      name: "Cart",
      path: "/cart",
    },
    {
      name: "Orders",
      path: "/",
    },
    {
      name: (
        <>
          <FaUserCircle size={25} />
        </>
      ),
      path: "/",
    },
  ];

  return (
    <>
      <div className="flex justify-center sticky top-0 ">
        <header className="w-full h-[70px] flex items-center justify-between gap-6 shadow-[0px_0px_2px_#FCF55F] border border-primary-light bg-[#FFFFF0]">
          <img className="w-20 h-20 rounded-full ml-10" src={img} alt="logo" />

          <ul className="hidden md:flex flex-row gap-9 mr-15">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="list-none hover:underline hover:decoration-primary-dark"
              >
                <Link
                  to={link.path}
                  className="no-underline text-gray-700 text-lg hover:text-primary-dark transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleSidebar}
            className="md:hidden mr-10 p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isSidebarOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isSidebarOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isSidebarOpen
                    ? "-rotate-45 -translate-y-1"
                    : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </button>
        </header>
      </div>

      <div
        className={`fixed inset-0 z-50 md:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="fixed inset-0 " onClick={closeSidebar}></div>

        <div
          className={`fixed top-0 right-0 h-full w-70 bg-[#FFFFF0] shadow-lg transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={closeSidebar}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="px-4">
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index} className="underline">
                  <Link
                    to={link.path}
                    onClick={closeSidebar}
                    className="block py-3 px-4 text-black text-lg hover:text-primary-dark hover:bg-gray-100 rounded-md transition-colors no-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
