/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Hero.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:56:31 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/01/15 19:58:26 by Abraham Alk      ###   ########.fr       */
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
            <h1 class={`${props.colorMode.text} font-Permanent-Marker font-bold text-6xl md:text-8xl mb-6`}>
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
        <p className={`${props.colorMode.text} text-xl md:text-2xl text-left px-5 indent-10`}>
        I use my creative and analytical skills along with my professional training in bioengineering and computer science to design solutions that provide unparalled value to my customers. Organizations and companies rely on me to create a development blueprint towards the cutting edge of comptuer science and medicine.
        </p>
        <section>
        <div className="grid w-full place-content-center">
        <TiltCard />
        </div>
           

        </section>
    </div>
    <div className={`w-screen overflow-hidden items-center lg:flex mb-12 pt-12`}>
      {/* About Me */}
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


// <div className="h-auto">
//             <h1
//               className={`text-4xl md:text-5xl font-medium ${props.colorMode.text} font-Orbitron mb-10 mx-5 text-center`}
//             >
//               {aboutThis.intro}
//               <strong className={`bg-clip-text text-transparent ${props.foreground.title} font-Orbitron`}>
//                 {aboutThis.title}
//               </strong>
//             </h1>
//         </div>

//           <section className={`relative flex justify-evenly items-center mb-20 `}>
//             <MdChevronLeft
//               size="50"
//               className="opacity-60 m-auto hover:cursor-pointer hover:opacity-100 flex-shrink-0"
//               onClick={updateImage}
//             />
//             <AnimatePresence>
//                 <motion.img
//                 key={aboutThis.img}
//                 src={aboutThis.img}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className='rounded-2xl md:w-56 w-48 inline-block ease-in-out snap-center'
//                 />
//             </AnimatePresence>
//             <MdChevronRight
//               size="50"
//               className="opacity-60 m-auto hover:cursor-pointer hover:opacity-100 flex-shrink-0"
//               onClick={updateImage}
//             />
//           </section>



// <section className={`w-full pt-20 lg:pt-0 overflow-hidden justify-center items-start h-4/5`}>
// <div className='h-auto w-screen py-12 md:py-0'> 
//     {/* Welcome view */}
    // <section id='/hero' class="mx-auto max-w-screen-xl md:py-52 lg:flex h-4/5 items-center px-4">

    //     {/* Left half of page - Intro*/}
    //     <div class="w-full text-center pb-10">
    //         {/* English Welcome */}
    //         <h1 class={`${props.colorMode.text} text-5xl font-extrabold sm:text-7xl pb-3`}>
    //             {nameIntro.EngIntro}
    //             <strong className={`bg-clip-text text-transparent ${props.foreground.title} font-Permanent-Marker`}>
    //                 {nameIntro.EngName}
    //             </strong>
    //             {nameIntro.EngOutro}
    //         </h1>
    //         {/* Chinese Welcome */}
    //         <h1 class={`${props.colorMode.text} text-4xl font-extrabold sm:text-6xl`}>
    //             <strong className={`bg-clip-text text-transparent ${props.foreground.title} font-Ma-Shan-Zheng`}>
    //                 {nameIntro.ChiName}
    //             </strong>
    //             {nameIntro.ChiOutro}           
    //         </h1>
    //     </div>

    //     {/* Right half of page - img */}
    //     <div className='flex w-full items-center justify-center'>
    //         <div>
    //             <img
    //                 src={abe}
    //                 alt='Abe'
    //                 className='rounded-full w-72 hover:grayscale-[100%] transition-all '
    //             />
    //         </div>
    //     </div>
    // </section>
    
// </div>

// </section>