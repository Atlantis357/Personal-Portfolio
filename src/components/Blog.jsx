/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Blog.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/30 07:54:18 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/30 15:09:02 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { asideBackground, blogs, titles } from '../constants'

const Blog = (props) => {
  return (
    <div id='blog'>
        {/* Title */}
        <section className='pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0'>
                <h1 className={`font-bold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${props.foreground}`}>
                    {titles[2]}
                </h1>
        </section>

        {/* Grid */}
        <section className='container mx-auto pb-10 px-10'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-16 md:gap-8 sm:gap-8 justify-center'>

            {blogs.map((info, index) => (
                <article className={`group ${asideBackground} rounded-2xl`}>
                    <img
                        alt="Lava"
                        src={info.img}
                        class="h-56 w-full transition group-hover:grayscale-[50%] p-2"
                    />

                    <div class="p-4">
                        <a href="#">
                        <h3 class={`text-lg font-medium bg-clip-text text-transparent ${props.colorMode.title}`}>
                            {info.title}
                        </h3>
                        </a>

                        <p class={`mt-2 line-clamp-3 text-sm/relaxed ${props.colorMode.text}`}>
                            {info.description}
                        </p>
                    </div>
                </article>
            ))}        
            </div>
        </section>
    </div>
  )
}

export default Blog