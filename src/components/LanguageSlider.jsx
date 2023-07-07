/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   languageSlider.jsx                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/07 10:17:00 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/07 15:07:27 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, {useState} from 'react'
import { titles } from '../constants'

const LanguageSlider = (props) => {

  const [isActive, setIsActive] = useState(false)

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 50
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 50
  }

  // SLIDE FUNCTIONS ARE NOT WORKING 
  return (
    <section className='pb-8 md:pb-16 text-center w-auto pt-8 md:pt-0 relative items-center overflow-hidden'>

      <div id='slider' className={`flex w-screen animate-scroll`}>

        <h1 
          className={`w-[500px] px-[25px] font-extrabold text-4xl md:text-6xl bg-clip-text text-transparent ${props.foreground.main} tracking-wider font-Orbitron`}>
          {titles[0].eng}
        </h1>
        <h1 
          className={`w-[500px] px-[25px] font-extrabold text-4xl md:text-6xl bg-clip-text text-transparent ${props.foreground.main} tracking-wider font-Orbitron flex`}>
          {titles[0].chi}
        </h1>
        
        <h1 
          className={`w-[500px] px-[25px] font-extrabold text-4xl md:text-6xl bg-clip-text text-transparent ${props.foreground.main} tracking-wider font-Orbitron`}>
          {titles[0].eng}
        </h1>
        <h1 
          className={`w-[500px] px-[25px] font-extrabold text-4xl md:text-6xl bg-clip-text text-transparent ${props.foreground.main} tracking-wider font-Orbitron flex`}>
          {titles[0].chi}
        </h1>
      


      </div>
      
    </section>
  )
}

export default LanguageSlider