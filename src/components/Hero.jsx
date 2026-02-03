/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Hero.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:56:31 by Abraham Alk       #+#    #+#             */
/*   Updated: 2026/02/02 19:55:19 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, {useRef, useEffect, useState} from 'react'
import { motion, useMotionValue, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { abe, mainMountain, backgroundSky, foregroundMountain, distantMountain, subMainMountain, fraternity} from '../assets'
import { nameIntro, onRepeat, aboutMe } from '../constants'
import { FaAngleDoubleDown } from "react-icons/fa";
import TiltCard from './TiltCard';
import Projects from './Projects';
import { IconContext } from 'react-icons';

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
        className='absolute bottom-0 left-0 mb-8 ml-8 md:mb-16 md:ml-16 flex z-40 opacity-80'
        animate={{ y: [0, 10, 0]}}
        transition={{ y: {repeat: Infinity, repeatType: "mirror", duration: 0.75} }}
        >
        <IconContext.Provider value={{color: 'white', size: '75px'}}>
          <FaAngleDoubleDown />
        </IconContext.Provider>
      </motion.div>
        
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
        <p className={`${props.colorMode.text} text-2xl md:text-2xl text-left px-5 indent-10 font-Inter leading-loose`}>
        Welcome to my corner of the internet! I'm Abraham, or you can call me Ab for “艾笔”. I made this for strangers like you, since I’m not on most socials anymore. Hopefully this offers a glimpse of me that Strava and Spotify cannot provide~ :p
        </p>
        <p className={`${props.colorMode.text} text-2xl md:text-2xl text-left px-5 indent-10 font-Inter leading-loose pt-4`}>
           Though early in my career, I've contributed to building AI algorithms for heart failure risk and designed devices to improve surgical visibility. I'm driven by the potential to better lives through the intersection of technology and medicine. Reach out if you're interested in collaborating!
        </p>
      </section>

      <section className='hover:text-opacity-0 md:text-opacity-80 text-white text-center transition-all text-md font-Lumanosimo text-opacity-0'>
      <div className="grid w-full place-content-center py-10 md:py-0">
        <TiltCard />
          Hover Me!
      </div>
      </section>
    </div>
    {/* <Projects foreground={props.foreground} colorMode={props.colorMode} /> */}å
    </div>
  )
}

export default Hero