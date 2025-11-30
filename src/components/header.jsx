import { useState } from "react";
import { navLists } from "./navlists";

export default function Header() {
  const [navToggle, setNavToggle] = useState(false);

  const handleClick = () => {
    setNavToggle((prev) => !prev); // toggle state
  };

  return (
    <header className="w-full flex flex-col justify-center items-center bg-gray-100 py-6">
      <div className="relative layout flex justify-between items-center">
        <div className="logo text-2xl font-medium z-20 font-serif text-black">
          <a href="index.html">Portrait Room</a>
        </div>

        <div className="links hidden md:block">
          <ul className="nav-links flex justify-between">
            {navLists.map((list, index) => (
              <li key={index}>
                <a
                  href=""
                  className="active text-lg font-medium text-black hover:opacity-70 capitalize md:ml-6 transition duration-300"
                >
                  {list}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div
          onClick={handleClick}
          className="hamburge md:hidden z-20 cursor-pointer flex flex-col justify-between w-6 h-5"
        >
          <div
            className={`hamburge-top h-0.5 w-full bg-black transition-transform duration-300 ${
              navToggle ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`hamburge-middle h-0.5 w-full bg-black transition-opacity duration-300 ${
              navToggle ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`hamburge-bottom h-0.5 w-full bg-black transition-transform duration-300 ${
              navToggle ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute  top-14 left-0 w-full bg-black/95 md:hidden shadow-lg overflow-hidden transition-all duration-300 z-10 ${
            navToggle ? " py-18" : "max-h-0 py-0"
          }`}
        >
          <ul className="flex flex-col items-left px-4">
            {navLists.map((list, index) => (
              <li key={index} className="py-3">
                <a
                  href="index.html"
                  className="text-lg font-medium text-primary hover:opacity-70 capitalize transition duration-300"
                  onClick={() => setNavToggle(false)} // close menu when link clicked
                >
                  {list}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
