import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaBootstrap
} from "react-icons/fa";

import {
  SiAdobephotoshop,
  SiTailwindcss
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaBootstrap />,
          <FaReact />,
          <SiTailwindcss />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'An Khanh High School',
        stage: '2019 - 2021',
      },
      {
        title: 'Can Tho College',
        stage: '2021 - 2024',
      },
    ],
  },
  {
    title: 'projects',
    info: [
      {
        title: 'Thong Coffee',
        stage: '04/2022 - 04/2022',
      },
      {
        title: 'Hotel',
        stage: '09/2022 - 10/2022',
      },
      {
        title: 'Laptop Store',
        stage: '04/2023 - 05/2023',
      },
      {
        title: 'Netflix Clone',
        stage: '08/2023 - 09/2023',
      },
    ],
  },
  
];

const About = () => {
  const [index, setIndex] = useState(0);
  return( 
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate='show' exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[250px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" animate='show' exit="hidden" className="h2">Captivating <span className="text-accent">stories</span> birth magnificent designs.</motion.h2>
          <motion.p variants={fadeIn('right', 0.4 )} initial="hidden" animate='show' exit="hidden" className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni distinctio quas perspiciatis facere. 
            Fugit exercitationem minima ipsum unde hic illo perferendis ducimus ipsam, debitis ullam esse, fuga, 
            numquam amet architecto?
          </motion.p>
          <motion.div variants={fadeIn('right', 0.6)} initial="hidden" animate='show' exit="hidden" className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={10} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Year of experience</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied clients</div>
              </div>
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div variants={fadeIn('left', 0.4)} initial="hidden" animate='show' exit="hidden" className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (<div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8
              after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 z-20`} onClick={() => setIndex(itemIndex)}>
                {item.title}
                </div>);
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (<div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex ">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => {
                    return <div key={iconIndex} className="text-2xl text-white">{icon}</div>
                  })}
                </div>
              </div>)
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
