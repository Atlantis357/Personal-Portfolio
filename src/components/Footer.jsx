/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Footer.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 22:03:03 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/02 20:56:40 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { tripleA } from '../assets'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <section className='w-screen py-4 mt-5 overflow-hidden backdrop-blur-sm hover:backdrop-brightness-75 transition-all'>
      <div className='flex justify-between items-center px-16'>

          <a href="https://www.buymeacoffee.com/Abrahamalk" className='flex'>
            <img 
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
              className='w-26 h-10 flex cursor-pointer  hover:scale-110 transition-all'
            />
          </a>











        
          <Link to={`hero`} spy={true} smooth={true} offset={-70} duration={500}>
              <img 
                  src={tripleA} 
                  alt='tripleA' 
                  className='w-[124px] h-[32px] flex cursor-pointer  hover:scale-110 transition-all'
              />
          </Link>
          
      </div>
    </section>
  )
}

export default Footer