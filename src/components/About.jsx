import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Who {" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          We Are
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Bringing Your Vision to Life
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg rounded-[2%]"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medoum text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medoum text-gray-800">50+</p>
              <p>Projects Completed</p>
            </div>

            <div>
              <p className="text-4xl font-medoum text-gray-800">10+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            We specialize in crafting luxury homes that blend
            innovative design with timeless elegance. With a commitment to
            quality, craftsmanship, and attention to detail, we create
            living spaces that elevate the art of modern living. Our passion for
            excellence ensures each project is a seamless fusion of beauty,
            functionality, and value, setting new standards in the luxury real
            estate market.
          </p>
          <button className="bg-gray-600 text-white px-8 py-2 rounded">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
