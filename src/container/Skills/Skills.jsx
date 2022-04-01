import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
//import { urlFor, client } from "../../client";
import "./Skills.scss";
import { images } from "../../constants";

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
        name: "Software Developer",
        company: "Ant Technologies",
        desc: "Created Rest APIs and UI interfaces with React",
      },
    ],
  },
  {
    year: "2020",
    works: [
      {
        name: "Software Developer",
        company: "Ant Technologies",
        desc: "Created Rest APIs and UI interfaces with React",
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

  /* useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []); */

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
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
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

//export default AppWrap(Skills, "skills");

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
