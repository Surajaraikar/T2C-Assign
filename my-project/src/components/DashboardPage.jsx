import React from "react";
import image from "../images/imgDash.png";

const DashboardPage = () => {
  return (
    <div className="bg-black pb-20">
      <div className="text-center text-white px-4">
        <h1 className="text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-blue-100 to-blue-900 bg-clip-text text-transparent pb-6">
          Innovation in Action{" "}
        </h1>
        <p className="text-slate-300 text-base lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nulla velit, maximus sit amet suscipit in, fermentum id est.
          Suspendisse consectetur ornare elit.
        </p>
      </div>
      <div className="mt-8 text-center flex justify-center items-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl md:text-base">
          <div className="bg-gradient-to-t from-blue-950  to-black text-white rounded-lg shadow-lg p-10">
            <img src={image} alt="img" className="mb-5" />
            <h3 className="text-xl font-bold mb-2">
              Revolutionized Kenverse's AI capabilities in just 6 months
            </h3>
            <p className="text-gray-400">
              From concept to deployment, TC engineered an AI transformation
              that positioned Kenverse as a market leader.
            </p>
          </div>

          <div className="bg-gradient-to-t from-blue-950  to-black text-white rounded-lg shadow-lg p-10">
            <img src={image} alt="img" className="mb-5" />
            <h3 className="text-xl font-bold mb-2">
              Optimized PiChain's onboarding to reduce friction & boost
              efficiency
            </h3>
            <p className="text-gray-400">
              We automated their workflows and integrated powerful AI tools,
              resulting in seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
