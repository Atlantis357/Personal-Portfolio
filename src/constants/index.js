/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:05:55 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/01 18:10:44 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


import { withOptions } from "tailwindcss/plugin";
import {cycling, engineer, fraternity, eatingTurkey, outdoors, instagram, linkedin, seriousAbe} from "../assets";

// export const backgroundGradients = [
//   "bg-gradient-to-b from-gray-600 via-gray-800 to-black",
//   "bg-gradient-to-b from-gray-600 via-gray-400 via-gray-200",
// ]

export const foregroundGradients = [
  "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
  "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
  "bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400",
  "bg-gradient-to-r from-lime-600 via-yellow-300 to-red-600",
  "bg-gradient-to-r from-green-200 via-green-400 to-green-500",
  "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500",
]


// export const primaryGradients = [
//   "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-200 via-purple-600 to-rose-600",
//   "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-200 via-purple-600 to-rose-600",
// ]

// export const secondaryGradients = [
//   "text-white",
//   "text-black"
// ]

export const colorModes = [
  {
    id: "darkMode",
    background: "bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800",
    title: "bg-gradient-to-r from-gray-100 to-gray-300",
    text: "text-white",
  },{
    id: "lightMode",
    background: "bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400",
    title: "bg-gradient-to-b from-black via-gray-800 to-white",
    text: "text-black",
  }
]

// "bg-gradient-to-b from-white via-gray-200 to-gray-400"



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


// export const primaryGradient = "bg-gradient-to-b from-gray-600 via-gray-800 to-black"

// export const secondaryGradient = "text-white";

// Blocks the Nav bar
//export const asideBackground = "backdrop-blur-sm backdrop-brightness-75";
export const asideBackground = "bg-black bg-opacity-20 hover:bg-opacity-30 transition-all";


export const navLinks = [
  {
    id: "aboutMe",
    title: "About Me",
  }, {
    id: "projects",
    title: "Projects",
  }, {
    id: "blog",
    title: "Blog",
  }, {
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

export const socialMedia = [
  {
    id: "insta",
    icon: instagram,
    link: "https://www.instagram.com/",
  }, {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const aboutMe = [
  {
    title: "Devoted Engineer?",
    img: engineer,
    description: "My long-term goal in medicine is to develop computational, non-intrusive tools that doctors can readily use to improve the accuracy of their diagnostics."
  }, {
    title: "Competitive Cyclist?",
    img: cycling,
    description: "The evolution of a bittersweet teenage Tour-de-France dream."
  }, {
    title: "Frat Bro?",
    img: fraternity,
    description: "I am also a brother of the Alpha Delta Phi Fraternity on campus. Brotherhood."
  }, {
    title: "Man-of-the-woods?",
    img: outdoors,
    description: "The Outdoors Adventure Club at UIUC has the best people and the best trips. It's called trauma-bonding."
  }, {
    title: "TurkeyLeg Enthusiast?",
    img: eatingTurkey,
    description: "I have had countless turkey legs in my brief time on Earth, but I assure you that Universal Studios has the best legs in the world."
  }
]


export const projects = [
  { 
    img: engineer,
    title: "Photomosaic Board",
    description: "Implemented an algorithm that uses k-D Trees to combine images from an album of photographs to create a PNG mosaic that resembles any image.",
  },{
    img: eatingTurkey,
    title: "Eco-Friendly Flight Planner",
    description: "Worked with a project team to design a flight planning algorithm that uses data from over 14,000 airports and 67,000 routes to determine the shortest route between any two airports.",
  },{
    img: seriousAbe,
    title: "Salam",
    description: "Created an employee management app in iOS using Swift Data and Cloud kit that unified timesheets across four different departments to improve transparency and communication.",
  },{
    img: cycling,
    title: "Abe's Page",
    description: "Created an interactive personal-portfolio using react, tailwind-CSS, and the Spotify API to showcase my current favorite songs and albums.",
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
  },{
    img: engineer,
    title: "Finding the Journey to Mordor",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },
]

export const titles = ["ABOUT ME", "PROJECTS", "BLOGS", "RESUME"]