import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";

const myskill = [
  {
    name: "React",
    icon: images.react,
    bgColor: "#edf2f8",
  },
  {
    name: "Javascript",
    icon: images.javascript,
    bgColor: "#edf2f8",
  },
  {
    name: "Git",
    icon: images.git,
    bgColor: "#edf2f8",
  },
  {
    name: "Python",
    icon: images.python,
    bgColor: "#edf2f8",
  },
];

const myexperience = [
  {
    year: "2020",
    works: [
      {
        name: "Fullstack Developer",
        company: "Ant Technologies",
        desc: "Created Rest APIs and UI interfaces with React",
      },
    ],
  },
  {
    year: "2019",
    works: [
      {
        name: "Software Developer",
        company: "Bee Technologies",
        desc: "Created Fullstack Web Apps with ReactJS",
      },
    ],
  },
];

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(myskill);
    setExperiences(myexperience);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      <p className="p-text">{work.desc}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
