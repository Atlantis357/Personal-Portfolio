/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   AboutMe.jsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 11:42:38 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/28 23:28:39 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { primaryGradient, secondaryGradient, aboutMe, asideBackground } from '../constants'

function AboutMe() {
    var i = 0;
  return (
    <div id='aboutMe'>

        <section className='pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0'>
            <h1 className={`font-bold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${primaryGradient}`}>
                About Me
            </h1>
        </section>


        {/* Perspective 1 L*/}
        <section className='flex h-auto w-screen mb-7 md:mb-12'>
            <div className='w-full items-center justify-center px-5 hidden md:flex'>
                <img
                    src={aboutMe[i].img}
                    alt='Engineer_Photo'
                    className='rounded-2xl lg:w-52 md:w-48 sm:w-40'
                ></img>
            </div>
            <div className={`w-full mx-10 rounded-2xl ${asideBackground}`}>
                <h1 class={`bg-clip-text text-transparent ${secondaryGradient} text-3xl text-center font-extrabold md:text-4xl py-5`}>
                    {aboutMe[i].title}
                </h1>
                <p className='flex text-center font-mono'>
                    {aboutMe[i].description}
                </p>
            </div>
            <div className='hidden'>{++i}</div>
        </section>

        {/* Perspective 2 R*/}
        <section className='flex h-auto w-screen mb-7 md:mb-12'>
            <div className={`w-full mx-10 rounded-2xl ${asideBackground}`}>
                <h1 class={`bg-clip-text text-transparent ${secondaryGradient} text-3xl text-center font-extrabold md:text-4xl py-5`}>
                    {aboutMe[i].title}
                </h1>
                <p className='flex text-center font-mono'>
                    {aboutMe[i].description}
                </p>
            </div>
            <div className='w-full items-center justify-center px-5 hidden md:flex'>
                <img
                    src={aboutMe[i].img}
                    alt='Engineer_Photo'
                    className='rounded-2xl lg:w-52 md:w-48 sm:w-40'
                ></img>
            </div>
            <div className='hidden'>{++i}</div>
        </section>

        {/* Perspective 3 L*/}
        <section className='flex h-auto w-screen mb-7 md:mb-12'>
            <div className='w-full items-center justify-center px-5 hidden md:flex'>
                <img
                    src={aboutMe[i].img}
                    alt='Engineer_Photo'
                    className='rounded-2xl lg:w-52 md:w-48 sm:w-40'
                ></img>
            </div>
            <div className={`w-full mx-10 rounded-2xl ${asideBackground}`}>
                <h1 class={`bg-clip-text text-transparent ${secondaryGradient} text-3xl text-center font-extrabold md:text-4xl py-5`}>
                    {aboutMe[i].title}
                </h1>
                <p className='flex text-center font-mono'>
                    {aboutMe[i].description}
                </p>
            </div>
            <div className='hidden'>{++i}</div>
        </section>

         {/* Perspective 4 R*/}
         <section className='flex h-auto w-screen mb-7 md:mb-12'>
            <div className={`w-full mx-10 rounded-2xl ${asideBackground}`}>
                <h1 class={`bg-clip-text text-transparent ${secondaryGradient} text-3xl text-center font-extrabold md:text-4xl py-5`}>
                    {aboutMe[i].title}
                </h1>
                <p className='flex text-center font-mono'>
                    {aboutMe[i].description}
                </p>
            </div>
            <div className='w-full items-center justify-center px-5 hidden md:flex'>
                <img
                    src={aboutMe[i].img}
                    alt='Engineer_Photo'
                    className='rounded-2xl lg:w-52 md:w-48 sm:w-40'
                ></img>
            </div>
            <div className='hidden'>{++i}</div>
        </section>

        {/* Perspective 5 L*/}
        <section className='flex h-auto w-screen mb-7 md:mb-12'>
            <div className='w-full items-center justify-center px-5 hidden md:flex'>
                <img
                    src={aboutMe[i].img}
                    alt='Engineer_Photo'
                    className='rounded-2xl lg:w-52 md:w-48 sm:w-40'
                ></img>
            </div>
            <div className={`w-full mx-10 rounded-2xl ${asideBackground}`}>
                <h1 class={`bg-clip-text text-transparent ${secondaryGradient} text-3xl text-center font-extrabold md:text-4xl py-5`}>
                    {aboutMe[i].title}
                </h1>
                <p className='flex text-center font-mono'>
                    {aboutMe[i].description}
                </p>
            </div>
            <div className='hidden'>{++i}</div>
        </section>
        




    </div>
  )
}

export default AboutMe
