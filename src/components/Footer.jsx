/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Footer.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/28 22:03:03 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/01/15 20:26:11 by Abraham Alk      ###   ########.fr       */
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
    <div className='w-screen py-4 mt-5 overflow-hidden'>
    <section className='grid grid-cols-1 md:grid-cols-2 gap-5'> 
      <div className='mx-auto items-center'>
        <div>
          <h1 className={`text-5xl md:text-7xl font-medium ${props.colorMode.text} font-Orbitron tracking-wide`}>
            Let's
          </h1>
          <h1 className={`text-5xl md:text-7xl font-medium ${props.colorMode.text} font-Orbitron tracking-wide`}>
            Connect
          </h1>
          <p class={`mt-4 ${props.colorMode.text} font-Lumanosimo text-md md:text-lg tracking-wide`}>
            {`Minding a project? Let me know here:`}
          </p>
        </div>
      </div>
        {/* All form */}
      <div className='mx-auto items-center'> 
      <form ref={form} onSubmit={sendEmail}>
              <div class="grid gap-6 sm:grid-cols-2">
                <div class="relative z-0">
                  <input
                    type="text"
                    name="user_name"
                    className={`peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm ${props.colorMode.text} focus:border-blue-600 focus:outline-none focus:ring-0`}
                    placeholder=" "
                  />
                  <label
                    className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:${props.colorMode.text}`}
                  >
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
                  <label
                    className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:${props.colorMode.text}`}
                  >
                    Your email
                  </label>
                </div>
                <div class="relative z-0 col-span-2">
                  <textarea
                    name="message"
                    rows="3"
                    className={`peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm ${props.colorMode.text} focus:border-blue-600 focus:outline-none focus:ring-0`}
                    placeholder=" "
                  ></textarea>
                  <label
                    className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:${props.colorMode.text}`}
                  >
                    Your message
                  </label>
                </div>
              </div>

              <input
                type="submit"
                value="Send"
                className={`mt-5 text-md font-semibold ${props.colorMode.text} hover:cursor-pointer hover:font-bold w-full rounded-md ${asideBackground} px-10 py-2 active:border`}
              ></input>
            </form>        
      </div>
    </section>
    <section className='pt-2 mt-2 border-t xl:max-w-[1280px] xl:mx-auto mx-4 md:px-6 items-center flex justify-between backdrop-blur-sm transition-all'>
      <ul className='list-none flex justify-left items-center flex-10'>
        {socials.map((social, index) => (
          <li
            key={social.id}
            className={`text-center ${props.colorMode.text} text-md md:text-lg ${(index % 2) === 0 ? 'hover:-rotate-6' : 'hover:rotate-6'} transition-all duration-200`}
            >
            <a 
              href={social.link}
              className='cursor-pointer mx-4 font-Poppins'>
              {social.name}
            </a>

          </li>
        ))}
      </ul>
      <a className={`hidden sm:flex font-Poppins text-center ${props.colorMode.text} text-md md:text-lg cursor-pointer px-4  hover:scale-y-125 transition-all duration-200`}>
        Buy me a coffee
      </a>
    </section>
    </div>
  )
}

export default Footer