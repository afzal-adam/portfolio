import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_101_OtXlYpUUe.svg?updatedAt=1684695813353",
    },
    {
      title: "CSS",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_104_bYfmqhkCyH.svg?updatedAt=1684695813459",
    },
    {
      title: "ReactJs",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_111_myMDbZogY.svg?updatedAt=1684695816897",
    },
    {
      title: "TailwindCss",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_118_nTABrwGUB.svg?updatedAt=1684695818224",
    },
    {
      title: "Redux",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_120_qDaGKDspR_.svg?updatedAt=1684695817329",
    },
    {
      title: "SCSS",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_107_NP-0bSIBmT.svg?updatedAt=1684695813523",
    },
    {
      title: "GITHUB",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_115_MZ2Vt3XHTS.svg?updatedAt=1684695816945",
    },
    {
      title: "NodeJs",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_106_ELvDrCenY.svg?updatedAt=1684695813455",
    },
    {
      title: "Javascript",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_110_rnPXoXCR08.svg?updatedAt=1684695813421",
    },
    {
      title: "MongoDB",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_114_NLUYZniN9.svg?updatedAt=1684695816860",
    },
    {
      title: "Digital Ocean",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_119_MJgNLvIoU.svg?updatedAt=1684695818253",
    },
    {
      title: "Ubuntu",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_117_1bng0YW00r.svg?updatedAt=1684695816924",
    },
    {
      title: "npm",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_105_6rux2FZ-cG.svg?updatedAt=1684695813371",
    },
    {
      title: "Analytics",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_112_dCwRT2T6O.svg?updatedAt=1684695816885",
    },
    {
      title: "Figma",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_103__JaVPckv3.svg?updatedAt=1684695813424",
    },
    {
      title: "Adobe Illustrator",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_109_vaVhUhUyPR.svg?updatedAt=1684695813413",
    },
    {
      title: "Vite",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_113_zTLyPzJRGc.svg?updatedAt=1684695817184",
    },
    {
      title: "Figma",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_103__JaVPckv3.svg?updatedAt=1684695813424",
    },
    {
      title: "Netlify",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_102_sQnBHmLrRX.svg?updatedAt=1684695813451",
    },
    {
      title: "Redux",
      url: "https://ik.imagekit.io/z7ylmmfdg/techStack_Icons/Group_116_X7toN9Fc8D.svg?updatedAt=1684695817837",
    },
  ];

  const clientLogosArr = [
    "https://ik.imagekit.io/z7ylmmfdg/CLIENT_LOGOS/MS_LOGO_IU7SWnRzA.svg?updatedAt=1685048730709",
    "https://ik.imagekit.io/z7ylmmfdg/CLIENT_LOGOS/ATTAR_bS6Zvo8AA.svg?updatedAt=1685048314451",
    "https://ik.imagekit.io/z7ylmmfdg/CLIENT_LOGOS/ULC_S3Ekju_MxT.svg?updatedAt=1685048310101",
    "https://ik.imagekit.io/z7ylmmfdg/CLIENT_LOGOS/BRAIN_STUDS_4b0A5_yO2.svg?updatedAt=1685048310030",
    "https://ik.imagekit.io/z7ylmmfdg/CLIENT_LOGOS/ELECTRIC_MOTORS_BeAw-m-dr.svg?updatedAt=1685048309498",
    "https://ik.imagekit.io/z7ylmmfdg/CLIENT_LOGOS/IKHLAS_3ak_KJMXQ.svg?updatedAt=1685048313428",
    "https://ik.imagekit.io/z7ylmmfdg/CLIENT_LOGOS/NAUFAL_B5u6m0NTH.svg?updatedAt=1685048309497",
    "https://ik.imagekit.io/z7ylmmfdg/CLIENT_LOGOS/GOLDEN_ORBIT_-pRfO5iKBT.svg?updatedAt=1685048310261",
    "https://ik.imagekit.io/z7ylmmfdg/CLIENT_LOGOS/HARKWILLIA_GU_WqqOYNh.svg?updatedAt=1685048309925",
    "https://ik.imagekit.io/z7ylmmfdg/CLIENT_LOGOS/KS_vRY4sLebC.svg?updatedAt=1685048316078",
    "https://ik.imagekit.io/z7ylmmfdg/CLIENT_LOGOS/SK_s_WN4fujis.svg?updatedAt=1685048310176",
    "https://ik.imagekit.io/z7ylmmfdg/CLIENT_LOGOS/VERTICA_PjSk6PR6-.svg?updatedAt=1685048310195",
    "https://ik.imagekit.io/z7ylmmfdg/CLIENT_LOGOS/SAMBRAM_mrXnyfvbv.svg?updatedAt=1685048317593",
    "https://ik.imagekit.io/z7ylmmfdg/CLIENT_LOGOS/BM_4DF8tYAQ7.svg?updatedAt=1685048309644",
    "https://ik.imagekit.io/z7ylmmfdg/CLIENT_LOGOS/CLANZO_CAsHencdO.svg?updatedAt=1685048309974",
  ];

  return (
    <>
      <section className=" flex justify-center items-center flex-col css-selector ">
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
                      className="sm:w-28 sm:h-28 sm:min-w-[6rem] sm:min-h-[6rem] w-20  h-20 min-w-[5rem] min-h-[5rem] cursor-pointer"
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
            {techStackArr?.map((item) => {
              return (
                <>
                  <SwiperSlide className="p-5 px-0 sm:px-7 !bg-transparent ">
                    <img
                      className="w-14 h-14 !bg-transparent object-contain select-none  hover:grayscale-0 transition-all cursor-pointer"
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
