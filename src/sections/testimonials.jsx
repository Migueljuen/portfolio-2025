import React from "react";

export default function Testimonials() {
  return (
    <>
      {/* <!-- Testimonial Section --> */}
      <div className="mt-24 lg:mt-48">
        <h1 className="text-base mb-8 pb-4">Testimonials</h1>
        <div className="w-full h-full flex flex-col md:flex-row gap-4 min-h-0">
          <div className="testimonial-card bg-gray-100  p-10  rounded-2xl  w-full flex flex-col gap-16">
            <p className="font-light leading-loose">
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
          <div className="testimonial-card bg-dark-gray p-10 rounded-2xl w-full flex flex-col gap-16">
            <p className=" text-white font-light leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              veniam quasi unde temporibus voluptatem molestias eos sed deleniti
              accusamus nesciunt, mollitia dolorum est sit cumque voluptatibus,
              inventore molestiae provident necessitatibus!
            </p>
            <div className="flex items-center gap-4">
              <div className="size-10 bg-purple-500 rounded-full"></div>
              <div>
                <p className="font-medium text-white" id="story">
                  John Diesto
                </p>
                <p className="text-sm text-white/60 ">Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
