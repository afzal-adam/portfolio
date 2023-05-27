import React from "react";
import { motion } from "framer-motion";
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "../styles/swiperStyle.css";

// import required modules
import { Pagination, Navigation, FreeMode, Autoplay } from "swiper";

import ScrollAnimation from "react-animate-on-scroll";

const Works = () => {
  return (
    <>
      <div>
        <section className="mb-5 ">
          <div className="py-8 pb-2 px-4 mx-auto max-w-screen-xl sm:py-10 lg:px-2">
            <div className="mx-auto max-w-screen-sm text-center">
              <h2 className="sm:mb-4 text-3xl tracking-tight font-extrabold leading-tight text-primary ">
                Some of My Selected Works!💻
              </h2>
              {/* <p className="mb-3 font-normal text-base-content  md:text-sm">
                Some of my Work For Clients From Various Domains and
                Requirements, few Projects Cannot be Refferenced an they are
                Enterprise Management Solutions.
              </p> */}
            </div>
          </div>
        </section>
        <div>
          {/* <section className="bg-base-100 w-full max-w-6xl m-auto mb-5">
            <ScrollAnimation
              animateOnce={true}
              animateIn="animate__animated animate__fadeInLeft"
            >
              <div className="gap-8 items-center py-8 px-4 mx-auto w-full xl:gap-16 md:grid md:grid-cols-2 sm:py-5 lg:px-6">
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                      alt=""
                    />
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0">
                  <h2 className="mb-2 text-xl sm:text-3xl tracking-tight font-extrabold text-base-content ">
                    A Micro ERP System Elevate Efficiency, Optimize Processes,
                    and Drive Success with Feature-Rich and Intuitive System
                  </h2>
                  <p className="mb-2 font-light text-base-content text-sm sm:text-lg ">
                    Simplify your order, vendor, and production management with
                    feature-rich Micro ERP Web App. From order tracking and
                    vendor collaboration to production scheduling and inventory
                    control, this solution empowers businesses to optimize
                    processes, minimize errors, and meet customer demands
                    efficiently.
                  </p>
                  <button className="text-primary hover:text-primary-focus w-fit flex justify-center items-center">
                    <span>View Demo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 stroke-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </section> */}

          <section className="bg-base-100 w-full max-w-7xl m-auto">
            <ScrollAnimation
              animateOnce={true}
              animateIn="animate__animated animate__fadeInRight"
            >
              <div className="gap-8 items-center py-8 px-4 mx-auto w-full xl:gap-16 md:grid md:grid-cols-2 sm:py-5 lg:px-6 ">
                <div className="order-2">
                  <Swiper
                    pagination={{
                      dynamicBullets: true,
                    }}
                    spaceBetween={0}
                    modules={[Pagination]}
                    className="mySwiper shadow-md rounded-xl "
                  >
                    <SwiperSlide>
                      <img
                        className="w-full h-82 object-contain"
                        src="https://ik.imagekit.io/z7ylmmfdg/ORDERS-2_2_BOis1cl.png?updatedAt=1685217266549"
                        alt="dashboard image"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-auto object-cover"
                        src="https://ik.imagekit.io/z7ylmmfdg/DASH-1_KUHCx0GU9.png?updatedAt=1685217266587"
                        alt="dashboard image"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-auto object-cover"
                        src="https://ik.imagekit.io/z7ylmmfdg/ORDERS-1_e5JtFACt7.png?updatedAt=1685217266711"
                        alt="dashboard image"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-auto object-cover"
                        src="https://ik.imagekit.io/z7ylmmfdg/VENDORS-1_Aw5sUWMGF.png?updatedAt=1685217266120"
                        alt="dashboard image"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-auto object-cover"
                        src="https://ik.imagekit.io/z7ylmmfdg/POS-1_q6TcbCJO7.png?updatedAt=1685217266293"
                        alt="dashboard image"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-auto object-cover"
                        src="https://ik.imagekit.io/z7ylmmfdg/POS-3_6Kge--UWL.png?updatedAt=1685217266251s"
                        alt="dashboard image"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-auto object-cover"
                        src="https://ik.imagekit.io/z7ylmmfdg/POS-2_RuowhDzVA.png?updatedAt=1685217266434"
                        alt="dashboard image"
                      />
                    </SwiperSlide>
                  </Swiper>
                  <h2 className="text-xl flex mt-2  font-bold  justify-center items-center  flex-row ">
                    <p className="font-['Kalam'] text-base-content">Swipe</p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mx-1 stroke-base-content rotate-90"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </h2>
                </div>

                <div className="mt-4 md:mt-0 order-2">
                  <h2 className="mb-2 text-lg sm:text-3xl tracking-tight font-extrabold text-base-content ">
                    A Micro ERP & Business Management System to Elevate
                    Efficiency, Optimize Processes, and Drive Success with
                    Feature-Rich and Intuitive System
                  </h2>
                  <p className="mb-2 font-light text-base-content text-xs sm:text-base ">
                    Simplifies order, vendor, and production management with
                    feature-rich Micro ERP Web App. From order tracking and
                    vendor collaboration to production scheduling and inventory
                    control, this solution empowers businesses to optimize
                    processes, minimize errors, and meet customer demands
                    efficiently.
                    <br />
                    <span>
                      <span className="font-bold">Username: </span>admin
                    </span>
                    <br />
                    <span>
                      <span className="font-bold">Pwd: </span>123456
                    </span>
                  </p>
                  <a
                    rel="noopener noreferrer"
                    href="https://microerp-demo.onrender.com"
                    target="_blank"
                    className="text-primary hover:text-primary-focus w-fit flex justify-center items-center"
                  >
                    <span>View Demo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 stroke-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </section>

          <section className="bg-base-100 w-full max-w-6xl m-auto">
            <ScrollAnimation
              animateOnce={true}
              animateIn="animate__animated animate__fadeInLeft"
            >
              <div className="gap-8 items-center py-8 px-4 mx-auto w-full xl:gap-16 md:grid md:grid-cols-2 sm:py-5 lg:px-6">
                <div className="order-2">
                  <Swiper
                    pagination={{
                      dynamicBullets: true,
                    }}
                    spaceBetween={0}
                    modules={[Pagination]}
                    className="mySwiper shadow-md rounded-xl "
                  >
                    <SwiperSlide>
                      <img
                        className="w-full"
                        src="https://ik.imagekit.io/z7ylmmfdg/ULC_HERO_SS_9O97zZvbl.svg?updatedAt=1685053300961"
                        alt="dashboard image"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full"
                        src="https://ik.imagekit.io/z7ylmmfdg/ULC_ABOUTUS_S1s06bsg0.png?updatedAt=1685218581442"
                        alt="dashboard image"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full"
                        src="https://ik.imagekit.io/z7ylmmfdg/Group_4910_tE66JBufvf.png?updatedAt=1685218811511"
                        alt="dashboard image"
                      />
                    </SwiperSlide>
                  </Swiper>
                  <h2 className="text-xl flex mt-2  font-bold  justify-center items-center  flex-row ">
                    <p className="font-['Kalam'] text-base-content">Swipe</p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mx-1 stroke-base-content rotate-90"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </h2>
                </div>

                <div className="mt-4 md:mt-0">
                  <h2 className="mb-2 text-lg sm:text-3xl tracking-tight font-extrabold text-base-content ">
                    The website showcases the firm's renowned lawyers and offers
                    comprehensive information about their diverse range of legal
                    services.
                  </h2>
                  <p className="mb-2 font-light text-base-content text-xs sm:text-base ">
                    The website developed for the Law Firm is a sophisticated
                    and user-friendly platform designed to showcase the firm's
                    exceptional lawyers and extensive range of legal services.
                    With a sleek and modern interface, the website offers
                    visitors a seamless browsing experience as they explore the
                    firm's legal expertise. The website features a comprehensive
                    directory of the firm's highly skilled lawyers, providing
                    detailed profiles that highlight their qualifications, areas
                    of specialization, and notable achievements. This allows
                    clients to make informed decisions when selecting a lawyer
                    who best suits their specific legal needs.
                  </p>
                  <a
                    rel="noopener noreferrer"
                    href="https://unitedlawchambers.com/"
                    target="_blank"
                    className="text-primary hover:text-primary-focus w-fit flex justify-center items-center"
                  >
                    <span>View Demo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 stroke-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </section>
          <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <ScrollAnimation
              animateOnce={true}
              animateIn="animate__animated animate__fadeIn"
            >
              <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                <div className="lg:col-span-7">
                  {/* Grid */}
                  <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                    <div className="col-span-4">
                      <img
                        className="rounded-xl"
                        src="https://ik.imagekit.io/z7ylmmfdg/Being_Mangalorean_LNjFeE_5T.png?updatedAt=1685096769708"
                        alt="Image Description"
                      />
                    </div>
                    {/* End Col */}
                    <div className="col-span-3">
                      <img
                        className="rounded-xl"
                        src="https://ik.imagekit.io/z7ylmmfdg/Being_Mangalorean__4__iExbDqqqI.png?updatedAt=1685100275603"
                        alt="Image Description"
                      />
                    </div>
                    {/* End Col */}
                    <div className="col-span-5">
                      <img
                        className="rounded-xl"
                        src="https://ik.imagekit.io/z7ylmmfdg/Being_Mangalorean__1__vIASdo-61.png?updatedAt=1685096892075"
                        alt="Image Description"
                      />
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Grid */}
                </div>
                {/* End Col */}
                <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                  <div className="mt-4 md:mt-0">
                    <h2 className="mb-2 text-lg sm:text-3xl tracking-tight font-extrabold text-base-content ">
                      A Micro ERP System Elevate Efficiency, Optimize Processes,
                      and Drive Success with Feature-Rich and Intuitive System
                    </h2>
                    <p className="mb-2 font-light text-base-content text-xs sm:text-lg ">
                      Simplify your order, vendor, and production management
                      with feature-rich Micro ERP Web App. From order tracking
                      and vendor collaboration to production scheduling and
                      inventory control, this solution empowers businesses to
                      optimize processes, minimize errors, and meet customer
                      demands efficiently.
                    </p>
                    <button className="text-primary hover:text-primary-focus w-fit flex justify-center items-center">
                      <span>View Demo</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 stroke-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* End Col */}
              </div>
            </ScrollAnimation>
            {/* End Grid */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
