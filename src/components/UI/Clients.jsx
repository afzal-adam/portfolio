import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollIntoView from "react-scroll-into-view";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "../../styles/swiperStyle.css";

// import required modules
import { Pagination, Navigation, FreeMode, Autoplay } from "swiper";

const Clients = () => {
  const techStackArr = [
    {
      title: "HTML",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/language/Logos/html5-original.svg?updatedAt=1693492485739",
    },
    {
      title: "CSS",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/language/Logos/css3-original.svg?updatedAt=1693492485173",
    },
    {
      title: "ReactJs",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/language/Logos/react-original.svg?updatedAt=1693492490267",
    },
    {
      title: "TailwindCss",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/language/Logos/tailwindcss-plain.svg?updatedAt=1693492490595",
    },
    {
      title: "Redux",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/language/Logos/redux-original.svg?updatedAt=1693492489993",
    },
    {
      title: "SCSS",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/language/Logos/sass-original.svg?updatedAt=1693492490275",
    },
    {
      title: "GITHUB",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/icons8-github.svg?updatedAt=1693546118559",
    },
    {
      title: "NodeJs",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/language/Logos/nodejs-plain-wordmark.svg?updatedAt=1693492489890",
    },
    {
      title: "Javascript",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/language/Logos/javascript-plain.svg?updatedAt=1693492485782",
    },
    {
      title: "MongoDB",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/language/Logos/mongodb-plain-wordmark.svg?updatedAt=1693492489938",
    },
    {
      title: "Digital Ocean",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/language/Logos/digitalocean-original.svg?updatedAt=1693492485501",
    },
    {
      title: "Ubuntu",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/language/Logos/ubuntu-plain-wordmark.svg?updatedAt=1693492490618",
    },
    {
      title: "npm",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/language/Logos/npm-original-wordmark.svg?updatedAt=1693492489901",
    },
    {
      title: "Analytics",
      url: "https://static-00.iconduck.com/assets.00/google-cloud-platform-icon-1024x823-mrdn81d1.png",
    },
    {
      title: "Figma",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/language/Logos/figma-original.svg?updatedAt=1693492485085",
    },
    {
      title: "Adobe Illustrator",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png",
    },
    {
      title: "Vite",
      url: "https://vitejs.dev/logo-with-shadow.png",
    },
    {
      title: "Figma",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/language/Logos/figma-original.svg?updatedAt=1693492485085",
    },
    {
      title: "Netlify",
      url: "https://levelup-styleguide.netlify.app/v3/img/components/full-logo-dark-simple.png",
    },
    {
      title: "Redux",
      url: "https://ik.imagekit.io/o0jwga39e/portfolio/language/Logos/redux-original.svg?updatedAt=1693492489993",
    },
    {
      title: "AWS S3",
      url: "https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2021/01/30083957/aws-s3-logo.png",
    },
  ];

  const clientLogosArr = [
    "https://ik.imagekit.io/o0jwga39e/portfolio/Group%204936.png?updatedAt=1693317736428",
    "https://ik.imagekit.io/o0jwga39e/portfolio/Group%201000003215.png?updatedAt=1693317740019",
    "https://ik.imagekit.io/o0jwga39e/portfolio/Group%204176.png?updatedAt=1693317731458",
    "https://ik.imagekit.io/o0jwga39e/portfolio/Group%204174.png?updatedAt=1693317732114",
    "https://ik.imagekit.io/o0jwga39e/portfolio/Group%204179.png?updatedAt=1693317740296",
    "https://ik.imagekit.io/o0jwga39e/portfolio/Group%204233.png?updatedAt=1693317735145",
    "https://ik.imagekit.io/o0jwga39e/portfolio/Group%204172.png?updatedAt=1693317729016",
    "https://ik.imagekit.io/o0jwga39e/portfolio/Group%204173.png?updatedAt=1693317733116",
    "https://ik.imagekit.io/o0jwga39e/portfolio/Group%201000003361.png?updatedAt=1693317736184",
    "https://ik.imagekit.io/o0jwga39e/portfolio/Group%204181.png?updatedAt=1693317740377",
    "https://ik.imagekit.io/o0jwga39e/portfolio/Group%204177.png?updatedAt=1693317734803",
    "https://ik.imagekit.io/o0jwga39e/portfolio/Group%204171.png?updatedAt=1693317734982",
    "https://ik.imagekit.io/o0jwga39e/portfolio/Group%204182.png?updatedAt=1693317740090",
    "https://ik.imagekit.io/o0jwga39e/portfolio/image%20203.png?updatedAt=1693317732316",
    "https://ik.imagekit.io/o0jwga39e/portfolio/Group%204175.png?updatedAt=1693317730104",
  ];

  return (
    <>
      <section
        id="clients"
        className=" flex justify-center items-center flex-col bg-zinc-800 bg-[url('https://ik.imagekit.io/z7ylmmfdg/camila-akzo-nMf9L8B-CeY-unsplash_rOI_P4Sl0.jpg?updatedAt=1685144210369')] bg-no-repeat bg-cover "
      >
        <div className="py-8 lg:py-0 mx-auto w-full max-w-6xl px-4 sm:mb-5">
          <h2 className="mb-8 sm:pt-7 lg:mb-5 text-3xl sm:font-extrabold tracking-tight leading-tight text-center text-white  md:text-4xl">
            Brands I Have Worked With
          </h2>
          <div className="w-full mt-10">
            <div className="flex justify-center items-center flex-wrap gap-10 ">
              {clientLogosArr?.map((item) => {
                return (
                  <>
                    <img
                      src={item}
                      className="sm:w-28 object-contain sm:h-28 sm:min-w-[6rem] sm:min-h-[6rem] w-14  min-w-[3.5rem]   cursor-pointer"
                      alt=""
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <h2 className="text-xl sm:hidden  text-gray-500 font-bold  justify-center items-center z-40 rotate-12 flex flex-col ">
          <p className="font-['Kalam'] text-white">Tech Stack</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            className="w-10 h-10 stroke-white rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
            />
          </svg>
        </h2>
        <div className="w-full flex justify-between items-center max-w-6xl relative pb-10 sm:mt-10 ">
          <h2 className="text-xl sm:flex  text-gray-500 font-bold  justify-center items-center absolute -top-20 right-20 z-40 rotate-12 hidden flex-col ">
            <p className="font-['Kalam'] text-white">Tech Stack</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              className="w-10 h-10 stroke-white rotate-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
              />
            </svg>
          </h2>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={50}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation, FreeMode, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            freeMode={true}
            speed={1000}
            _freeModeNoMomentumRelease={false}
            effect="slide"
          >
            {techStackArr?.map((item, i) => {
              return (
                <>
                  <SwiperSlide
                    key={i + 1}
                    className="p-5 px-0 sm:px-7 !bg-transparent "
                  >
                    <img
                      className="w-14 h-14  !bg-transparent object-contain select-none  hover:grayscale-0 transition-all cursor-pointer"
                      src={item.url}
                      alt=""
                    />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Clients;
