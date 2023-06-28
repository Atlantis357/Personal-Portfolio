/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Hero.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:56:31 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/27 23:23:48 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


import React from 'react'
import { abe } from '../assets'
import { nameIntro } from '../constants'

const Hero = () => {
  return (
    // Whole Page
    <div className='h-auto w-screen'> 
        
        {/* lg:h-screen */}
        <section class="mx-auto max-w-screen-xl md:py-52 lg:flex items-center px-4 sm:px-6 lg:px-12">

            {/* Left half of page - Intro*/}
            <div class="w-full text-center pb-10">
                {/* English Welcome */}
                <h1 class="text-white text-4xl font-extrabold sm:text-6xl">
                    {nameIntro.EngIntro}
                    <strong className='bg-clip-text text-transparent bg-gradient-to-b from-gray-600 via-gray-800 to-black'>
                        {nameIntro.EngName}
                    </strong>
                </h1>
                {/* Chinese Welcome */}
                <h1 class="text-white text-3xl font-extrabold sm:text-5xl">
                    <strong className='bg-clip-text text-transparent bg-gradient-to-b from-gray-600 via-gray-800 to-black'>
                        {nameIntro.ChiName}
                    </strong>
                    {nameIntro.ChiOutro}           
                </h1>
            </div>

            {/* Right half of page - text */}
            <div className='flex w-full items-center justify-center'>
                <div>
                    <img
                        src={abe}
                        alt='Abe'
                        className='rounded-3xl w-72'
                    ></img>
                </div>
            </div>
        </section>

        {/* More info L-R layout */}

{/* 
        <section className='h-80 rounded-xl snap-y w-screen'>
            <div class="w-screen">
                <h1 class="text-right text-white text-3x pr-28 font-extrabold sm:text-5xl">
                    I' an
                    <strong className='bg-clip-text text-transparent bg-gradient-to-b from-gray-600 via-gray-800 to-black'>
                        Engineer
                    </strong>
                </h1>
                <h1 className='flex text-center font-mono'>
                    I'm a bioengineering junior at the University of Illinois with a minor in Computer Science at the University of Illinois that is bilingual in Mandarin and English and experienced in working with small to medium-sized businesses. My long-term goal in medicine is to develop computational, non-intrusive tools that doctors can readily use to improve the accuracy of their diagnostics.
                </h1>
            </div>

        </section> */}



    </div>
  )
}

export default Hero