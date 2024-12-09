import React from "react";
import image2 from "../images/image2.png";

function AboutTSquaredC() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-950 to-black text-white">
      <div className="max-w-7xl mx-auto p-6 bg-transparent">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 text-left mb-8 md:mb-0 md:mr-10">
            <h1 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-blue-100 to-blue-900 bg-clip-text text-transparent mb-6">
              About TSquaredC
            </h1>
            <p className="text-base md:text-lg mb-4 leading-relaxed text-slate-400">
              Once you've selected or configured an agent team, begin chatting
              to your built-in project manager to describe your goal, provide
              relevant information, give feedback, and approve results.
            </p>
            <p className="text-base md:text-lg text-slate-400">
              Gone are the days of doing the legwork yourself - just engage your
              on-demand AI workforce and relax as you watch your ideas come to
              life.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-center">
            <img
              src={image2}
              alt="A futuristic rocket ship launching into space with a dark, starry background"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTSquaredC;
