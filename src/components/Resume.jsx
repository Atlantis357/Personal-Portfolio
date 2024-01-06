/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Resume.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/30 08:53:45 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/01/05 19:11:38 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


import React from 'react'
import { resume } from '../assets'

const Resume = (props) => {
  return (
    
    <div id='resume' className=' py-20 md:py-28'>
        <section className='pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0'>
            <h1 className={`font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${props.foreground.main} tracking-wider font-Orbitron`}>
                RESUME
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