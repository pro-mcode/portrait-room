import { blogCard } from "./blog-card";

export default function Blog() {
  return (
    <div className="packages bg-gray-100 py-12 md:py-24">
      <div className="layout mx-auto">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-center font-medium tracking-wide">
          Latest blog posts
        </h2>

        <p className="section-intro w-full text-sm text-center tracking-wider leading-6 font-medium pt-2 sm:text-base md:py-4 md:text-lg">
          Welcome to our blog, a space filled with ideas, experiences, and
          photography knowledge designed to spark creativity and inspire
          passion.
        </p>
        <div className="blog-grid flex flex-col space-y-6 justify-center items-strecth gap-4 mt-8 md:flex-row md:space-y-0 md:max-w-5xl mx-auto">
          {blogCard.map((blog, index) => (
            <div
              key={index}
              className="blog-card w-full max-w-92 md:w-1/3 mx-auto"
            >
              <img
                src={blog.img}
                alt="Blog Post Image"
                className="h-64 w-full"
              />
              <div className="blog-content bg-primary py-8 px-6">
                <h3 className="text-lg font-bold md:text-[1.3rem] leading-6 mb-4">
                  {blog.title}
                </h3>
                <span className="date text-sm font-medium text-gray-500">
                  {blog.date}
                </span>
                <p className="text-base text-black/70 mt-4">{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="blog-navigation mt-8 flex justify-center gap-x-4 mx-auto">
          <button className="nav-btn prev bg-black/70 py-2 px-5 text-primary cursor-pointer hover:opacity-80 transition duration-300">
            ←
          </button>
          <button className="nav-btn next bg-black py-2 px-5 text-primary cursor-pointer hover:opacity-80 transition duration-300">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
