/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Projects.jsx                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/29 14:30:53 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/09 19:03:01 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { asideBackground, projects, titles } from '../constants'
import { Link } from 'react-router-dom';

const Projects = (props) => {
  return (

    <div id='projects' className=' py-20 md:py-28'>
        {/* Title */}
        <section className='pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0'>
                <h1 className={`font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${props.foreground.main} tracking-wider font-Orbitron`}>
                    {titles[1]}
                </h1>
        </section>

        {/* Grid */}
        <section className='container mx-auto pb-10 px-10 '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-16 md:gap-8 sm:gap-8 justify-center'>
            {projects.map((info, index) => (


                <a href={info.link} className='hover:cursor-pointer'>
                    <article className={`group ${asideBackground} rounded-2xl my-5`}>
                        <img
                            src={info.img}
                            class="h-56 w-full transition group-hover:grayscale-[50%] p-2"
                        />

                        <div class="p-4">
                            <h3 class={`text-lg font-medium bg-clip-text text-transparent font-Orbitron ${props.foreground.accent}`}>
                                {info.title}
                            </h3>

                            <p class={`mt-2 line-clamp-3 text-sm/relaxed ${props.colorMode.text}`}>
                                {info.description}
                            </p>
                        </div>
                    </article>
                </a>


                // <Link to={`${info.link}`}>
                //     <article className={`group ${asideBackground} rounded-2xl my-5 hover:cursor-pointer`}>
                //         <img
                //             src={info.img}
                //             class="h-56 w-full transition group-hover:grayscale-[50%] p-2"
                //         />

                //         <div class="p-4">
                //             <h3 class={`text-lg font-medium bg-clip-text text-transparent font-Orbitron ${props.foreground.accent}`}>
                //                 {info.title}
                //             </h3>

                //             <p class={`mt-2 line-clamp-3 text-sm/relaxed ${props.colorMode.text}`}>
                //                 {info.description}
                //             </p>
                //         </div>
                //     </article>
                // </Link>




            ))}        
            </div>
        </section>
    </div>
  )
}

export default Projects