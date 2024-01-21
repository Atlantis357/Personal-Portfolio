/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Photography.jsx                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/04 18:35:03 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/01/20 23:28:59 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


import React from 'react'
import { asideBackground, photos, } from '../constants'
import { Link } from 'react-router-dom';

const Photography = (props) => {
  return (

    <div id='photography' className=' py-20 md:py-28'>
        {/* Title */}
        <section className='pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0'>
                <h1 className={`font-extrabold text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent ${props.foreground.title} tracking-widest font-Permanent-Marker`}>
                    My Photography
                </h1>
        </section>

        {/* Grid */}
        <section className='container mx-auto pb-10 px-10 '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-16 md:gap-8 sm:gap-8 justify-center'>
            {photos.map((info, index) => (
                
                // <Link to={`${info.link}`}>
                    <article className={`group ${asideBackground} rounded-2xl my-5 hover:cursor-pointer`}>
                        <img
                            src={info.img}
                            class="h-auto w-auto transition rounded-xl"
                        />
                        <div class="p-4">
                            <h3 class={`text-lg font-medium bg-clip-text text-transparent font-Orbitron ${props.foreground.accent}`}>
                                {info.title}
                            </h3>
                            <p class={`mt-2 line-clamp-5 text-sm/relaxed ${props.colorMode.text}`}>
                                {info.description}
                            </p>
                        </div>
                    </article>
                // </Link>

            ))}        
            </div>
        </section>
    </div>
  )
}

export default Photography