/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ContactMe.jsx                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/22 12:54:49 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/23 14:05:33 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { asideBackground } from "../constants";

const ContactMe = (props) => {
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
    <div
      className={`w-screen h-auto mx-10 items-cente mb:20 md:mb-32 lg:mb-40`}
    >
      {/* Contact us */}
      <div className="w-full flex items-center justify-start">
        <div className="mx-auto w-full max-w-lg">
          <h1
            className={`text-4xl font-medium ${props.colorMode.text} font-Orbitron`}
          >
            Contact me
          </h1>
          <p class={`mt-3 ${props.colorMode.text} font-Lumanosimo`}>
            Email me at aaa26@illinois.edu or leave a message:
          </p>

          <form ref={form} onSubmit={sendEmail} className="mt-10">
            {/* <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            /> */}
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
                <label className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:${props.colorMode.text}`}>
                  Your email
                </label>
              </div>
              <div class="relative z-0 col-span-2">
                <textarea
                  name="message"
                  rows="5"
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
      </div>
    </div>
  );
};

export default ContactMe;
