/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ProjectView.jsx                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/09 18:04:34 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/07/21 18:16:45 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { useParams } from 'react-router-dom' 
import { abe } from '../assets'
import { projects } from '../constants'

const ProjectView = (props) => {

    // Have to destructure the parameter to get id first
    const { id } = useParams()

    // Returns an array
    const tempID = projects.filter(proj => {
        return (proj.id === id)
    })
    
    // Grabs the first of the array since it's (hopefully) the only match
    const currProject = tempID[0]

  return (
    <div id='projectview' className=' py-20 md:py-28 min-h-screen'>
        {/* Title */}
        <section className='pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0'>
                <h1 className={`font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${props.foreground.main} tracking-wider font-Orbitron`}>
                    {currProject.title}
                </h1>
        </section>

        <section className={`items-center justify-center md:h-screen ${(currProject.linkType === 'internal') ? 'flex' : 'hidden'}`}>
            <img
                src= {currProject.titlePoster}
                className={`w-5/6 rounded-lg h-full`}>   
            </img>
        </section>
{/* 
        <section className={`items-center justify-center md:h-screen ${(currProject.linkType === 'dataviz') ? 'flex' : 'hidden'}`}>
            <div dangerouslySetInnerHTML={{ __html: htmlFile }} />
        </section> */}

        {/* <section className={`items-center justify-center md:h-screen ${(currProject.linkType === 'external') ? 'flex' : 'hidden'}`}>
            <iframe
                src= {currProject.titlePoster}
                className={`w-5/6 rounded-lg h-full`}>   
            </iframe>
        </section> */}
        
    </div>
  )
}

export default ProjectView