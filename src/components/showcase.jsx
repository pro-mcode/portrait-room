import { gallery } from "./gallery";
export default function Showcase() {
  return (
    <section id="service" className="service py-12">
      <div className="layout mx-auto">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-center font-medium tracking-wide">
          Our latest works
        </h2>

        <p className="section-intro w-full text-sm text-center tracking-wider leading-6 font-medium pt-2 sm:text-base md:py-4 md:text-lg">
          Explore a curated selection of moments we’ve beautifully captured,
          each telling its own unique story.
        </p>
        <div className="gallery-items">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="gallery-item relative hover:bg-black/50 transition duration-300"
            >
              <img
                src={item.img}
                alt={`gallery ${item.id}`}
                className="absolute inset-0 -z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
