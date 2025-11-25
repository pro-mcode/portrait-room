// // import { serviceContents } from "./service-content";
// // export default function Service() {
// //   return (
// //     <section id="service" className="service py-12">
// //       <div className="layout mx-auto">
// //         <h2 className="section-title text-4xl md:text-5xl text-center font-medium tracking-wide">
// //           Services we offer
// //         </h2>
// //         <p className="section-intro text-base text-center tracking-wider leading-6 font-medium py-4 md:text-lg">
// //           Every photo tells a story. Explore a range of personalized photography
// //           services designed to capture the moments that matter most — from
// //           intimate portraits to grand celebrations.
// //         </p>
// //         <div className="service-container">
// //           <div className="service-items space-y-12 my-12 md:space-y-0">
// //             {serviceContents.map((service) => (
// //               <div key={service.title} className="service-content my-8 md:my-0">
// //                 <div className="flex flex-col md:flex-row md:gap-x-6 ">
// //                   <div className="flex justify-items-start items-start gap-4 md:max-w-[45%]">
// //                     {/* Icon */}
// //                     <span className="hidden text-4xl border border-red-800 md:block">
// //                       {service.icon}
// //                     </span>

// //                     {/* Content */}
// //                     <div className="flex-1">
// //                       <div className="flex gap-4">
// //                         <span className="text-4xl border border-red-800 md:hidden">
// //                           {service.icon}
// //                         </span>
// //                         <h3 className="text-2xl font-semibold border border-red-800">
// //                           {service.title}
// //                         </h3>
// //                       </div>
// //                       <p className="text-base md:text-lg my-4 border border-red-800">
// //                         {service.description}
// //                       </p>
// //                     </div>
// //                   </div>

// //                   {/* Image */}
// //                   <div className="service-img">
// //                     <img src={service.img} alt="" />
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import { useState } from "react";
// import { serviceContents } from "./service-content";

// export default function Service() {
//   const [activeIndex, setActiveIndex] = useState(0); // First item open by default

//   const toggleService = (index) => {
//     setActiveIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <section id="service" className="service py-12">
//       <div className="layout mx-auto">
//         <h2 className="section-title text-4xl md:text-5xl text-center font-medium tracking-wide">
//           Services we offer
//         </h2>
//         <p className="section-intro text-base text-center tracking-wider leading-6 font-medium py-4 md:text-lg">
//           Every photo tells a story. Explore a range of personalized photography
//           services designed to capture the moments that matter most — from
//           intimate portraits to grand celebrations.
//         </p>

//         <div className="service-container space-y-4 md:space-y-6">
//           {serviceContents.map((service, index) => {
//             const isActive = index === activeIndex;

//             return (
//               <div
//                 key={service.title}
//                 className="service-item border rounded-lg overflow-hidden"
//               >
//                 {/* Title row */}
//                 <div
//                   className="flex items-center justify-between cursor-pointer p-4 bg-gray-100 hover:bg-gray-200"
//                   //   onClick={() => setActiveIndex(index)}
//                   onClick={() => toggleService(index)}
//                 >
//                   <div className="flex items-center gap-4">
//                     <span
//                       className={`text-3xl text-black md:text-4xl transition-colors duration-300 ${
//                         isActive ? "" : "opacity-75"
//                       }`}
//                     >
//                       {service.icon}
//                     </span>

//                     <h3
//                       className={`text-xl text-black md:text-2xl font-semibold transition-colors duration-300 ${
//                         isActive ? "" : "opacity-75"
//                       }`}
//                     >
//                       {service.title}
//                     </h3>
//                   </div>

//                   <span className="text-xl">{isActive ? "−" : "+"}</span>
//                 </div>

//                 {/* Description + Image */}
//                 {isActive && (
//                   <div className="flex flex-col md:flex-row gap-4 p-4">
//                     <p className="text-base md:text-lg flex-1">
//                       {service.description}
//                     </p>

//                     <div className="service-img md:max-w-[55%]">
//                       <img
//                         src={service.img}
//                         alt={service.title}
//                         className="w-full h-82 object-cover rounded"
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { serviceContents } from "./service-content";

export default function Service() {
  const [activeIndex, setActiveIndex] = useState(0); // first item open by default

  return (
    <section id="service" className="service py-12">
      <div className="layout mx-auto">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-center font-medium tracking-wide">
          Services we offer
        </h2>

        <p className="section-intro w-full text-sm text-center tracking-wider leading-6 font-medium pt-2 sm:text-base md:py-4 md:text-lg">
          Every photo tells a story. Explore a range of personalized photography
          services designed to capture the moments that matter most — from
          intimate portraits to grand celebrations.
        </p>

        {/* === TWO COLUMN LAYOUT === */}
        <div className="max-w-120 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-start md:min-w-full">
          {/* LEFT SIDE – LIST */}
          <div className="space-y-6">
            {serviceContents.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={service.title}
                  onClick={() => setActiveIndex(index)}
                  className="cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <span
                      className={`text-4xl hidden text-black transition-colors duration-300 md:block ${
                        isActive ? "" : "opacity-50"
                      }`}
                    >
                      {service.icon}
                    </span>

                    {/* Title + Description */}
                    <div>
                      <div className="flex gap-4">
                        <span
                          className={`text-3xl text-black sm:text-4xl md:hidden transition-colors duration-300 ${
                            isActive ? "" : "opacity-70"
                          }`}
                        >
                          {service.icon}
                        </span>

                        <h3
                          className={`text-[1.3rem] text-black font-semibold transition-colors duration-300 sm:text-2xl ${
                            isActive ? "" : "opacity-70"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      {/* Only show description if active */}
                      {isActive && (
                        <>
                          <p className="text-sm sm:text-base md:text-lg mt-3 leading-6 text-gray-700">
                            {service.description}
                          </p>
                          <img
                            src={serviceContents[activeIndex].img}
                            alt={serviceContents[activeIndex].title}
                            className="w-full h-auto max-h-70 shadow-md md:hidden mt-4"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div>
            <img
              src={serviceContents[activeIndex].img}
              alt={serviceContents[activeIndex].title}
              className="hidden w-full h-auto max-h-100 shadow-md md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
