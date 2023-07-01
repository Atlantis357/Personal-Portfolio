/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   AboutMe.jsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 11:42:38 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/30 21:19:07 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { aboutMe, asideBackground, titles } from '../constants'

function AboutMe(props) {
  return (
    <section className={`w-full overflow-hidden flex justify-center items-start`}>
        <div id='aboutMe'>

            <section className='pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0'>
                <h1 className={`font-bold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${props.foreground}`}>
                    {titles[0]}
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
                                    className='{ transition-all duration-200 hover:grayscale-[50%] } rounded-2xl lg:w-52 md:w-48 sm:w-40'
                                ></img>
                            </div>
                            <div className={`w-full mx-10 rounded-2xl ${asideBackground}`}>
                                <h1 class={`bg-clip-text text-transparent ${props.colorMode.title} text-3xl text-center font-extrabold md:text-4xl py-5`}>
                                    {info.title}
                                </h1>
                                <p className={`flex text-center font-mono ${props.colorMode.text} p-2`}>
                                    {info.description}
                                </p>
                            </div>
                        </section>
                    :
                    // Left view
                    <section className='flex h-auto w-screen mb-7 md:mb-12'>
                        <div className={`w-full mx-10 rounded-2xl ${asideBackground}`}>
                            <h1 class={`bg-clip-text text-transparent ${props.colorMode.title} text-3xl text-center font-extrabold md:text-4xl py-5`}>
                                {info.title}
                            </h1>
                            <p className={`flex text-center font-mono ${props.colorMode.text} p-2`}>
                                {info.description}
                            </p>
                        </div>
                        <div className='w-full items-center justify-center px-5 hidden md:flex'>
                            <img
                                src={info.img}
                                alt='Engineer_Photo'
                                className='{ transition-all duration-200 hover:grayscale-[50%] } rounded-2xl lg:w-52 md:w-48 sm:w-40'
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