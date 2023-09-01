import React from "react";
import { motion } from "framer-motion";
import "animate.css";
import { useState } from "react";

const Gallery = () => {
  const [classData, setClassData] = useState("");
  const triggerClass = () => {
    console.log("first");
    setClassData(
      "grid grid-cols-2 md:grid-cols-4 gap-4 animate__animated animate__fadeIn"
    );
  };
  return (
    <>
      <section id="gallery" className="bg-white dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-0 text-xl sm:text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Empowering Businesses through Innovative Solutions
          </h1>
        </div>
      </section>
      <motion.div whileInView={triggerClass} viewport={{ once: true }}>
        <div className={classData}>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://ik.imagekit.io/o0jwga39e/portfolio/techzone.png?updatedAt=1693548979752"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://ik.imagekit.io/o0jwga39e/portfolio/dietProtien.png?updatedAt=1693548997628"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://ik.imagekit.io/o0jwga39e/portfolio/township.png?updatedAt=1693548996062"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://ik.imagekit.io/o0jwga39e/portfolio/ulc.png?updatedAt=1693548972741"
                alt=""
              />
            </div>
            <div>
              <video autoPlay muted loop playsInline>
                <source
                  src="https://ik.imagekit.io/o0jwga39e/portfolio/clanzo.mp4?updatedAt=1693549385255"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://ik.imagekit.io/o0jwga39e/portfolio/clanzo.png?updatedAt=1693548948674"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://ik.imagekit.io/o0jwga39e/portfolio/foodTradeLinks.png?updatedAt=1693549003981"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://ik.imagekit.io/o0jwga39e/portfolio/verticaBrochure.png?updatedAt=1693548996451"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://ik.imagekit.io/o0jwga39e/portfolio/grandLenseForm.png?updatedAt=1693548978972"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://ik.imagekit.io/z7ylmmfdg/Group_1000003248_rrm1QA4TF.png?updatedAt=1685223761267"
                alt=""
              />
            </div>

            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Gallery;
