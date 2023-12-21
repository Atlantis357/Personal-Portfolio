/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Footer.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 22:03:03 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/12/20 23:04:21 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { tripleA } from '../assets'
import { Link } from 'react-scroll';
import { navLinks, socials } from '../constants';

const Footer = (props) => {
  return (
    <section className='w-screen py-4 mt-5 overflow-hidden backdrop-blur-sm hover:backdrop-brightness-75 transition-all'>
      <div className='flex justify-between items-center px-16'>
  


          <ul className='list-none flex justify-center items-center flex-10'>
            {socials.map((social, index) => (
              <li
                key={social.id}
                className={`${index === socials.length -1 ? 'mr-0' : 'mr-20'} `}
                >
                <a href={social.link}>
                  <img 
                    src={social.icon}
                    className='w-10 h-10 cursor-pointer hover:scale-110 transition-all'
                  />
                </a>

              </li>
            ))}
          </ul>
        

          {/* <img 
              src={tripleA} 
              alt='tripleA' 
              className='w-[124px] h-[32px] flex cursor-pointer  hover:scale-110 transition-all'
              onClick={() => props.updateForeground()}
          /> */}
          <div className='w-auto'>
          <h1
              className={`hidden md:flex text-md font-semibold ${props.colorMode.text} flex text-justify font-Lumanosimo`}
            >
              Built using React, Vite, and Tailwind CSS with a tiny bit of grit
          </h1>

          </div>


          <a href="https://www.buymeacoffee.com/Abrahamalk" className='sm:flex hidden '>
            <img 
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
              className='w-26 h-10 flex cursor-pointer  hover:scale-110 transition-all'
            />
          </a>



          
      </div>
    </section>
  )
}

export default Footer