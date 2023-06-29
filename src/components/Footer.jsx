/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Footer.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 22:03:03 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/29 15:08:29 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { tripleA } from '../assets'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <section className='w-full py-3 overflow-hidden backdrop-blur-sm hover:backdrop-brightness-75 transition-all '>
      <div className='flex justify-center items-center'>
          <Link to={`hero`} spy={true} smooth={true} offset={-70} duration={500}>
              <img 
                  src={tripleA} 
                  alt='tripleA' 
                  className='w-[124px] h-[32px] flex cursor-pointer'
              />
          </Link>
      </div>
    </section>
  )
}

export default Footer