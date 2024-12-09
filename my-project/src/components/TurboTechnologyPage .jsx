import React from "react";

const TurboTechnologyPage = () => {
  return (
    <div className="bg-gradient-to-b from-black to-blue-950 text-white">
      <div className="max-w-full md:mx-16 px-4 py-6">
        {/* Header Section */}
        <div className="text-center mb-12 ">
          <h1 className="text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-blue-100 to-blue-900 bg-clip-text text-transparent pb-6">
            Technology, Turbocharged
          </h1>
          <p className="text-slate-300 text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nulla velit, maximus sit amet suscipit in, fermentum id est.
            Suspendisse consequat ornare elit.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card Component */}
          {[
            {
              title: "TurboSend",
              description:
                "Instantly deploy powerful chat functionalities built for scalability and real-time performance. No delays, just results.",
            },
            {
              title: "TurboAuth",
              description:
                "TurboAuth simplifies secure authentication processes for all users.",
            },
            {
              title: "TurboStream",
              description:
                "Deliver seamless streaming with our ultra-efficient, high-performance solution.",
            },
            {
              title: "TurboCloud",
              description:
                "Modern, optimized, and secure cloud solutions built for peak efficiency.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg bg-gray-900 text-white mx-auto"
            >
              <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-950 to-black p-6">
                <h1 className="text-4xl font-bold text-center">TURBO</h1>
                <h2 className="text-4xl font-bold text-center text-blue-300">
                  {card.title.toUpperCase().replace("TURBO", "")}
                </h2>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-400 mb-4">{card.description}</p>
                <a href="#" className="text-blue-400 flex items-center link">
                  Check Now{" "}
                  <i className="fas fa-arrow-right ml-2 hover-rotate transition-transform duration-200"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TurboTechnologyPage;
