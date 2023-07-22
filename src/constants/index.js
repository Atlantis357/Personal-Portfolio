/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:05:55 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/22 12:53:36 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import {cycling, engineer, fraternity, eatingTurkey, outdoors, instagram, linkedin, seriousAbe, mosaic, flights, tripleA, family, github, stackOverflow, helmetPoster, helmetTesting, ppgInspect, ppgFilterPoster, ecgFlowchart, ecgAirV3} from "../assets";



export const foregroundGradients = [
  {
    id: "redDark",
    main: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    accent: "bg-red-500",
  },


  // {
  //   id: "blue",
  //   main: "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
  //   accent: "bg-blue-500",
  // },{
  //   id: "rose",
  //   main: "bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400",
  //   accent: "bg-rose-500",
  // },{
  //   id: "yellow",
  //   main: "bg-gradient-to-r from-lime-600 via-yellow-300 to-red-600",
  //   accent: "bg-yellow-300",
  // },{
  //   id: "green",
  //   main: "bg-gradient-to-r from-green-200 via-green-400 to-green-500",
  //   accent: "bg-green-400",
  // },{
  //   id: "fuchisa",
  //   main: "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500",
  //   accent: "bg-fuchsia-500",
  // },
]



export const colorModes = [
  {
    id: "darkMode",
    // background: "bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800",
    background: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-600 via-slate-800 to-sky-700",
    text: "text-white",
  },
  {
    id: "lightMode",
    // background: "bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400",
    background: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-600 via-slate-200 to-sky-700",
    text: "text-black",
  },
]

export const asideBackground = "bg-black bg-opacity-10 hover:bg-opacity-20 transition-all";


export const navLinks = [
  // {
  //   id: "/",
  //   title: "Home",
  // },
  {
    id: "/experiences",
    title: "Experiences",
  },{
    id: "/projects",
    title: "Projects",
  },
   {
    id: "/music",
    title: "Music",
  }, 
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
  }, 
  // {
  //   id: "stackOverflow",
  //   icon: stackOverflow,
  //   link: "https://stackexchange.com/users/27590469/abraham-alkhatib",
  // }, {
  //   id: "instagram",
  //   icon: instagram,
  //   link: "https://www.instagram.com/abrahamalkhatib/?hl=en",
  // }
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
    description: "I find reconnecting with nature my favorite pass time; nothing beats a quick getaway amongst the trees. Though I've been an outdoorsy person all my life, The Outdoors Adventure Club at UIUC took my interest to the next level with multi-day backpacking trips every break. OAC has the best people and the best trips. It's called trauma bonding."
  },{
    title: "Brother",
    img: family,
    description: "With a big family, comes big responsibilities! I grew up as the oldest of four, but I have eight other half-siblings! I love them with all my heart."
  },{
    title: "Turkey Leg Enthusiast",
    img: eatingTurkey,
    description: "I love turkey lol."
  },{
    title: "Certified Glue Guy",
    img: fraternity,
    description: "I love turkey lol."
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
  },{
    id: "ecgAirV3",
    img: ecgFlowchart,
    title: "ECG-Air V3",
    link: "/projects/ecgAirV3",
    description: "Created an ECG-based risk prediction pipeline using the TensorFlow-Lite library to improve the accessibility and interoperability of ECG-Air to power a suite of AI-based prediction models.",
    titlePoster: ecgAirV3,
    linkType: "pdf",
  },
]

export const blogs = [
  {
    img: fraternity,
    title: "Finding the Journey to Mordor",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },
]

