/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Hero.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:56:31 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/01/11 04:44:07 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, {useRef} from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { abe, bottomMountain, fullMountain } from '../assets'
import { nameIntro } from '../constants'
import { onRepeat } from '../constants'

const Hero = (props) => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    // Whole Page
    <>
    <div ref={ref} className="w-full pt-32 lg:pt-44 h-screen overflow-hidden relative">
        <motion.h1 style={{ y: textY }} className="mx-auto font-Permanent-Marker font-bold text-white text-7xl md:text-9xl relative text-center px-auto z-10">
            Who is <span className={`bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-gray-800 via-gray-100 to-gray-900`}>Abraham?</span>
        </motion.h1>
        <motion.div
            className="absolute inset-0 z-0"
            style={{
            backgroundImage: `url(${fullMountain})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: backgroundY,
            }}
        />

        <div
            className="absolute inset-0 z-20"
            style={{
            backgroundImage: `url(${bottomMountain})`,
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