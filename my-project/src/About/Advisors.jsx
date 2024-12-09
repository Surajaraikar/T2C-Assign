import React from "react";
import raj from "../images/raj.png";
import ganesh from "../images/ganesh.png";
import venkat from "../images/venkat.png";

const Advisors = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-black">
      <div className="text-center mb-8">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
          Our Advisors
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold text-slate-50 bg-clip-tex">
          Meet our advisors that{" "}
          <h1 className="text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-blue-100 to-blue-900 bg-clip-text text-transparent pb-6">
            brings it all together{" "}
          </h1>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center">
          <img
            src={venkat}
            alt="Advisor 1"
            className="rounded-full w-48 h-48 object-cover mb-4"
          />
          <div className="bg-gray-800 text-center py-2 px-4 rounded-lg">
            <h3 className="text-lg font-semibold">Rubina Atwal</h3>
            <p className="text-sm text-gray-400">Product Experience Head</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={ganesh}
            alt="Advisor 2"
            className="rounded-full w-48 h-48 object-cover mb-4"
          />
          <div className="bg-gray-800 text-center py-2 px-4 rounded-lg">
            <h3 className="text-lg font-semibold">Rubina Atwal</h3>
            <p className="text-sm text-gray-400">Product Experience Head</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={raj}
            alt="Advisor 3"
            className="rounded-full w-48 h-48 object-cover mb-4"
          />
          <div className="bg-gray-800 text-center py-2 px-4 rounded-lg">
            <h3 className="text-lg font-semibold">Rubina Atwal</h3>
            <p className="text-sm text-gray-400">Product Experience Head</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisors;
