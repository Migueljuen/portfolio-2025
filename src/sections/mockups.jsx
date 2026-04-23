import React from "react";

const mockups = [
  {
    id: 1,
    title: "Blooms Dream Cafe",
    description: "Mockup UI for a cafe",
    year: "2025",
    image: "/img3.png",
    embedUrl:
      "https://embed.figma.com/proto/Ifc9dYfmjrFKyzBk56KTVh/Elective-Finals?node-id=525-1566&starting-point-node-id=226%3A53&scaling=scale-down-width&embed-host=share",
    featured: false,
    imageStyle: { objectPosition: "left 20% top 10%" },
  },

  {
    id: 2,
    title: "Hakban",
    description: "Job tracking application",
    year: "2026",
    embedUrl:
      "https://embed.figma.com/proto/g3SKc3hU1jekty62Ssb7z4/Hakban?node-id=24-233&starting-point-node-id=24%3A233&scaling=scale-down-width&embed-host=share",
  },
  {
    id: 3,
    title: "SavoryTrail",
    description: "Food discovery app",
    year: "2025",
    embedUrl:
      "https://embed.figma.com/proto/8mkvEZ95wyWWxY8aBWlXAs/SavoryTrail?node-id=244-120&starting-point-node-id=244%3A120&scaling=scale-down-width&embed-host=share",
  },
  {
    id: 4,
    title: "QuikBasket",
    description: "Grocery shopping app UI",
    year: "2025",
    embedUrl:
      "https://embed.figma.com/proto/4WU0biS9atidPxwgLXpDBr/Single-Page-Grocery-App?node-id=4-37&scaling=scale-down-width&page-id=0%3A1&embed-host=share",
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
        {/* Left column */}
        <div className="flex flex-col gap-12 w-full">
          {[mockups[0], mockups[1]].map((mockup) => (
            <div key={mockup.id} className="w-full flex flex-col group">
              <div className="relative rounded-xl w-full aspect-[16/9] bg-white/5 overflow-hidden cursor-pointer">
                {mockup.embedUrl ? (
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

        {/* Right column */}
        <div className="flex flex-col gap-12 w-full">
          {[mockups[2], mockups[3]].map((mockup) => (
            <div key={mockup.id} className="w-full flex flex-col group">
              <div className="relative rounded-xl w-full aspect-[16/9] bg-white/5 overflow-hidden cursor-pointer">
                {mockup.embedUrl ? (
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
      </div>
    </section>
  );
}
