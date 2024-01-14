/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Footer.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 22:03:03 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/01/13 21:37:52 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, {useRef, useState} from 'react'
import { tripleA } from '../assets'
import { Link } from 'react-scroll';
import { navLinks, socials, asideBackground } from '../constants';
import emailjs from "@emailjs/browser";

const Footer = (props) => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hsbqslm",
        "template_1btnsho",
        form.current,
        "g45SmaHayaBJGsyQ6"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          console.log("Error sending email");
        }
      );
  };

  return (
    // Add 
    <div className='w-screen py-4 mt-5 overflow-hidden backdrop-blur-sm transition-all'> 
      <section id='email' className='mx-auto items-center flex'>
        <div>
        <h1 className={`text-5xl md:text-7xl font-medium ${props.colorMode.text} font-Orbitron`}>
          Let's Talk
        </h1>
        <p class={`mt-3 ${props.colorMode.text} font-Lumanosimo text-md md:text-lg`}>
          {`Minding a project? Let me know here:`}
        </p>
        </div>
        {/* All form */}
        <form ref={form} onSubmit={sendEmail} className="mx-4">
          
          <div className='flex'>
          <div className='mr-4'>
            <div class="relative z-0">
              <input
                type="text"
                name="user_name"
                className={`peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm ${props.colorMode.text} focus:border-blue-600 focus:outline-none focus:ring-0`}
                placeholder=" "
              />
              <label className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:${props.colorMode.text}`}>
                Your name
              </label>
            </div>

            <div class="relative z-0">
              <input
              type="email"
              name="user_email"
              className={`peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm ${props.colorMode.text} focus:border-blue-600 focus:outline-none focus:ring-0`}
              placeholder=" "
              />
              <label className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:${props.colorMode.text}`}>
                Your email
              </label>
            </div>
          </div>
          <div>
            <div class="relative z-0">
              <textarea
              name="message"
              rows="3"
              className={`peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm ${props.colorMode.text} focus:border-blue-600 focus:outline-none focus:ring-0`}
              placeholder=" "
              />
              <label className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:${props.colorMode.text}`}>
                Your message
              </label>
            </div>
          </div>
          
          </div>
            <input
            type="submit"
            value="Send"
            className={`mt-2 text-md font-semibold ${props.colorMode.text} hover:cursor-pointer hover:font-bold w-full rounded-md ${asideBackground} px-10 py-2 active:border`}
            />
        </form>
      </section>
    </div>
  )
}

export default Footer


{/* <ul className='list-none flex justify-center items-center flex-10'>
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
          </ul> */}
        


          {/* <div className='w-auto'>
          <h1
              className={`hidden md:flex text-md font-semibold ${props.colorMode.text} flex text-justify font-Lumanosimo`}
            >
              Built using React, Vite, and Tailwind CSS with a tiny bit of grit
          </h1>

          </div> */}


          {/* <a href="https://www.buymeacoffee.com/Abrahamalk" className='sm:flex hidden '>
            <img 
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
              className='w-26 h-10 flex cursor-pointer  hover:scale-110 transition-all'
            />
          </a> */}
