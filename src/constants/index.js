/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:05:55 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/16 18:36:46 by Abraham Alk      ###   ########.fr       */
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
  },
  // {
  //   id: "1",
  //   background: "bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-neutral-600 via-teal-400 to-lime-700",
  //   text: "text-white",
  // },{
  //   id: "2",
  //   background: "bg-gradient-to-tr from-fuchsia-500 via-sky-100 to-sky-400",
  //   text: "text-black",
  // },{
  //   id: "3",
  //   background: "bg-gradient-to-t from-pink-700 via-teal-200 to-blue-100",
  //   text: "text-black",
  // },

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
    description: "I find reconnecting with nature my favorite pass time; nothing beats a quick getaway amongst the trees. Though I've been an outdoorsy person all my life, The Outdoors Adventure Club at UIUC took my interest to the next level with multi-day backpacking trips every break. OAC has the best people and the best trips. It's called trauma bonding."
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

export const experiences = [
  {
    title: "Software Enigneering Intern - Atrium Health Wake Forest Baptist",
    date: "05/2023 – Present",
    skills: "Swift, TenorFlow/TFLite, iOS Development",
    description: "With my career crosshairs lined on the intersection of engineering and medicine, I accpeted a position as a bioinformatics intern for AHWFB, the second largest medical provider in the United States. As a software developer, I was responsible for creating a data-transmission pipeline between smartwatches and our mobil applicaiton. I was also charged of embedding various multiple AI algorithms to the application via TensorFlowLite. Working in and around the hospital was very rewarding, and I was shocked by the US healthcare system's incohesive informatics structure.",
  },{
    title: "Techniacl Director - Biomedical Engineering Society",
    date: "05/2023 – Present",
    skills: "Team Leadership, Engineering team managemnt",
    description: "After my project-team's succesful exhibition at Engineering Open House, I was elected to the Technical Director position of BMES. Aside from managing all technical projects undertaken by BMES, I prioritized exposure and bioengineering skill development among 100+ members, particularly underclassmen. I also initaited a permanent project-team to design a real time overdose protection system that can detect opiod overdose and administer naloxone to save the user's life. Incoporating students from multiple Engineering departments, this is the largest project in Illinois BMES history.",
  },{
    title: "Project Team Lead - Biomedical Engineering Society ",
    date: "08/2022 – 04/2023",
    skills: "CAD, Team Leadership, Engineering team managemnt",
    description: "Growing up as an avid cyclist, I have always been fascinated of techological advancements in cycling. In recent years, one of the major fields of growth was helmet protection. I pitched my idea of testing and designing a helmet liner than can rotationally isolate the skull from the helmet to the BMES EOH comitee, and was approved  As team lead, I found myself coordinating between multiple groups such as the University, BMES, and my project subteams to ensure budget compliance and demo saftey issues. Not only did we design a dummy-head using CAD and construced a test-rig with wood-working, our in-house rotational-isolation liner design proved to be as succesful as the industry standard. Our team recieved 2nd for Outstanding Freshman Exhibit among 200+ competitors. I also gained invaluable experience from leading a project team, which encourged me to become the Technical Director position for BMES.",
  },{
    title: "Bicycle Mechanic - Bike Lab Campustown",
    date: "08/2022 – 11/2022",
    skills: "Bicycle Maintainance, Communication",
    description: "After moving to college, I found beloning with the cycling team. As a bike mechanic on campus, I oversaw and maintained a fleet of bicycles through preventative maintaincee measures. I prioritize my focus on helping customers especially when many of them are my fellow students. I diagnosed problems, proposing, and implementing solutions tailored to customer’s budget and need. I also rebuilt bicycles and individual components such as shifters and wheels to maximze performance of high-end racing bicycles.",
  },{
    title: "Operations Intern - Pueblo Supermarkets",
    date: "08/2022 – 11/2022",
    skills: "Bicycle Maintainance, Communication",
    description: "As the operations intern, my primary role is to intermediate between store management and contractors to ensure smooth integration of newly acquired machinery. I succesfully assisted and oversaw the installation of multiple refrigeration units and shelving that we recently aquired from competitors. Shadowing store managers and maintaince crews, I learned invaluable communication skills that helped me manage my own team later on in life.",
  },
]