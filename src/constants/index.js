/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:05:55 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/02 21:04:02 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import {cycling, engineer, fraternity, eatingTurkey, outdoors, instagram, linkedin, seriousAbe, mosaic, flights, tripleA, family} from "../assets";

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


// export const backgroundGradients = [
//   "bg-gradient-to-b from-pink-500 via-fuchsia-100 to-zinc-200",
//   "bg-gradient-to-b from-cyan-600 via-red-700 to-blue-300",
//   "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-lime-900 via-zinc-300 to-red-300",
//   "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-white to-cyan-900",
//   "bg-gradient-to-l from-violet-400 via-emerald-300 to-gray-600",
//   "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-600 via-zinc-300 to-teal-500",
//   "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-stone-100 via-purple-200 to-violet-800",
//   "bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-400 via-cyan-100 to-rose-700",
//   "bg-gradient-to-t from-zinc-300 via-sky-200 to-blue-400",
//   "bg-gradient-to-tr from-blue-600 via-teal-100 to-indigo-800",
//   "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-green-800 via-blue-700 to-amber-600",
// ]


export const asideBackground = "bg-black bg-opacity-20 hover:bg-opacity-30 transition-all";


export const navLinks = [
  {
    id: "aboutMe",
    title: "About Me",
  }, {
    id: "projects",
    title: "Projects",
  },
  //  {
  //   id: "blog",
  //   title: "Blog",
  // }, 
  {
    id: "resume",
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
    icon: "https://www.flaticon.com/free-icons/github",
    link: "https://www.github.com/Atlantis357",
  }, {
    id: "linkedin",
    icon: "https://www.flaticon.com/free-icons/linkedin",
    link: "https://www.linkedin.com/in/abrahamalkhatib",
  }, {
    id: "stackOverflow",
    icon: "https://www.flaticon.com/free-icons/stack-overflow",
    link: "https://stackexchange.com/users/27590469/abraham-alkhatib",
  }, {
    id: "instagram",
    icon: "https://www.flaticon.com/free-icons/instagram",
    link: "https://www.instagram.com/abrahamalkhatib/?hl=en",
  }
];

export const aboutMe = [
  {
    title: "Bioengineering Junior @Illinois",
    img: engineer,
    description: "My long-term goal in medicine is to develop computational, non-intrusive tools that doctors can readily use to improve the accuracy of their diagnostics."
  }, {
    title: "Cyclist",
    img: cycling,
    description: "The evolution of a bittersweet teenage Tour-de-France dream."
  }, {
    title: "Man-of-the-woods",
    img: outdoors,
    description: "The Outdoors Adventure Club at UIUC has the best people and the best trips. It's called trauma-bonding."
  },{
    title: "Brother",
    img: family,
    description: "Oldest of four, 7/12."
  },
]


export const projects = [
  { 
    img: mosaic,
    title: "Photomosaic Board",
    link: "https://github.com/Atlantis357/PhotoMosaicCreator.git",
    description: "Implemented an algorithm that uses k-D Trees to combine images from an album of photographs to create a PNG mosaic that resembles any image.",
  },{
    img: tripleA,
    title: "Abe's Page",
    link: "#",
    description: "Created an interactive personal-portfolio using react, tailwind-CSS, and the Spotify API to showcase my current favorite songs and albums.",
  },{
    img: flights,
    title: "Sustainable Flight Planner",
    link: "https://github.com/Atlantis357/OpenFlightPaths.git",
    description: "Worked with a project team to design a flight planning algorithm that uses data from over 14,000 airports and 67,000 routes to determine the shortest route between any two airports.",
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