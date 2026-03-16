import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>

      {/* <!-- Hero Section --> */}
      <section class="flex mt-24 lg:mt-48 justify-start">
        <div class="">
         
                            <motion.h1
                    id="about"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.6, delay: 0 }}
                    className="text-base mb-4 text-black/60 "
                  >
Hey there,
                  </motion.h1>

                  <motion.p
                    id="about"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.6, delay: 0.1 }}
                    className="text-lg md:text-2xl leading-relaxed max-w-4xl "
                  >
                                Nice to meet you, I'm Miguel. I enjoy UI design, coding, and
            building user-centered digital experiences. Feel free to explore my
            portfolio and get in touch!
                  </motion.p>

         
        </div>
      </section>
      {/* <!-- Main Section --> */}
      <main class="mt-24 lg:mt-48">
        <div class="">
          <h1 id="featured" class="text-lg tracking-tight mb-8 pb-4 border-b border-gray-200">
            Featured Work
          </h1>
          <Link to="/project/1" className="w-full flex flex-col group mb-12">
            <div className="relative rounded-xl w-full aspect-[16/9] bg-white/5 overflow-hidden cursor-pointer">
              <img
                src="/img2.png"
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
              <div>
                <h1 className="text-lg md:text-xl">Itinera</h1>
                <p className="text-sm md:text-lg text-gray">
                  Itinerary planning made easy
                </p>
              </div>

              <p className="text-base md:text-xl text-gray">2025</p>
            </div>
          </Link>
        </div>
      </main>

      {/* for link */}
      {/* <div id="testimonials hidden"></div> */}
      {/* <!-- Testimonial Section --> */}
      {/* <div className="mt-24 lg:mt-48 hidden">
        <h1 className="text-base mb-8 pb-4 border-b border-gray-200">
          Testimonials
        </h1>
        <div className="w-full h-full flex flex-col gap-4 min-h-0">
          <div className="testimonial-card bg-black/2 p-6 border rounded-lg border-gray-200 w-full flex flex-col gap-8">
            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              veniam quasi unde temporibus voluptatem molestias eos sed deleniti
              accusamus nesciunt, mollitia dolorum est sit cumque voluptatibus,
              inventore molestiae provident necessitatibus!
            </p>
            <div className="flex items-center gap-4">
              <div className="size-10 bg-blue-500 rounded-full"></div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray ">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card bg-black/2 p-6 border rounded-lg border-gray-200 w-full flex flex-col gap-8">
            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              veniam quasi unde temporibus voluptatem molestias eos sed deleniti
              accusamus nesciunt, mollitia dolorum est sit cumque voluptatibus,
              inventore molestiae provident necessitatibus!
            </p>
            <div className="flex items-center gap-4">
              <div className="size-10 bg-blue-500 rounded-full"></div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray ">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
