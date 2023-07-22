/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   AboutMe.jsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 11:42:38 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/22 15:39:18 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { aboutMe, asideBackground, } from '../constants'
import {MdChevronLeft, MdChevronRight } from 'react-icons/md'


const AboutMe = (props) => {

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
        var textSlider = document.getElementById('textSlider');
        textSlider.scrollLeft = textSlider.scrollLeft + 500;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
        var textSlider = document.getElementById('textSlider');
        textSlider.scrollLeft = textSlider.scrollLeft - 500;
      };





  return (
    <section className={`w-screen overflow-hidden justify-center items-start`}>
        <div id='aboutMe'>

            <section className='mb-16 md:mb-28 text-center w-screen '>
                <h1 className={`font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${props.foreground.main} tracking-wider font-Orbitron`}>
                    ABOUT ME
                </h1>
            </section>

            {/* <div>
                {aboutMe.map((info, index) => (
                    (index % 2 == 0) ?
                    // Right view
                        <section className='flex h-auto w-screen mb-7 md:mb-12'>
                            <div className='w-full items-center justify-center px-5 hidden md:flex'>
                                <img
                                    src={info.img}
                                    alt='Engineer_Photo'
                                    className='{ transition-all duration-200 } hover:scale-110 rounded-2xl lg:w-52 md:w-48 sm:w-40'
                                ></img>
                            </div>
                            <div className={`w-full mx-10 rounded-2xl {asideBackground} `}>
                                <h1 class={`bg-clip-text text-transparent ${props.foreground.accent} text-3xl text-center font-extrabold md:text-4xl py-5 font-Orbitron tracking-wide`}>
                                    {info.title}
                                </h1>
                                <p className={`flex text-center ${props.colorMode.text} p-2`}>
                                    {info.description}
                                </p>
                            </div>
                        </section>
                    :
                    // Left view
                    <section className='flex h-auto w-screen mb-7 md:mb-12'>
                        <div className={`w-full mx-10 rounded-2xl {asideBackground}`}>
                            <h1 class={`bg-clip-text text-transparent ${props.foreground.accent} text-3xl text-center font-extrabold md:text-4xl py-5 font-Orbitron tracking-wide`}>
                                {info.title}
                            </h1>
                            <p className={`flex text-center ${props.colorMode.text} p-2`}>
                                {info.description}
                            </p>
                        </div>
                        <div className='w-full items-center justify-center px-5 hidden md:flex'>
                            <img
                                src={info.img}
                                alt='Engineer_Photo'
                                className='{ transition-all duration-200 } hover:scale-110 rounded-2xl lg:w-52 md:w-48 sm:w-40'
                            />
                        </div>
                    </section>
                ))}
            </div> */}

            <section className={`relative flex  items-center mb-20 `}>
                
                <MdChevronLeft size='50' className='opacity-60 m-10 hover:cursor-pointer hover:opacity-100 flex-shrink-0' onClick={slideLeft}/>
                <div id='slider' className='w-auto h-auto overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide snap-x'>
                    {aboutMe.map((about) => (

                            <img
                                src={about.img}
                                alt='Engineer_Photo'
                                className='transition-all hover:grayscale-[100%] rounded-2xl lg:w-52 w-48 inline-block ease-in-out snap-center mx-16'
                            />
                            
                    ))}
                </div>
               
                <MdChevronRight size='50' className='opacity-60 m-10 hover:cursor-pointer hover:opacity-100 flex-shrink-0' onClick={slideRight}/>
            </section>

        </div>
    </section>
  )
}

export default AboutMe