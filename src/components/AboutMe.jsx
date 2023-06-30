/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   AboutMe.jsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 11:42:38 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/29 22:43:44 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { primaryGradient, secondaryGradient, aboutMe, asideBackground } from '../constants'

function AboutMe() {
  return (
    <section id='aboutMe' className={`w-full overflow-hidden flex justify-center items-start`}>
        <div id='aboutMe'>

            <section className='pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0'>
                <h1 className={`font-bold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${primaryGradient}`}>
                    About Me
                </h1>
            </section>

            <div>
                {aboutMe.map((info, index) => (
                    (index % 2 == 0) ?
                    // Right view
                        <section className='flex h-auto w-screen mb-7 md:mb-12'>
                            <div className='w-full items-center justify-center px-5 hidden md:flex'>
                                <img
                                    src={info.img}
                                    alt='Engineer_Photo'
                                    className='{ transition-all duration-200 hover:grayscale-[100%] } rounded-2xl lg:w-52 md:w-48 sm:w-40'
                                ></img>
                            </div>
                            <div className={`w-full mx-10 rounded-2xl ${asideBackground}`}>
                                <h1 class={`bg-clip-text text-transparent ${secondaryGradient} text-3xl text-center font-extrabold md:text-4xl py-5`}>
                                    {info.title}
                                </h1>
                                <p className='flex text-center font-mono text-white p-2'>
                                    {info.description}
                                </p>
                            </div>
                        </section>
                    :
                    // Left view
                        <section className='flex h-auto w-screen mb-7 md:mb-12'>
                        <div className={`w-full mx-10 rounded-2xl ${asideBackground}`}>
                            <h1 class={`bg-clip-text text-transparent ${secondaryGradient} text-3xl text-center font-extrabold md:text-4xl py-5`}>
                                {info.title}
                            </h1>
                            <p className='flex text-center font-mono text-white p-2'>
                                {info.description}
                            </p>
                        </div>
                        <div className='w-full items-center justify-center px-5 hidden md:flex'>
                            <img
                                src={info.img}
                                alt='Engineer_Photo'
                                className='{ transition-all duration-200 hover:grayscale-[100%] } rounded-2xl lg:w-52 md:w-48 sm:w-40'
                            ></img>
                        </div>
                    </section>
                ))}
            </div>

        </div>
    </section>
  )
}

export default AboutMe