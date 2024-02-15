/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Projects.jsx                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/29 14:30:53 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/02/14 20:56:48 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { asideBackground, projects, } from '../constants'
import { Link } from 'react-router-dom';
import HoverImageLink from './HoverImageLink';
import { fraternity } from '../assets';

const Projects = (props) => {
  return (

    <div id='projects' className=' py-20 md:py-28'>
        {/* Title */}
        <section className='pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0'>
                <h1 className={`font-extrabold text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent ${props.foreground.title} tracking-widest font-Permanent-Marker`}>
                    MY PROJECTS
                </h1>
        </section>

        {/* Mobile - GridView */}
        <section className='container mx-auto pb-10 px-10 md:hidden'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-16 md:gap-8 sm:gap-8 justify-center'>
        {projects.map((info, index) => (
            <Link to={`${info.link}`}>
                <article className={`group ${asideBackground} rounded-2xl my-5 hover:cursor-pointer hover:scale-110`}>
                    <img
                        src={info.img}
                        class="h-56 w-full transition group-hover:grayscale-[50%] rounded-t-2xl"
                    />
                    <div class="p-4">
                        <h3 class={`text-lg font-medium bg-clip-text text-transparent font-Orbitron ${props.foreground.main}`}>
                            {info.title}
                        </h3>
                        <p class={`mt-2 line-clamp-5 text-sm/relaxed ${props.colorMode.text}`}>
                            {info.description}
                        </p>
                    </div>
                </article>
            </Link>

        ))}        
        </div>
        </section> 

        {/* Computer: HoverLinkView */}
        <section className="p-4 md:p-8 hidden md:flex">
            <div className="mx-auto max-w-6xl">
                {projects.map((info, index) => (
                    <Link to={`${info.link}`}>
                    <HoverImageLink
                    heading={info.title}
                    subheading={info.description}
                    imgSrc={info.img}
                    href={info.link}
                    foreground={props.foreground} 
                    colorMode={props.colorMode} 
                    />
                    </Link>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Projects




