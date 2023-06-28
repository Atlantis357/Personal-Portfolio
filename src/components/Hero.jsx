/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Hero.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:56:31 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/28 11:40:33 by Abraham Alk      ###   ########.fr       */
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


        <section id='aboutMe' className='pb-16 text-center w-screen'>
            <h1 className={`font-bold text-5xl bg-clip-text text-transparent ${secondaryGradient} `}>
                About Me
            </h1>

        </section>


        {/* Perspective 1 L*/}
        <section className='flex h-auto w-screen pb-12'>
            <div className='flex w-full items-center justify-center px-5'>
                <img
                    src={abe}
                    alt='Engineer_Photo'
                    className='rounded-2xl w-52'
                ></img>
            </div>
            <div className="w-full mx-10 bg-slate-500 bg-opacity-30 rounded-2xl">

                <h1 class="text-white text-3xl text-center font-extrabold md:text-4xl py-5">
                    ... an 
                    <strong className={`bg-clip-text text-transparent ${secondaryGradient}`}>
                        Engineer?
                    </strong>
                </h1>
                <p className='flex text-center font-mono'>
                    My long-term goal in medicine is to develop computational, non-intrusive tools that doctors can readily use to improve the accuracy of their diagnostics.
                </p>
            </div>
        </section>



        {/* TEMPLATES */}
        <section className='flex h-auto w-screen pb-12'>
            <div className='flex w-full items-center justify-center px-5'>
                <img
                    src={abe}
                    alt='Engineer_Photo'
                    className='rounded-2xl w-52'
                ></img>
            </div>
            <div className="w-full mx-10 bg-slate-500 bg-opacity-30 rounded-2xl">

                <h1 class="text-white text-3xl text-center font-extrabold md:text-4xl py-5">
                    ... an 
                    <strong className={`bg-clip-text text-transparent ${secondaryGradient}`}>
                        Engineer?
                    </strong>
                </h1>
                <p className='flex text-center font-mono'>
                    My long-term goal in medicine is to develop computational, non-intrusive tools that doctors can readily use to improve the accuracy of their diagnostics.
                </p>
            </div>
        </section>
        <section className='flex h-auto w-screen pb-12'>
            <div className='flex w-full items-center justify-center px-5'>
                <img
                    src={abe}
                    alt='Engineer_Photo'
                    className='rounded-2xl w-52'
                ></img>
            </div>
            <div className="w-full mx-10 bg-slate-500 bg-opacity-30 rounded-2xl">

                <h1 class="text-white text-3xl text-center font-extrabold md:text-4xl py-5">
                    ... an 
                    <strong className={`bg-clip-text text-transparent ${secondaryGradient}`}>
                        Engineer?
                    </strong>
                </h1>
                <p className='flex text-center font-mono'>
                    My long-term goal in medicine is to develop computational, non-intrusive tools that doctors can readily use to improve the accuracy of their diagnostics.
                </p>
            </div>
        </section>
        <section className='flex h-auto w-screen pb-12'>
            <div className='flex w-full items-center justify-center px-5'>
                <img
                    src={abe}
                    alt='Engineer_Photo'
                    className='rounded-2xl w-52'
                ></img>
            </div>
            <div className="w-full mx-10 bg-slate-500 bg-opacity-30 rounded-2xl">

                <h1 class="text-white text-3xl text-center font-extrabold md:text-4xl py-5">
                    ... an 
                    <strong className={`bg-clip-text text-transparent ${secondaryGradient}`}>
                        Engineer?
                    </strong>
                </h1>
                <p className='flex text-center font-mono'>
                    My long-term goal in medicine is to develop computational, non-intrusive tools that doctors can readily use to improve the accuracy of their diagnostics.
                </p>
            </div>
        </section>
        <section className='flex h-auto w-screen pb-12'>
            <div className='flex w-full items-center justify-center px-5'>
                <img
                    src={abe}
                    alt='Engineer_Photo'
                    className='rounded-2xl w-52'
                ></img>
            </div>
            <div className="w-full mx-10 bg-slate-500 bg-opacity-30 rounded-2xl">

                <h1 class="text-white text-3xl text-center font-extrabold md:text-4xl py-5">
                    ... an 
                    <strong className={`bg-clip-text text-transparent ${secondaryGradient}`}>
                        Engineer?
                    </strong>
                </h1>
                <p className='flex text-center font-mono'>
                    My long-term goal in medicine is to develop computational, non-intrusive tools that doctors can readily use to improve the accuracy of their diagnostics.
                </p>
            </div>
        </section>

    </div>
  )
}

export default Hero