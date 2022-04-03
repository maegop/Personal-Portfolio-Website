import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

import { images } from "../../constants";

import "./About.scss";

const abouts = [
  {
    title: "Web Development",
    description: "I have 2 years of software development experience",
    imgUrl: images.about01,
  },
  {
    title: "Machine Learning",
    description: "I have built Machine Learning models for text classification",
    imgUrl: images.about02,
  },
  {
    title: "Backend Development",
    description: "I have built e-commerce APIs with Python and Django",
    imgUrl: images.about03,
  },
  {
    title: "Frontend Development",
    description: "I have built websites and web apps with React and Next.js",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that Good Development means Faster Websites
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
