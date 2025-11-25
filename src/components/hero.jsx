import Navbar from "./navbar";

export default function Hero() {
  return (
    <div className="hero relative flex flex-col justify-center items-center h-[70vh] max-h-140 md:h-[85vh] 2xl:h-320">
      <Navbar />
      <img
        src="/assets/images/AD-Mphgmain.jpg"
        alt="hero-image"
        className="hero-img absolute inset-0 w-full h-full"
      />

      <div className="layout hero-content absolute space-y-6  md:ml-0">
        <p className="text-2xl font-medium">Shutter</p>
        <img src="/assets/images/AD-Mphgline.webp" alt="" />
        <h1 className="text-4xl font-bold sm:text-5xl md:text-7xl">
          Living stories
          <br />
          in every shot.
        </h1>
        <a className="btn-hero group" href="/gallery.html">
          <span>View Gallery</span>
          <i className="fa-solid fa-arrow-right mt-0.5 group-hover:translate-x-1.5 transition-all duration-300"></i>
        </a>
      </div>
    </div>
  );
}
