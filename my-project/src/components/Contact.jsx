import React from "react";
import location from "../images/location.png";
import email from "../images/email.png";
import contact from "../images/contact.png";

function Contact() {
  return (
    <div className="bg-black pt-16 pb-28">
      <div className="h-full flex flex-col items-center justify-center p-4">
        {/* Container for Side-by-Side Sections */}
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full p-7">
          {/* Ready to Build Section */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full md:w-1/2">
            <h1 className="text-3xl text-slate-100 font-bold mb-4">
              Ready to Build the Future?
            </h1>
            <h1 className="text-3xl text-slate-100 font-bold mb-4">
              Let’s Make It Happen
            </h1>
            <p className="text-gray-400 mb-8">
              Your breakthrough idea deserves a world-class execution. Partner
              with T²C and transform your vision into reality.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email ID
                  </label>
                  <input
                    type="email"
                    placeholder="Email ID"
                    className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+1-202-555-0174"
                    className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 rounded text-white font-semibold hover:bg-blue-700"
              >
                Send Now
              </button>
            </form>
          </div>

          {/* Location and Contact Section */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full md:w-1/2 ">
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4">
                <img src={location} alt="location" className="w-8" />
                <div>
                  <h2 className="text-lg font-semibold">Location</h2>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4">
                <img src={contact} alt="contact" className="w-8" />
                <div>
                  <h2 className="text-lg font-semibold">Contact Number</h2>
                  <p className="text-gray-400">Lorem ipsum dolor</p>
                  <p className="text-gray-400">Lorem ipsum dolor</p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4">
                <img src={email} alt="email" className="w-8" />
                <div>
                  <h2 className="text-lg font-semibold">Email Address</h2>
                  <p className="text-gray-400">Lorem ipsum dolor</p>
                  <p className="text-gray-400">Lorem ipsum dolor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
