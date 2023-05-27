import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import "animate.css";
import CountUp from "react-countup";
import ScrollIntoView from "react-scroll-into-view";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center transition-all">
          <div className="order-2 sm:order-1">
            <h1 className="block text-3xl min-h-[120px] md:min-h-[220px] font-bold text-base-content sm:text-4xl lg:text-6xl lg:leading-tight ">
              {/* Hi, I'm <span className="text-primary">Abzal</span> a Professional
              Web Developer */}
              <Typewriter
                options={{
                  strings: [" Hi, I'm Abzal a Professional Web Developer"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-primary",
                  cursorColor: "text-primary",
                  delay: 50,
                  pauseFor: 30000,
                }}
              />
            </h1>

            <p className="sm:mt-3 text-base sm:text-lg font-normal text-base-content ">
              I am a professional web developer with full-stack development
              skills from UI/UX, Coding to deployment! Here I've Showcased all
              my Skills which have been used in Production Projects
            </p>
            {/* Buttons */}
            <div className="mt-5 sm:mt-7  w-full sm:inline-flex">
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                <ScrollIntoView selector="#clients">Show More!</ScrollIntoView>
              </button>
              <button className="text-white bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300  font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                <ScrollIntoView selector="#footer">Contact me</ScrollIntoView>
              </button>
            </div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-0 lg:py-5 mx-auto">
              {/* Grid */}
              <div className="flex justify-between items-center">
                <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-left-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 ">
                  <div className="grid gap-6 grid-cols-3 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
                    <div>
                      <p className="text-4xl !font-bold text-primary">
                        <CountUp duration={2} end={10} />+
                      </p>
                      <p className="mt-1 text-xs sm:text-base text-base-content">
                        Projects Fullfilled
                      </p>
                    </div>
                    <div>
                      <p className="text-4xl !font-bold text-primary">
                        <CountUp duration={3} end={3} />+
                      </p>
                      <p className="mt-1 text-xs sm:text-base text-base-content">
                        Years of Professional Experince
                      </p>
                    </div>
                    <div>
                      <p className="text-4xl !font-bold text-primary">
                        <CountUp duration={4} end={100} />%
                      </p>
                      <p className="mt-1 text-xs sm:text-base text-base-content">
                        Satisfaction
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Grid */}
            </div>
          </div>

          {/* End Col */}
          <div className="relative ml-4 sm:order-2 order-1 animate__animated animate__fadeIn">
            <img
              className="w-52 sm:w-96 m-auto  bg-primary rounded-full"
              src="https://ik.imagekit.io/z7ylmmfdg/picofme__1__UDtpV8fKP-removebg-preview_OTBFij6Ya.png?updatedAt=1685139433701"
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
