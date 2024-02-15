/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   HoverImageLink.jsx                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/20 15:19:11 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/01/20 15:20:51 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const HoverImageLink = ({ heading, imgSrc, subheading, href, foreground, colormode}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      // href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -10 },
          }}
          transition={{
            type: "tween",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className={`relative z-10 block text-3xl font-bold text-neutral-50 group-hover:text-amber-400 transition-colors duration-500 md:text-5xl font-Oswald`}
        >
          {heading}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50 font-Poppins group-hover:w-2/3">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-10%",
          translateY: "-50%",
        }}
        variants={{
          initial: { opacity: 0, rotate: "-0deg", x: "20%", y: "30%"},
          whileHover: { opacity: 1, rotate: "6deg", x: "0%", y: "0%" },
        }}
        transition={{ type: "tween"}}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "tween" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};

export default HoverImageLink