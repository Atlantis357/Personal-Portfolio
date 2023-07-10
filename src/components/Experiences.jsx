/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Experiences.jsx                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/09 21:17:43 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/10 00:59:45 by Abraham Alk      ###   ########.fr       */
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

      <section className="px-5 md:px-20 lg:px-32">
        {experiences.map((info, index) => (
          <div className={`${asideBackground} my-5 rounded-2xl border`}>
            <h1
              className={`text-2xl md:text-3xl font-medium bg-clip-text text-transparent font-Orbitron ${props.foreground.accent} px-10 pt-5`}
            >
              {info.title}
            </h1>
            <p
              className={`indent-10 mt-2 line-clamp-3 text-md font-semibold ${props.colorMode.text} px-10 pb-10 flex text-justify`}
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
