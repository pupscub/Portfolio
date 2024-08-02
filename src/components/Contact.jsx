
import React, { useRef, useState } from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-12 flex flex-col gap-8">
          <div className="flex items-center">
            <FaLinkedin className="text-white mr-4" size={30} />
            <a
              href="https://www.linkedin.com/in/aditya2312/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium"
            >
            LinkedIn
            </a>
          </div>
          
          <div className="flex items-center">
            <FaGithub className="text-white mr-4" size={30} />
            <a
              href="https://www.github.com/pupscub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium"
            >
            GitHub
            </a>
          </div>

          <div className="flex items-center">
            <FaEnvelope className="text-white mr-4" size={30} />
            <a
              href="mailto:singh.aditya2@northeastern.edu"
              className="text-white font-medium"
            >
            singh.aditya2@northeastern.edu
            </a>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-white mr-4" size={30} />
            <span className="text-white font-medium">+1 (857) 381 7035</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[800px] h-[600px]"
      >
        <EarthCanvas />
        <div className="bg-tertiary h-full rounded-2xl"></div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
