import React from "react";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-base-content sm:text-4xl lg:text-6xl lg:leading-tight ">
              Hi, I'm <span className="text-primary">Abzal</span> a Professional
              Web Developer
            </h1>
            <p className="mt-3 text-lg font-normal text-base-content ">
              I am a professional web developer with full-stack development
              skills from Prototyping UI/UX to deployment!, Here I've Showcased
              all my Skills and used in RealWorld Projects
            </p>
            {/* Buttons */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
              >
                Show More!
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300  font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
              >
                Contact me
              </button>
            </div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-0 lg:py-5 mx-auto">
              {/* Grid */}
              <div className="flex justify-between items-center">
                <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-left-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 ">
                  <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
                    <div>
                      <p className="text-4xl !font-bold text-primary">15+</p>
                      <p className="mt-1 text-base-content">
                        Projects Fullfilled
                      </p>
                    </div>
                    <div>
                      <p className="text-4xl !font-bold text-primary">3+</p>
                      <p className="mt-1 text-base-content">
                        Years of Professional Experince
                      </p>
                    </div>
                    <div>
                      <p className="text-4xl !font-bold text-primary">100%</p>
                      <p className="mt-1 text-base-content">Satisfaction</p>
                    </div>
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Grid */}
            </div>
          </div>

          {/* End Col */}
          <div className="relative ml-4">
            <img
              className="w-96 m-auto rounded-md"
              src="https://ik.imagekit.io/z7ylmmfdg/picofme__1__UDtpV8fKP.png?updatedAt=1684704440167"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
};

export default Hero;
