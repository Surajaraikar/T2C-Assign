import React from "react";
import emra1 from "../images/Emra1.png";
import emra2 from "../images/Emra2.png";

const TurboTechnologyPage = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-black to-black text-white">
      <div className="text-center ">
        <h1 className="text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-blue-100 to-blue-900 bg-clip-text text-transparent pb-6">
          Choose Your SolutionFor Emerging Businesses{" "}
        </h1>
        <p className="text-slate-300 text-base lg:text-lg">
          Propel your new age business forward with our Solutions.
        </p>
      </div>
      <div className=" lg:flex px-10">
        {/* First Section */}
        <div
          className="bg-black text-white py-8 px-6 rounded-lg mx-auto shadow-[5px_12px_221px_82px_rgba(111,_15,_225,_0.33)]
"
        >
          {/* Image Section */}
          <div className="h-48 bg-gray-800 flex justify-center items-center rounded-lg">
            <img
              src={emra1}
              alt="Turbo Technology"
              className="h-full w-full "
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">
                Plug and Play solutions
              </h2>
              <p className="text-gray-400 font-medium">
                <span className="text-white">
                  Instant Integration, Immediate Impact:
                </span>{" "}
                Dive into the market without delay, utilizing our fully
                integrated tech stack that meshes seamlessly with your
                operations.
              </p>
            </div>

            {/* Divider Line */}
            <div className="hidden md:block w-px h-16 bg-gray-600 mx-6"></div>

            {/* Button */}
            <div className="mt-6 md:mt-0">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
                Customize Your Path
              </button>
            </div>
          </div>
        </div>

        {/* Second Section */}

        <div className="bg-black text-white py-8 px-6 rounded-lg mx-auto">
          {/* Image Section */}
          <div className="h-48 bg-gray-800 flex justify-center items-center rounded-lg">
            <img
              src={emra2}
              alt="Turbo Technology"
              className="h-full w-full "
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">
                Customizable Solutions
              </h2>
              <p className="text-gray-400 font-medium">
                <span className="text-white">
                  Customizable Solutions designed for your business's unique
                  demands & growth trajectory.
                </span>{" "}
                Build, Expand: Engineered for long-term evolution, these
                solutions ensure your technology infrastructure grows as
                dynamically as your business.
              </p>
            </div>

            {/* Divider Line */}
            <div className="hidden md:block w-px h-16 bg-gray-600 mx-6"></div>

            {/* Button */}
            <div className="mt-6 md:mt-0">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
                Accelerate with Plug & Play{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurboTechnologyPage;
