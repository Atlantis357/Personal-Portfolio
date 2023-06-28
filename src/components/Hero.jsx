/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Hero.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:56:31 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/28 11:46:23 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { abe, secondaryGradient } from '../assets'
import { nameIntro } from '../constants'

const Hero = () => {
  return (
    // Whole Page
    <div className='h-auto w-screen'> 
        
        {/* Welcome view */}
        <section id='hero' class="mx-auto max-w-screen-xl md:py-52 lg:flex md:h-screen h-3/4 items-center px-4">

            {/* Left half of page - Intro*/}
            <div class="w-full text-center pb-10">
                {/* English Welcome */}
                <h1 class="text-white text-4xl font-extrabold sm:text-6xl ">
                    {nameIntro.EngIntro}
                    <strong className={`bg-clip-text text-transparent ${secondaryGradient} `}>
                        {nameIntro.EngName}
                    </strong>
                </h1>
                {/* Chinese Welcome */}
                <h1 class="text-white text-3xl font-extrabold sm:text-5xl">
                    <strong className={`bg-clip-text text-transparent ${secondaryGradient}`}>
                        {nameIntro.ChiName}
                    </strong>
                    {nameIntro.ChiOutro}           
                </h1>
            </div>

            {/* Right half of page - img */}
            <div className='flex w-full items-center justify-center'>
                <div>
                    <img
                        src={abe}
                        alt='Abe'
                        className='rounded-full w-72'
                    ></img>
                </div>
            </div>
        </section>


    </div>
  )
}

export default Hero