export const experiences = [
  {
    title: "Software Enigneering Intern - Atrium Health Wake Forest Baptist",
    date: "05/2023 – Present",
    skills: "Swift, TenorFlow/TFLite, iOS Development",
    description: "This summer I worked as a bioinformatics intern for Wake Forest Baptist Health. Working with AI models, I was responsible for embedding a suite of AI algorithoms to our newly developed clinical application. I created data-transmission pipeline that was lightweight yet HIPAA complaint to protect user's data. I found meaning as I learned to apply classroom knowledge to help chilren at St.Jude's research hospital.",
  },{
    title: "Techniacl Director - Biomedical Engineering Society",
    date: "05/2023 – Present",
    skills: "Team Leadership, Engineering team managemnt",
    description: "Before the end of my sophmore year, I was elected to be Technical Director position for BMES at Illinois. Aside from managing all technical projects undertaken by the club, I also initaited a permanent project-team to design a real time overdose protection system.  My goal is to prioritize exposure and bioengineering skill development among all students, particularly underclassmen.",
  },{
    title: "Project Team Lead - Biomedical Engineering Society ",
    date: "08/2022 – 04/2023",
    skills: "CAD, Team Leadership, Engineering team managemnt",
    description: "To demonstrate the recent advancements in helmet safty, I lead a team of underclassmen engineers to design a rotaionally isolated helmet liner that enhance protection on angled impacts. As team lead, I found myself coordinating between multiple groups such as the University, BMES, and my project subteams to ensure budget compliance and demo saftey issues. The most challenging part of the project was desiging the 3D printed dummy head with embedded 3-axis gyroscopes and acclerometer. I also took a wood-working class to construct our test-rig. Our liner design proved to be as succesful as the industry standard, and we recieved 2nd for Outstanding Freshman Exhibit among 200+ competitors.",
  },{
    title: "Bicycle Mechanic - Bike Lab Campustown",
    date: "08/2022 – 11/2022",
    skills: "Bicycle Maintainance, Communication",
    description: "After moving to college, I found my academic outlet with the cycling team. As a bike mechanic on campus, I oversaw and maintained a fleet of bicycles through preventative maintaincee measures. I diagnosed problems, proposed, and implemented solutions tailored to customer’s budget and need. I also rebuilt bicycles and components such as shifters and wheels to maximze performance on high-end racing models.",
  },{
    title: "Operations Intern - Pueblo Supermarkets",
    date: "08/2022 – 11/2022",
    skills: "Bicycle Maintainance, Communication",
    description: "As the operations intern, my primary role is to intermediate between store management and contractors to ensure smooth integration of newly acquired machinery. I succesfully assisted and oversaw the installation of multiple refrigeration units and shelving that we recently aquired from competitors. Shadowing store managers and maintaince crews, I learned invaluable communication skills that helped me manage my own team later on in life.",
  },
]

export const memoryPlaylists = [
  {
    src: "https://open.spotify.com/embed/playlist/574TkzNbgCybmVCTKhrVIG?utm_source=generator",
  },{
    src: "https://open.spotify.com/embed/playlist/2MrSESecZD3u0ItuUiAQNx?utm_source=generator",
  },{
    src: "https://open.spotify.com/embed/playlist/1rNOBNzMMPHHh0AMizCxSx?utm_source=generator",
  },{
    src: "https://open.spotify.com/embed/playlist/0bVJtCfdIxW4kSFCbsyfZ7?utm_source=generator",
  },
]

export const spotifySongs = [
  {
    src: "https://open.spotify.com/embed/track/2fuYa3Lx06QQJAm0MjztKr?utm_source=generator",
  },{
    src: "https://open.spotify.com/embed/track/5vtRk4rYxiy4cj95cmJ5Ma?utm_source=generator",
  },{
    src: "https://open.spotify.com/embed/track/0y5akbuW5mCnnUe71xATpe?utm_source=generator",
  },{
    src: "https://open.spotify.com/embed/track/31RIphTQ9y4zStkH5xRWgW?utm_source=generator"
  },
]

export const spotifyPlaylists = [
  {
    src: "https://open.spotify.com/embed/playlist/4p6TstN4NgyzZtwRIUDBbu?utm_source=generator",
  },{
    src: "https://open.spotify.com/embed/playlist/4SN2zOqyq2BnKJCt5GWd1D?utm_source=generator",
  },
]

export const onRepeat = "https://open.spotify.com/embed/track/0smzrlYiBiecxfG8p5QDcQ?utm_source=generator"

