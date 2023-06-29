/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Projects.jsx                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/29 14:30:53 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/29 15:59:56 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { primaryGradient } from '../constants'

const Projects = () => {
  return (
    <div id='projects'>


        <section className='pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0'>
                <h1 className={`font-bold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${primaryGradient}`}>
                    My Projects
                </h1>
        </section>

        <section className='container mx-auto pb-10 px-10'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-16 md:gap-10 sm:gap-10 justify-center'>

                {/* Ready for card */}
                <article className="group">
                    <img
                        alt="Lava"
                        src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div class="p-4">
                        <a href="#">
                        <h3 class="text-lg font-medium text-gray-900">
                            Finding the Journey to Mordor
                        </h3>
                        </a>

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?
                        </p>
                    </div>
                </article>

                
                <article className="group">
                    <img
                        alt="Lava"
                        src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div class="p-4">
                        <a href="#">
                        <h3 class="text-lg font-medium text-gray-900">
                            Finding the Journey to Mordor
                        </h3>
                        </a>

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?
                        </p>
                    </div>
                </article>
                <article className="group">
                    <img
                        alt="Lava"
                        src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div class="p-4">
                        <a href="#">
                        <h3 class="text-lg font-medium text-gray-900">
                            Finding the Journey to Mordor
                        </h3>
                        </a>

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?
                        </p>
                    </div>
                </article>
                

            </div>

            
            
            

        </section>










        
    </div>
  )
}

export default Projects