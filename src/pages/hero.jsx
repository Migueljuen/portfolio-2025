import React from "react";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col items-start justify-center h-dvh gap-8 pb-24">
        {/* Indicator */}
        <div className="border border-white/20 flex items-center px-4 gap-2 rounded-2xl py-1">
          <div className="bg-blue size-3 rounded-full animate-pulse"></div>
          <p className="text-sm text-white/80 font-medium">
            Available for work
          </p>
        </div>

        {/* Name and address */}
        <h1 className="text-5xl font-medium leading-snug">
          Hey, I'm Miguel. <br></br>A Web Developer & UI Designer
        </h1>
        <p className="text-gray text-base">
          Based in Bacolod - passionate in learning and building beautiful
          websites <br />
          mainly in the JavaScript ecosystem.
        </p>
      </section>
    </>
  );
}
