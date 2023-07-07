/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Resume.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/30 08:53:45 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/07 14:31:08 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


import React from 'react'
import { resume } from '../assets'
import { titles } from '../constants'

const Resume = (props) => {
  return (
    
    <div id='resume'>
        <section className='pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0'>
            <h1 className={`font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${props.foreground.main} tracking-wider font-Orbitron`}>
                {titles[3].eng}
            </h1>
        </section>
        
        <section className='flex items-center justify-center md:h-screen'>
            <iframe
                src={resume}
                className='w-2/3 rounded-lg h-full'>   
            </iframe>
        </section>
    </div>
  )
}

export default Resume