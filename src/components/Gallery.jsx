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
                src="https://ik.imagekit.io/z7ylmmfdg/Group_1000003228_oqZnRU-NG.png?updatedAt=1685222428850"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://ik.imagekit.io/z7ylmmfdg/Group_1000003223_06oe0cyaW.png?updatedAt=1685222409610"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://ik.imagekit.io/z7ylmmfdg/Group_1000003235_U-Ohv2gbO.png?updatedAt=1685222409754"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://ik.imagekit.io/z7ylmmfdg/Group_1000003236_oEXNnKink.png?updatedAt=1685222377136"
                alt=""
              />
            </div>
            <div>
              <video autoPlay muted loop playsInline>
                <source
                  src="https://ik.imagekit.io/z7ylmmfdg/4b68e981-dfa4-4bc4-913f-a1523a1675c5_xEvqOKrqT.mp4?updatedAt=1685224474862"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://ik.imagekit.io/z7ylmmfdg/Group_1000003222_QDUcbtwn8.png?updatedAt=1685222412829"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://ik.imagekit.io/z7ylmmfdg/Group_1000003219_jZPFmUhJa.png?updatedAt=1685222418988"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://ik.imagekit.io/z7ylmmfdg/Group_1000003233_6NSS1fC_F.png?updatedAt=1685222408287"
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
                src="https://ik.imagekit.io/z7ylmmfdg/Group_1000003220_ahgNhDLc5.png?updatedAt=1685222376465"
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
