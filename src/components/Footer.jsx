/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Footer.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 22:03:03 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/07 21:51:37 by Abraham Alk      ###   ########.fr       */
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

          <a href="https://www.buymeacoffee.com/Abrahamalk" className='flex'>
            <img 
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
              className='w-26 h-10 flex cursor-pointer  hover:scale-110 transition-all'
            />
          </a>

          <ul className='list-none sm:flex hidden justify-center items-center flex-10'>
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
        

          <img 
              src={tripleA} 
              alt='tripleA' 
              className='w-[124px] h-[32px] flex cursor-pointer  hover:scale-110 transition-all'
              onClick={() => props.updateForeground()}
          />

          
      </div>
    </section>
  )
}

export default Footer