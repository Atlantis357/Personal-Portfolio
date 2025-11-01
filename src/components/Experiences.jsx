/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Experiences.jsx                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/09 21:17:43 by Abraham Alk       #+#    #+#             */
/*   Updated: 2025/11/01 13:36:04 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import { asideBackground, experiences } from "../constants";

const Experiences = (props) => {
  return (
    <div id="experience" className=" min-h-screen py-20 md:py-28">
      <section className="pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0">
        <h1
          className={`font-extrabold text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent ${props.foreground.title} tracking-widest font-Permanent-Marker`}
        >
          Professional Experience
        </h1>
      </section>

      {/* CHECKOUT NIGHTWIND FOR DARKMODE */}
      {/* md:border-l-8 ${props.colorMode.border} */}
      <section
        className={`mx-2 px-3 md:mx-16 md:px-5 lg:mx-28 lg:px-7 `}
      >
        {experiences.map((info) => (
          <div
            className={`my-10 border-b-2 border-opacity-50 ${props.colorMode.border} mx-auto max-w-6xl`}
          >
            {/* <img 
            src={info.svg}
            className = {`fill-white absolute items-center hidden md:flex md:inset-x-12 lg:inset-x-24 justify-center w-10 h-10 rounded-2xl ring-4 ${props.colorMode.border} ${props.foreground.accent}`}
            /> */}
            <div className="justify-between flex">
            <h1
              className={`text-l md:text-xl font-sans font-bold bg-clip-text italic text-transparent ${props.foreground.main} ${props.foreground.accent} px-5 pt-5`}
            >
              {info.company}
            </h1>
            <h1
              className={`text-l md:text-xl font-sans font-bold bg-clip-text text-transparent ${props.foreground.main} ${props.foreground.accent} px-5 pt-5`}
            >
              {info.date}
            </h1>
            </div>
            <h1
              className={`text-2xl md:text-3xl font-medium bg-clip-text text-transparent font-Oswald ${props.foreground.accent} px-5 pt-5 tracking-wide`}
            >
              {info.title}
            </h1>
            <p
              className={`indent-10 mt-5 line-clamp-3 text-md font-semibold ${props.colorMode.text} px-5 pb-10 flex text-justify font-Poppins`}
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