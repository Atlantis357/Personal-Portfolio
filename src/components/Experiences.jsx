/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Experiences.jsx                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/09 21:17:43 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/09 21:21:40 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'

const Experiences = (props) => {
  return (
    <div id='experiences' className=' py-20 md:py-28'>
       <section className='pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0'>
            <h1 className={`font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${props.foreground.main} tracking-wider font-Orbitron`}>
                My Experiences
            </h1>
        </section>





        
    </div>
  )
}

export default Experiences