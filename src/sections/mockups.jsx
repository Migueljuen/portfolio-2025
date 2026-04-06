import React from "react";

const mockups = [
  {
    id: 1,
    title: "Coffee Bean",
    description: "POS system for a cafe",
    year: "2024",
    image: "/img2.png",
    embedUrl: "https://embed.figma.com/proto/T7nioN2a5NKXyJLPCbNRSS/COFFEE-SHOP-POS?node-id=6-318&starting-point-node-id=6%3A318&scaling=scale-down-width&embed-host=share",
    featured: true,
  },
  {
    id: 2,
    title: "QuikBasket",
    description: "Your groceries, at your doorstep.",
    year: "2025",
    image: "/img1.png",
    featured: false,
  },
  {
    id: 3,
    title: "Blooms Dream Cafe",
    description: "Mockup UI for a cafe",
    year: "2025",
    image: "/img3.png",
    embedUrl: "https://embed.figma.com/proto/Ifc9dYfmjrFKyzBk56KTVh/Elective-Finals?node-id=525-1566&starting-point-node-id=226%3A53&scaling=scale-down-width&embed-host=share",
    featured: false,
    imageStyle: { objectPosition: "left 20% top 10%" },
  },
];

export default function Mockups() {

  return (
    <section id="mockups" className="mt-24 lg:mt-48">


      {/* Heading */}
          <h1 class="text-lg tracking-tight mb-8 pb-4 border-b border-gray-200">
            Designs that come to life
          </h1>


      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left column — 2 stacked cards */}
        <div className="flex flex-col gap-12 w-full">
          {[mockups[0], mockups[1]].map((mockup) => (
            <div key={mockup.id} className="w-full flex flex-col group">
              <div className="relative rounded-xl w-full aspect-[16/9] bg-white/5 overflow-hidden cursor-pointer">
                {mockup.embedUrl ? (
                  // Coffee bean
                  <iframe
                    src={mockup.embedUrl}
                    className="w-full h-full transition-transform duration-300 group-hover:scale-[1.01]"
                    style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={mockup.image}
                    alt={mockup.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                    style={mockup.imageStyle}
                  />
                )}
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
                <div>
                  <h2 className="text-xl">{mockup.title}</h2>
                  <p className="text-base text-gray">{mockup.description}</p>
                </div>
                <p className="text-xl text-gray">{mockup.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right column — 1 card */}
        <div className="w-full flex flex-col group">
          <div className="relative rounded-xl w-full aspect-[16/9] bg-white/5 overflow-hidden cursor-pointer">
            {mockups[2].embedUrl ? (
              // Blooms
              <iframe
                src={mockups[2].embedUrl}
                className="w-full h-full transition-transform duration-300 group-hover:scale-[1.01]"
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                allowFullScreen
              />
            ) : (
              <img
                src={mockups[2].image}
                alt={mockups[2].title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                style={mockups[2].imageStyle}
              />
            )}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
            <div>
              <h2 className="text-xl">{mockups[2].title}</h2>
              <p className="text-base text-gray">{mockups[2].description}</p>
            </div>
            <p className="text-xl text-gray">{mockups[2].year}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
