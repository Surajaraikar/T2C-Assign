import React from "react";
import teamBack from "../images/teamBack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Team() {
  const teamMembers = [
    { name: "Team Name", designation: "Designation" },
    { name: "Team Name", designation: "Designation" },
    { name: "Team Name", designation: "Designation" },
    { name: "Team Name", designation: "Designation" },
    { name: "Team Name", designation: "Designation" },
    { name: "Team Name", designation: "Designation" },
    { name: "Team Name", designation: "Designation" },
    { name: "Team Name", designation: "Designation" },
  ];

  return (
    <div className="bg-black pb-20">
      <div className="flex flex-col items-center py-10">
        <h2 className="text-sm font-light tracking-widest mb-2">OUR TEAM</h2>
        <h1 className="text-4xl lg:text-6xl font-semibold text-center mb-10 text-slate-50">
          Meet the core team that <br />
          <span className="bg-gradient-to-r from-blue-100 to-blue-900 bg-clip-text text-transparent">
            brings it all together
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={teamBack}
                alt="Team member photo"
                className="w-48 h-48 mb-4"
              />
              <div className="text-center flex gap-16">
                <div>
                  <p className="text-lg font-semibold text-slate-50">
                    {member.name}
                  </p>
                  <p className="text-sm text-gray-400">{member.designation}</p>
                </div>
                <a href="#" className="mt-2">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-500 text-2xl"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
