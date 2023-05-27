import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";
import Collapsible from "./Collapsible";

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };
  return (
    <>
      <ScrollAnimation
        animateOnce={true}
        animateIn="animate__animated animate__fadeIn"
      >
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto transition-all">
          {/* Grid */}
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <div className="max-w-lg">
                <h2 className="text-2xl font-bold text-primary md:text-4xl md:leading-tight ">
                  Passion, Heart & Soul
                </h2>
                <p className="mt-1 hidden md:block text-base-content ">
                  Experienced & Versatile Web Developer Proficient In The
                  End-to-end development Process, From Conceptualizing And
                  Prototyping Designs to Coding And Deployment. Proficient In
                  Front-end technologies, Along With expertise In Back-end
                  Frameworks. dedicated To Delivering Seamless Websites & Web
                  Apps Through Rigorous testing, Optimization, And Efficient
                  Deployment Strategies.
                </p>
              </div>
            </div>
            {/* End Col */}
            <div className="md:col-span-3">
              {/* Accordion */}
              <div className="hs-accordion-group divide-y divide-gray-200 ">
                <Collapsible
                  isOpen={activeSection === 1}
                  toggleSection={() => toggleSection(1)}
                  title="Can I cancel at anytime?"
                >
                  <p className="text-base-content">
                    Yes, you can cancel anytime no questions are asked while you
                    cancel but we would highly appreciate if you will give us
                    some feedback.
                  </p>
                </Collapsible>
                <Collapsible
                  isOpen={activeSection === 2}
                  toggleSection={() => toggleSection(2)}
                  title="UI/UX & Designing Tools"
                >
                  <ul className="mb-8 space-y-4 text-left text-base-content ">
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Figma</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>After Effects & Illustrator</span>
                    </li>
                  </ul>
                </Collapsible>
                <Collapsible
                  isOpen={activeSection === 3}
                  toggleSection={() => toggleSection(3)}
                  title="Front-End Technologies & Other Tools"
                >
                  <ul className="mb-8 space-y-4 text-left text-base-content ">
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>HTML & CSS</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Javascript & ReactJs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Javascript & ReactJs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Npm</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Material UI & Tailwindcss</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Material UI & Tailwindcss</span>
                    </li>
                  </ul>
                </Collapsible>
                <Collapsible
                  isOpen={activeSection === 4}
                  toggleSection={() => toggleSection(4)}
                  title="Back-End Technologies & Deployment"
                >
                  <ul className="mb-8 space-y-4 text-left text-base-content ">
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Nodejs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Mongo DB</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Digital Ocean</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Ubuntu</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Ubuntu</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Netlify, Render & heroku</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Nginx and PM2</span>
                    </li>
                  </ul>
                </Collapsible>
              </div>
              {/* End Accordion */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </ScrollAnimation>
    </>
  );
};

export default AboutMe;
