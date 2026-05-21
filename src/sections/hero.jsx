import React, { useState } from "react";
import { motion } from "framer-motion";


export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* <!-- Hero Section --> */}
      <section class="flex mt-24 lg:mt-48 justify-start">
        <div class="">
          <motion.h1

            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", bounce: 0, duration: 0.6, delay: 0 }}
            className="text-base mb-4 text-black/60 "
          >
            Hey there,
          </motion.h1>

          <motion.p

            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.6,
              delay: 0.1,
            }}
            className="text-lg md:text-2xl leading-relaxed max-w-4xl "
          >
            Nice to meet you, I'm Miguel. I enjoy UI design, coding, and
            building user-centered digital experiences. Feel free to explore my
            portfolio and get in touch!
          </motion.p>
        </div>
      </section>
    </>
  );
}
