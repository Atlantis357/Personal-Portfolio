/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:05:55 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/09 21:09:15 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import {cycling, engineer, fraternity, eatingTurkey, outdoors, instagram, linkedin, seriousAbe, mosaic, flights, tripleA, family, github, stackOverflow, helmetPoster, helmetTesting, ppgInspect, ppgFilterPoster} from "../assets";

export const foregroundGradients = [
  {
    id: "red",
    main: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    accent: "bg-red-500",
  },{
    id: "blue",
    main: "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
    accent: "bg-blue-500",
  },{
    id: "rose",
    main: "bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400",
    accent: "bg-rose-500",
  },{
    id: "yellow",
    main: "bg-gradient-to-r from-lime-600 via-yellow-300 to-red-600",
    accent: "bg-yellow-300",
  },{
    id: "green",
    main: "bg-gradient-to-r from-green-200 via-green-400 to-green-500",
    accent: "bg-green-400",
  },{
    id: "fuchisa",
    main: "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500",
    accent: "bg-fuchsia-500",
  },
]

export const colorModes = [
  {
    id: "darkMode",
    background: "bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800",
    text: "text-white",
  },{
    id: "lightMode",
    background: "bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400",
    text: "text-black",
  }
]

export const asideBackground = "bg-black bg-opacity-20 hover:bg-opacity-30 transition-all";


export const navLinks = [
  {
    id: "/",
    title: "About Me",
  },{
    id: "/experiences",
    title: "Experiences",
  },{
    id: "/projects",
    title: "Projects",
  },
  //  {
  //   id: "/blog",
  //   title: "Blog",
  // }, 
  {
    id: "/resume",
    title: "Resume",
  },
];

export const nameIntro = {
    EngIntro: "Who is ",
    EngName: "Abraham",
    EngOutro: "?",
    ChiOutro: "是 谁 ?",
    ChiName: "艾 笔 ",
}

export const socials = [
  {
    id: "github",
    icon: github,
    link: "https://www.github.com/Atlantis357",
  }, {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/abrahamalkhatib",
  }, {
    id: "stackOverflow",
    icon: stackOverflow,
    link: "https://stackexchange.com/users/27590469/abraham-alkhatib",
  }, {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/abrahamalkhatib/?hl=en",
  }
];

export const aboutMe = [
  {
    title: "Bioengineering Junior @Illinois",
    img: engineer,
    description: "My mother is diabetic, and it was painful to watch her maneuver her life around it, especially when I was a child. I remember watching my mother as she pricked herself on the finger four times a day before injecting herself with insulin. This tedious process was a normality in her everyday life until Abbott’s Freestyle Libre system became available in China. Abbott’s system allowed my mother to wear a wireless patch on her arm and access the blood-sugar readings from her smartphone. Not only did the system revolutionize my mother’s everyday life, but it also ignited my interest in bioengineering."
  }, {
    title: "Bicycle Nerd (Cyclist)",
    img: cycling,
    description: "Noticible results: 2017 TREK-China Best Young Rider (Overall), 1st-2018 TREK Beijing-Shanghai Criterium, 2nd-2018 Heros U25 Shanghai Classics, Top 10 Finisher- Tour de France Skoda Shanghai Criterium"
  }, {
    title: "Man-of-the-woods",
    img: outdoors,
    description: "I find reconnecting with Nature to be my favourite passtime, nothing beats a quick getaway amongst the trees. Though I've been an outdoorsy person all my life, The Outdoors Adventure Club at UIUC took my intrest to the next level with multi-day backpacking trips every break. OAC has the best people and the best trips. It's called trauma-bonding."
  },{
    title: "Brother",
    img: family,
    description: "With a big family, comes big responsibilities! I grew up as the oldest of four, but I have eight other half-siblings! I love them with all my heart."
  },
]


export const projects = [
  { 
    id: "mosiac",
    img: mosaic,
    title: "Photomosaic Board",
    link: "https://github.com/Atlantis357/PhotoMosaicCreator.git",
    description: "Implemented an algorithm that uses k-D Trees to combine images from an album of photographs to create a PNG mosaic that resembles any image.",
    titlePoster: "",
    linkType: "external",
  },{
    id: "helmetliner",
    img: helmetTesting,
    title: "Rotationally-Isolated Helmet Liners",
    link: "/projects/helmetliner",
    description: "Incepted a rotational isolation system for bicycle helmets using CAD that offers enhanced protection during angled impacts.",
    titlePoster: helmetPoster,
    linkType: "internal",
  },{
    id: "flightPlanner",
    img: flights,
    title: "Sustainable Flight Planner",
    link: "https://github.com/Atlantis357/OpenFlightPaths.git",
    description: "Designed a flight planning algorithm that uses over 14,000 airports and 67,000 routes to determine the shortest route between any airport.",
    titlePoster: "",
    linkType: "external",
  },{
    id: "ppgfilters",
    img: ppgInspect,
    title: "PPG Filters for HR-Variability",
    link: "/projects/ppgfilters",
    description: "Constructed a PPG signal-filtering pipeline using wavelet transforms and FFT to analyze HR variability during exercise.",
    titlePoster: ppgFilterPoster,
    linkType: "internal",
  },{
    id: "abesPage",
    img: tripleA,
    title: "Abe's Page",
    link: "/",
    description: "Created an interactive personal-portfolio using react, tailwind-CSS, and the Vite from scrach to showcase my intrests and thoughts.",
    titlePoster: "",
    linkType: "internal",
  },
]

export const blogs = [
  {
    img: fraternity,
    title: "Finding the Journey to Mordor",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },{
    img: fraternity,
    title: "Finding the Journey to Mordor",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },{
    img: engineer,
    title: "Finding the Journey to Mordor",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },
]

export const titles = ["ABOUT ME", "PROJECTS", "BLOGS", "RESUME"]