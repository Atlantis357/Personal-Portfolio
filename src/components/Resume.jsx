/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Resume.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/30 08:53:45 by Abraham Alk       #+#    #+#             */
/*   Updated: 2025/02/25 22:24:06 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


import React from 'react'
import { resume } from '../assets'

const Resume = (props) => {
  return (
    
    <div id='resume' className=' py-20 md:py-28'>
        <section className='pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0'>
            <h1 className={`font-extrabold text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent ${props.foreground.title} tracking-widest font-Permanent-Marker`}>
                MY RESUME
            </h1>
        </section>
        
        <section className='flex items-center justify-center h-auto'>
            <iframe
                src={resume}
                className='w-2/3 rounded-lg h-screen'>   
            </iframe>
        </section>
    </div>
  )
}

export default Resume