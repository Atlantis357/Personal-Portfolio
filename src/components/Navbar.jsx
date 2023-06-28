/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Navbar.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 10:34:58 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/27 17:47:10 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, {useState} from 'react'
import {navLinks} from '../constants'
import {tripleA, chem, close, menu} from '../assets';


function Navbar(props) {
    const [toggle, setToggle] = useState(false)

    function setBackground() {
        const currIdx = prev
    }

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>

        <img src={tripleA} alt='tripleA' className='w-[124px] h-[32px]'/>

        {/* Laptop Interface */}
        <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
            {navLinks.map((nav, index) => (
                <li 
                    key={nav.id} 
                    className={`font-poppins font-bold cursor-pointer text-[16px] hover:font-extrabold hover:text-[20px] 
                         text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-20'} transition-all`}>
                    <a href={'#${nav.id}'}>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>
        
        {/* Button to change background */}
        <div className='hidden sm:flex px-[46px]'>
            <img 
            src={chem} 
                alt='chem' 
                className='w-[32px] h-[32px] object-contain hover:opacity-0 transition-all hover:cursor-pointer duration-00'
                onClick={() => props.updateBackground()}
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

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                    {navLinks.map((nav, index) => (
                        <li 
                            key={nav.id} 
                            className={`font-poppins font-bold cursor-pointer text-[16px]
                             text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                            <a href={'#${nav.id}'}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>


    </nav>
  )
}

export default Navbar 