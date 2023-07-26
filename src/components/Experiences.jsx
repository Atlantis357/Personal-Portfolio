/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Experiences.jsx                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/09 21:17:43 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/26 18:28:29 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import { asideBackground, experiences } from "../constants";

const Experiences = (props) => {
  return (
    <div id="experiences" className=" min-h-screen py-20 md:py-28">
      <section className="pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0">
        <h1
          className={`font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${props.foreground.main} tracking-wider font-Orbitron`}
        >
          My Experiences
        </h1>
      </section>

      {/* CHECKOUT NIGHTWIND FOR DARKMODE */}

      <section
        className={`mx-2 px-3 md:mx-15 md:px-5 lg:mx-28 lg:px-7 border-l-8 ${props.colorMode.border}`}
      >
        {experiences.map((info, index) => (
          <div
            className={`${asideBackground} my-5 rounded-2xl border-l-4 border-b-2 ${props.colorMode.border}`}
          >
            <span class={`absolute flex items-center inset-x-24 justify-center w-10 h-10 rounded-full ring-4 ${props.colorMode.border} bg-red-500`}>
              <svg
                class={`w-5 h-5 ${props.colorMode.text}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>

            <h1
              className={`text-2xl md:text-3xl font-medium bg-clip-text text-transparent font-Orbitron ${props.foreground.accent} px-5 pt-5`}
            >
              {info.title}
            </h1>
            <p
              className={`indent-10 mt-5 line-clamp-3 text-md font-semibold ${props.colorMode.text} px-5 pb-10 flex text-justify`}
            >
              {info.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Experiences;
