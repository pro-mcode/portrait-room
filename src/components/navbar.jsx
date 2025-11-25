import { useState } from "react";
import { navLists } from "./navlists";

export default function Navbar() {
  const [navToggle, setNavToggle] = useState(false);

  const handleClick = () => {
    setNavToggle((prev) => !prev); // toggle state
  };

  return (
    <nav className="navbar layout absolute top-10 z-20 w-full flex justify-between items-center">
      <div className="logo text-2xl font-medium z-20 font-serif">
        <a href="index.html">The Portrait Room</a>
      </div>

      <div className="links hidden md:block">
        <ul className="nav-links flex justify-between">
          {navLists.map((list, index) => (
            <li key={index}>
              <a
                href=""
                className="active text-lg font-medium text-primary hover:opacity-70 capitalize md:ml-6 transition duration-300"
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
          className={`hamburge-top h-0.5 w-full bg-primary transition-transform duration-300 ${
            navToggle ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`hamburge-middle h-0.5 w-full bg-primary transition-opacity duration-300 ${
            navToggle ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`hamburge-bottom h-0.5 w-full bg-primary transition-transform duration-300 ${
            navToggle ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></div>
      </div>

      {/* Mobile Nav Links */}
      {/* {navToggle && (
        <div className="mobile-nav absolute pt-16 pb-16 top-0 left-0 w-full bg-black/95 md:hidden shadow-lg">
          <ul className="flex flex-col items-left py-4 px-8">
            {navLists.map((list, index) => (
              <li key={index} className="py-3">
                <a
                  href="index.html"
                  className="text-lg font-medium text-primary hover:opacity-70 capitalize transition duration-300"
                  onClick={() => setNavToggle(false)} // close menu on link click
                >
                  {list}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )} */}
      {/* Mobile Menu */}
      <div
        className={`absolute  top-0 left-0 w-full bg-black/95 md:hidden shadow-lg overflow-hidden transition-all duration-300 ${
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
    </nav>
  );
}
