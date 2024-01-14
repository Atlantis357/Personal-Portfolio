/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Hero.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:56:31 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/01/13 19:26:24 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, {useRef} from 'react'
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { abe, mainMountain, backgroundSky, foregroundMountain, distantMountain, subMainMountain} from '../assets'
import { nameIntro } from '../constants'
import { onRepeat } from '../constants'

const Hero = (props) => {

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
    // const x = useMotionValue(0)
    // const opacity = useTransform(
    //     x,
    //     // Map x from these values:
    //     [0, 100],
    //     // Into these values:
    //     [1, 0]
    //   )
  return (
    // Whole Page
    <>
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
            className="absolute inset-0 z-10"
            style={{
            backgroundImage: `url(${backgroundSky})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: backgroundY,
            }}
        />
        <motion.div
            className="absolute inset-0 z-10"
            style={{
            backgroundImage: `url(${distantMountain})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: distantMountainY,
            }}
        />

        <motion.div
            className="absolute inset-0 z-20"
            style={{
            backgroundImage: `url(${mainMountain})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: mainMountainY,
            }}
        />

         <motion.div
            className="absolute inset-0 z-30"
            style={{
            backgroundImage: `url(${subMainMountain})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: subMainMountainY,
            }}
        />

        <div
            className="absolute inset-0 z-30"
            style={{
            backgroundImage: `url(${foregroundMountain})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            }}
        />
    </div>

    </>
  )
}

export default Hero



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