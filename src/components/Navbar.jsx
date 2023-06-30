/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Navbar.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 10:34:58 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/30 15:03:16 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, {useState} from 'react'
import {navLinks} from '../constants'
import {tripleA, chem, close, menu, abe} from '../assets';
import { Link } from 'react-scroll';


function Navbar(props) {
    const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full overflow-hidden fixed backdrop-blur-sm hover:backdrop-brightness-75 transition-all'>
    <div className='sm:mx-16 mpx-6 flex justify-center items-center'>
    <div className='xl:max-w-[1280px] w-full'>


    <nav className='w-full flex py-4 justify-between items-center navbar'>


        <Link to={`hero`} spy={true} smooth={true} offset={-70} duration={500}>
            <img 
                src={tripleA} 
                alt='tripleA' 
                className='w-[124px] h-[32px] hover:cursor-pointer flex-none'
                />
        </Link>

        {/* Laptop Interface */}
        <ul className='list-none sm:flex hidden justify-center items-center flex-10'>
            {navLinks.map((nav, index) => (
                <li 
                    key={nav.id} 
                    className={`font-poppins font-bold cursor-pointer text-[16px] hover:font-extrabold hover:text-[20px]
                         ${props.colorMode.text} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-20'} transition-all`}>
                    <Link to={`${nav.id}`} spy={true} smooth={true} offset={-70} duration={500}>
                        {nav.title}
                    </Link>
                </li>
            ))}
        </ul>
        
        {/* Button to change background */}
        <div className='hidden sm:flex px-[46px]'>
            <img 
            src={chem} 
                alt='chem' 
                className='w-[32px] h-[32px] object-contain hover:opacity-0 transition-all hover:cursor-pointer duration-00'
                onClick={() => props.updateForeground()}
            />
        </div>
        {/* Button to change colorMode */}
        <div className='hidden sm:flex px-[46px]'>
            <img 
            src={abe} 
                alt='abe' 
                className='w-[32px] h-[32px] object-contain hover:opacity-0 transition-all hover:cursor-pointer duration-00'
                onClick={() => props.updateColorMode()}
            />
        </div>

        {/* Mobile Interface */}
        <div className='sm:hidden flex flex-1 justify-end items-center mr-5'>
            <img 
                src={toggle ? close : menu} 
                alt='menu' 
                className='w-[28px] h-[28px] object-contain' 
                onClick={() => setToggle((prev) => !prev)} 
            />

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 ${props.colorMode.title} top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                    {navLinks.map((nav, index) => (
                        <li 
                            key={nav.id} 
                            className={`font-poppins font-bold cursor-pointer text-[16px]
                            ${props.colorMode.text} ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} hover:font-extrabold hover:text-[18px] transition-all`}>
                            <Link to={`${nav.id}`} spy={true} smooth={true} offset={-70} duration={500}>
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>


    </nav>
    </div>
    </div>
    </nav>
  )
}

export default Navbar 