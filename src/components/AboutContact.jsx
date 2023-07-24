/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   AboutContact.jsx                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/23 15:36:07 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/23 22:38:37 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useRef, useState } from "react";
import { aboutMe, asideBackground } from "../constants";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import emailjs from "@emailjs/browser";

const AboutContact = (props) => {

  const [aboutIdx, setAboutIdx] = useState(0);

  var about = aboutMe[aboutIdx];

  
  const slideLeft = (about) => {
    setAboutIdx((prev) => (prev + aboutMe.length - 1) % aboutMe.length);
    aboutAbe = aboutMe[abeIdx];

  };

  const slideRight = (about) => {
    setAboutIdx((prev) => (prev + 1) % aboutMe.length);
    aboutAbe = aboutMe[abeIdx];
  };




  // const slideLeft = (aboutAbe) => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft - 300;
  //   var textSlider = document.getElementById("textSlider");
  //   textSlider.scrollLeft = textSlider.scrollLeft + 300;

  // };

  // const slideRight = (aboutAbe) => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft + 300;
  //   var textSlider = document.getElementById("textSlider");
  //   textSlider.scrollLeft = textSlider.scrollLeft - 300;

  // };

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
    <div className={`w-screen overflow-hidden items-center lg:flex mb-20`}>
      {/* About Me */}
      <section
        id="aboutMe"
        className="w-screen lg:w-1/2 text-center"
      >
        <div className="h-auto">
            <h1
              className={`text-4xl md:text-5xl font-medium ${props.colorMode.text} font-Orbitron mb-10 mx-5`}
            >
              {about.intro}
              <strong className={`bg-clip-text text-transparent ${props.foreground.title} font-Orbitron`}>
                {about.title}
              </strong>
            </h1>
        </div>

          <section className={`relative flex justify-evenly items-center mb-20 `}>
            <MdChevronLeft
              size="50"
              className="opacity-60 m-5 md:m-20 lg:m-10 hover:cursor-pointer hover:opacity-100 flex-shrink-0"
              onClick={slideLeft}
            />
            <div>
              <img
                src={about.img}
                alt="Engineer_Photo"
                className="transition-all hover:grayscale-[100%] rounded-2xl md:w-56 w-48 inline-block ease-in-out snap-center"
              />
            </div>

            <MdChevronRight
              size="50"
              className="opacity-60 m-5 md:m-20 lg:m-10 hover:cursor-pointer hover:opacity-100 flex-shrink-0"
              onClick={slideRight}
            />
          </section>
      </section>


      {/* Contact us */}
      <section
        className={`w-screen lg:w-1/2 h-auto px-10 items-center`}
      >
        <div className="w-full flex items-center justify-start">
          <div className="mx-auto w-full max-w-lg">
            <h1
              className={`text-4xl md:text-5xl font-medium ${props.colorMode.text} font-Orbitron`}
            >
              Contact me
            </h1>
            <p class={`mt-3 ${props.colorMode.text} font-Lumanosimo`}>
              Email me at aaa26@illinois.edu or leave a message:
            </p>

            <form ref={form} onSubmit={sendEmail} className="mt-10">
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
      </section>
      
    </div>
  );
};

export default AboutContact;
