/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:05:55 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/30 07:58:42 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


import { withOptions } from "tailwindcss/plugin";
import {cycling, engineer, fraternity, eatingTurkey, outdoors, instagram, linkedin} from "../assets";
import { abe } from "../assets";

export const backgroundGradients = [
  "bg-gradient-to-b from-cyan-600 via-red-700 to-blue-300",
  "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-lime-900 via-zinc-300 to-red-300",
  "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-white to-cyan-900",
  "bg-gradient-to-l from-violet-400 via-emerald-300 to-gray-600",
  "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-600 via-zinc-300 to-teal-500",
  "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-stone-100 via-purple-200 to-violet-800",
  "bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-400 via-cyan-100 to-rose-700",
  "bg-gradient-to-t from-zinc-300 via-sky-200 to-blue-400",
  "bg-gradient-to-tr from-blue-600 via-teal-100 to-indigo-800",
  "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-green-800 via-blue-700 to-amber-600",
]

export const primaryGradient = "bg-gradient-to-b from-gray-600 via-gray-800 to-black"

export const secondaryGradient = "text-white";

// Blocks the Nav bar
//export const asideBackground = "backdrop-blur-sm backdrop-brightness-75";
export const asideBackground = " bg-black bg-opacity-20 hover:bg-opacity-50 transition-all";


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
    EngName: "Abraham?",
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
    img: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Finding the Journey to Mordor",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },{
    img: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Finding the Journey to Mordor",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },{
    img: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Finding the Journey to Mordor",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },{
    img: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Finding the Journey to Mordor",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },
]

export const blogs = [
  {
    img: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Finding the Journey to Mordor",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },{
    img: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Finding the Journey to Mordor",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },{
    img: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Finding the Journey to Mordor",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },{
    img: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Finding the Journey to Mordor",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },
]