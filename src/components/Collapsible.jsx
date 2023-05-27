import React, { useState } from "react";

const Collapsible = ({ title, content, isOpen, toggleSection, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="hs-accordion pb-3 active pt-2 transition-all"
        id="hs-basic-with-title-and-arrow-stretched-heading-one"
      >
        <button
          onClick={toggleSection}
          className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
        >
          {title}
          <svg
            className={`hs-accordion-active:hidden block w-3 h-3 ${
              isOpen ? "rotate-180" : "rotate-0"
            } text-gray-600 group-hover:text-gray-500`}
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </button>
        {isOpen && (
          <>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-one"
              className="hs-accordion-content w-full overflow-hidden transition-all duration-300 animate__animated animate__fadeIn"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              {children}

              {/* <p className="text-base-content ">
            Yes, you can cancel anytime no questions are asked while you cancel
            but we would highly appreciate if you will give us some feedback.
          </p> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Collapsible;
