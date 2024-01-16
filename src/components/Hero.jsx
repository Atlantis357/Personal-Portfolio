/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Hero.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:56:31 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/01/15 20:32:29 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, {useRef, useEffect, useState} from 'react'
import { motion, useMotionValue, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { abe, mainMountain, backgroundSky, foregroundMountain, distantMountain, subMainMountain, fraternity} from '../assets'
import { nameIntro, onRepeat, aboutMe } from '../constants'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import TiltCard from './TiltCard';

const Hero = (props) => {
    
    // Image effect
    const [aboutIdx, setAboutIdx] = useState(0);

    var about = aboutMe[aboutIdx];

    
    const slideLeft = (about) => {
        setAboutIdx((prev) => (prev + aboutMe.length - 1) % aboutMe.length);
        aboutAbe = aboutMe[abeIdx];
    };

    const slideRight = (about) => {
        setAboutIdx((prev) => (prev + 1) % aboutMe.length);
        aboutAbe = aboutMe[abeIdx];
    };


    // Parallax effect
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
    const distantMountainY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const mainMountainY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const subMainMountainY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

    // Darken effect
    const x = useMotionValue(0)
    const opacity = useTransform(
        x,
        // Map x from these values:
        [0, 100],
        // Into these values:
        [1, 0]
      )
  return (
    // Whole Page
    <div>
    <div ref={ref} className="w-full pt-32 lg:pt-44 h-screen overflow-hidden relative">
        
        <motion.div 
            style={{ y: textY }} 
            className={`mx-auto relative text-center px-auto z-30`}>
            <h1 class={`${props.colorMode.text} font-Orbitron font-bold text-6xl md:text-8xl mb-6`}>
                 {nameIntro.EngIntro}
                 <strong className={`bg-clip-text text-transparent ${props.foreground.title} font-Permanent-Marker`}>
                     {nameIntro.EngName}
                 </strong>
                 {nameIntro.EngOutro}
            </h1>
            <h1 class={`${props.colorMode.text} text-5xl font-extrabold md:text-7xl`}>
                <strong className={`bg-clip-text text-transparent ${props.foreground.title} font-Ma-Shan-Zheng`}>
                    {nameIntro.ChiName}
                </strong>
                {nameIntro.ChiOutro}           
            </h1>
        </motion.div>
        <motion.div
            className={`absolute inset-0 z-10`}
            style={{
            backgroundImage: `url(${backgroundSky})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: backgroundY,
            }}
        />
        <motion.div
            className={`absolute inset-0 z-10 opacity-[${opacity}]`}
            style={{
            backgroundImage: `url(${distantMountain})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: distantMountainY,
            }}
        />
        <motion.div
            className={`absolute inset-0 z-20 opacity-[${opacity}]`}
            style={{
            backgroundImage: `url(${mainMountain})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: mainMountainY,
            }}
        />
         <motion.div
            className={`absolute inset-0 z-30 opacity-[${opacity}]`}
            style={{
            backgroundImage: `url(${subMainMountain})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: subMainMountainY,
            }}
        />
        <div
            className={`absolute inset-0 z-30 opacity-[${opacity}]`}
            style={{
            backgroundImage: `url(${foregroundMountain})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            }}
        />
    </div>
    <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 py-24 px-15 md:px-16'>
        <p className={`${props.colorMode.text} text-2xl md:text-3xl text-left px-5 indent-10 font-Sacramento leading-loose`}>
        I use my <span className='underline decoration-4 decoration-amber-500'>creative and analytical</span> skills along with my professional training in <span className='underline decoration-4 decoration-amber-500'>bioengineering and computer science</span> to design solutions that provide unparalled value to my customers. Organizations and companies rely on me to create a <span className='underline decoration-4 decoration-amber-500'>development blueprint</span> towards the cutting edge of comptuer science and medicine.
        </p>
        <section className='hover:text-opacity-0 text-opacity-80 text-white text-center transition-all text-md font-Lumanosimo'>
        <div className="grid w-full place-content-center py-10 md:py-0">
          <TiltCard />
            Hover Me!
        </div>
        </section>
    </div>

      {/* About Me */}
    <div className={`w-screen overflow-hidden items-center lg:flex mb-12 pt-12`}>
      <section
        id="aboutMe"
        className="w-screen text-center"
      >
        <div className="h-auto">
            <h1
              className={`text-4xl md:text-5xl font-medium ${props.colorMode.text} font-Orbitron mb-10 mx-5`}
            >
              {about.intro}
              <strong className={`bg-clip-text text-transparent ${props.foreground.title} font-Orbitron`}>
                {about.title}
              </strong>
            </h1>
        </div>

          <section className={`relative flex justify-evenly items-center mb-20 `}>
            <MdChevronLeft
              size="50"
              className="opacity-60 m-5 md:m-20 lg:m-10 hover:cursor-pointer hover:opacity-100 flex-shrink-0"
              onClick={slideLeft}
            />
            <div>
              <img
                src={about.img}
                alt="Engineer_Photo"
                className="transition-all hover:grayscale-[100%] rounded-2xl md:w-56 w-48 inline-block ease-in-out snap-center"
              />
            </div>

            <MdChevronRight
              size="50"
              className="opacity-60 m-5 md:m-20 lg:m-10 hover:cursor-pointer hover:opacity-100 flex-shrink-0"
              onClick={slideRight}
            />
          </section>
      </section>

    </div>
    </div>
  )
}

export default Hero