/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Hero.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:56:31 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/01/20 16:12:43 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, {useRef, useEffect, useState} from 'react'
import { motion, useMotionValue, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { abe, mainMountain, backgroundSky, foregroundMountain, distantMountain, subMainMountain, fraternity} from '../assets'
import { nameIntro, onRepeat, aboutMe } from '../constants'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import TiltCard from './TiltCard';
import Projects from './Projects';

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
  const [brightness, setBrightness] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;
      // Calculate the new brightness based on scroll position
      // This is just an example calculation, adjust it as needed
      const newBrightness = Math.max(1 - scrollY / 500, 0.1);
      setBrightness(newBrightness);
    };
    // Attach the event listener
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once on mount

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
            filter: `brightness(${brightness})`,
            }}
        />
        <motion.div
            className={`absolute inset-0 z-10`}
            style={{
            backgroundImage: `url(${distantMountain})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: distantMountainY,
            filter: `brightness(${brightness})`,
            }}
        />
        <motion.div
            className={`absolute inset-0 z-20`}
            style={{
            backgroundImage: `url(${mainMountain})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: mainMountainY,
            filter: `brightness(${brightness})`,
            }}
        />
         <motion.div
            className={`absolute inset-0 z-30`}
            style={{
            backgroundImage: `url(${subMainMountain})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: subMainMountainY,
            filter: `brightness(${brightness})`,
            }}
        />
        <div
            className={`absolute inset-0 z-30`}
            style={{
            backgroundImage: `url(${foregroundMountain})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            filter: `brightness(${brightness})`,
            }}
        />
    </div>
    <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 py-24 px-15 md:px-16'>
      <section>
        <p className={`${props.colorMode.text} text-2xl md:text-2xl text-left px-5 indent-10 font-Sacramento leading-loose`}>
          I use my creative and analytical skills along with my professional training in bioengineering and computer science to design innovative digital solutions for my customers. I work with organizations and companies to create a development blueprint towards the forefront of comptuer science and medicine.
          </p>
          <p className={`${props.colorMode.text} text-2xl md:text-2xl text-left px-5 indent-10 font-Sacramento leading-loose pt-4`}>
            As a junior at the University of Illinios at Urbana Champaign, I am also passively looking for new positions where I can merge my passion for code with my love for medicine. If you think you've got an opening that I might like, let's connect!
          </p>
      </section>

        <section className='hover:text-opacity-0 md:text-opacity-80 text-white text-center transition-all text-md font-Lumanosimo text-opacity-0'>
        <div className="grid w-full place-content-center py-10 md:py-0">
          <TiltCard />
            Hover Me!
        </div>
        </section>
    </div>
    {/* <Projects foreground={props.foreground} colorMode={props.colorMode} /> */}
    </div>
  )
}

export default Hero