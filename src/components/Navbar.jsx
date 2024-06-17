/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Navbar.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 10:34:58 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/06/16 20:32:36 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, {useState} from 'react'
import {navLinks} from '../constants'
import {tripleA, chem, close, menu, abe, colorMode} from '../assets';
import { Link } from 'react-router-dom';
import { Link as scrollLink} from 'react-scroll';


function Navbar(props) {
    const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full overflow-hidden fixed backdrop-blur-sm z-50 '>
    <div className='mx-4 flex justify-center items-center'>
    <div className='xl:max-w-[1280px] w-full'>

    <nav className='w-full flex py-4 justify-between items-center navbar flex-shrink-0 border-b'>

        <div className={`flex`}>

        <Link to={`/`}>
        <img 
            src={tripleA} 
            alt='tripleA' 
            className='w-[156px] h-[32px] hover:cursor-pointer flex-none hover:scale-y-125 transition-all duration-200'
            // onClick={() => props.updateForeground()}
            />
        </Link>
        <p className={`md:flex hidden mx-4 pt-1 font-Poppins font-medium text-[16px]  ${props.colorMode.text}`}>BIOENGINEER, CONSULTANT</p>
        </div>

        {/* Laptop Interface */}
        <ul className='list-none md:flex hidden justify-center items-center flex-10'>
            {navLinks.map((nav, index) => (
                <li 
                    key={nav.id} 
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${(index % 2) === 0 ? 'hover:-rotate-6' : 'hover:rotate-6'}  p-1 mx-2 
                         ${props.colorMode.text} transition-all duration-200`}>
                    <Link to={`${nav.id}`}>
                        {nav.title}
                    </Link>
                </li>
            ))}
        </ul>
        
            {/* Button to change colormode */}
        {/* <div className='hidden sm:flex pl-[34px]'>
            <img 
            src={colorMode} 
                alt='colormode' 
                className='w-[32px] h-[32px] object-contain hover:scale-125 transition-all hover:cursor-pointer duration-00'
                onClick={() => {props.updateColorMode(), props.updateForeground()}}
            />
        </div> */}

        {/* Mobile Interface */}
        <div className='md:hidden flex flex-1 justify-end items-center mr-5 z-50'>
            <img 
                src={toggle ? close : menu} 
                alt='menu' 
                className='w-[28px] h-[28px] object-contain' 
                onClick={() => setToggle((prev) => !prev)} 
            />

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 ${props.colorMode.title} bg-gray-600 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                    {navLinks.map((nav, index) => (
                        <li 
                            key={nav.id} 
                            className={`font-poppins font-bold cursor-pointer text-[16px]
                            ${props.colorMode.text} my-1 hover:border-b border-white `}
                            onClick={() => setToggle((prev) => !prev)} >
                            <Link to={`${nav.id}`}>
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