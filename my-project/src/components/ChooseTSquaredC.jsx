import React from "react";
import img1 from "../images/Choose1.png";
import img2 from "../images/Choose2.png";
import img3 from "../images/Choose3.png";
import img4 from "../images/Choose4.png";

const ChooseTSquaredC = () => {
  return (
    <div className="text-center py-10 bg-black pb-20">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-blue-200 to-blue-950 bg-clip-text text-transparent pb-6">
        Why Choose TSquaredC
      </h1>
      <p className="text-gray-400 mt-4 mb-10 px-4 sm:px-10">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse
        consequat ornare elit."
      </p>
      <div className="flex flex-wrap justify-center gap-6 px-5">
        <div
          className="w-80 sm:w-[90%] md:w-[30%] max-w-sm p-4 sm:p-6 rounded-lg"
          style={{
            background: "linear-gradient(180deg, #4A00E0 0%, #000000 100%)",
          }}
        >
          <div className="flex items-center mb-4">
            <i className="fas fa-briefcase text-white text-xl mr-2"></i>
            <h1 className="text-white text-lg font-semibold">
              Tech & Talent Unified
            </h1>
          </div>
          <p className="text-gray-300 mb-5">
            Access every technology, every skill set, and every tool - fully
            integrated and ready to execute.
          </p>
          <img src={img1} alt="img" className="w-full h-auto" />
        </div>

        <div
          className="w-80 sm:w-[90%] md:w-[30%] max-w-sm p-4 sm:p-6 rounded-lg"
          style={{
            background: "linear-gradient(180deg, #4A00E0 0%, #000000 100%)",
          }}
        >
          <div className="flex items-center mb-4">
            <i className="fas fa-briefcase text-white text-xl mr-2"></i>
            <h1 className="text-white text-lg font-semibold">
              Scale Right, Scale Fast
            </h1>
          </div>
          <p className="text-gray-300 mb-5">
            Access every technology, every skill set, and every tool - fully
            integrated and ready to execute.
          </p>
          <img src={img2} alt="img" className="w-full h-auto" />
        </div>

        <div
          className="w-80 sm:w-[90%] md:w-[30%] max-w-sm p-4 sm:p-6 rounded-lg"
          style={{
            background: "linear-gradient(180deg, #4A00E0 0%, #000000 100%)",
          }}
        >
          <div className="flex items-center mb-4">
            <i className="fas fa-briefcase text-white text-xl mr-2"></i>
            <h1 className="text-white text-lg font-semibold">
              AI-Powered Innovation
            </h1>
          </div>
          <p className="text-gray-300 mb-5">
            Access every technology, every skill set, and every tool - fully
            integrated and ready to execute.
          </p>
          <img src={img3} alt="img" className="w-full h-auto" />
        </div>

        <div
          className="w-80 sm:w-[90%] md:w-[30%] max-w-sm p-4 sm:p-6 rounded-lg"
          style={{
            background: "linear-gradient(180deg, #4A00E0 0%, #000000 100%)",
          }}
        >
          <div className="flex items-center mb-4">
            <i className="fas fa-briefcase text-white text-xl mr-2"></i>
            <h1 className="text-white text-lg font-semibold">
              Supercharge Your Product
            </h1>
          </div>
          <p className="text-gray-300 mb-5">
            Access every technology, every skill set, and every tool - fully
            integrated and ready to execute.
          </p>
          <img src={img4} alt="img" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ChooseTSquaredC;
