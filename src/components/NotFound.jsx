/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   NotFound.jsx                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/07 20:44:38 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/07 21:39:40 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { foregroundGradients } from '../constants'

const NotFound = (props) => {
  return (
    <section className={`w-full overflow-hidden flex justify-center items-start py-20 md:py-28`}>
    <div id='aboutMe'>

        <section className='pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0 h-screen'>
        {foregroundGradients.map((gradient) => (
                 <h1 className={`font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${gradient.main} tracking-wider font-Orbitron py-10`}>
                 404 ERROR: PAGE NOT FOUND
               </h1>
            ))}        
        </section>
    </div>
  </section>
  )
}

export default NotFound