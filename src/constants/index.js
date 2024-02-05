/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:05:55 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/02/05 10:27:02 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import {cycling, engineer, fraternity, eatingTurkey, outdoors, instagram, linkedin, seriousAbe, mosaic, flights, tripleA, family, github, stackOverflow, helmetPoster, helmetTesting, ppgInspect, ppgFilterPoster, ecgFlowchart, ecgAirV3, ecgPulse, bikeMechanic, operations, engineeringHelmet, leaderSpeach, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, darkBackground,} from "../assets";



export const foregroundGradients = [
  {
    id: "new",
    title: "bg-gradient-to-r from-slate-200 via-amber-400 to-red-500",
    main: "bg-gray-200",
    accent: "bg-amber-500",
  },
  // {
  //   id: "redDark",
  //   title: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
  //   main: "bg-gray-200",
  //   accent: "bg-red-500",
  // },
  // {
  //   id: "redDark",
  //   title: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
  //   main: "bg-gray-800",
  //   accent: "bg-red-500",
  // },
]



export const colorModes = [
  {
    id: "darkMode",
    // background: "bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800",
    background: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-600 via-slate-800 to-sky-700",
    // background: "bg-[url('/src/assets/darkBackground.jpeg')]", // background image
    text: "text-white",
    border: "border-gray-200 ring-gray-200"
  },
  // {
  //   id: "lightMode",
  //   // background: "bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400",
  //   background: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-600 via-slate-200 to-sky-700",
  //   text: "text-black",
  //   border: "border-gray-800 ring-gray-800"
  // },
]

export const asideBackground = "bg-black bg-opacity-0 hover:bg-opacity-10 transition-all";


export const navLinks = [
  // {
  //   id: "/",
  //   title: "Home",
  // },
  {
    id: "/experience",
    title: "Experience",
  },
  {
    id: "/projects",
    title: "Projects",
  },
  // {
  //   id: "/music",
  //   title: "Music",
  // },
  {
    id:"/photography",
    title: "Photography",
  }, 
  {
    id: "/resume",
    title: "Resume",
  }
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
    name: "GITHUB",
  }, {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/abrahamalkhatib",
    name: "LINKEDIN",
  }, 
  // {
  //   id: "stackOverflow",
  //   icon: stackOverflow,
  //   link: "https://stackexchange.com/users/27590469/abraham-alkhatib",
  //   name: "STACK OVERFLOW",
  // }, 
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/abrahamalkhatib/?hl=en",
    name: "INSTAGRAM",
  }
];

export const aboutMe = [
  {
    intro: "A junior in ",
    title: "bioengineering",
    img: engineer,
    description: "My mother is diabetic, and it was painful to watch her maneuver her life around it, especially when I was a child. I remember watching my mother as she pricked herself on the finger four times a day before injecting herself with insulin. This tedious process was a normality in her everyday life until Abbott’s Freestyle Libre system became available in China. Abbott’s system allowed my mother to wear a wireless patch on her arm and access the blood-sugar readings from her smartphone. Not only did the system revolutionize my mother’s everyday life, but it also ignited my interest in bioengineering."
  },{
    intro: "Oldest of ",
    title: "three brothers",
    img: family,
    description: "With a big family, comes big responsibilities! I grew up as the oldest of four, but I have eight other half-siblings! I love them with all my heart."
  },{
    intro: "Part time ",
    title: "cyclist & mechanic",
    img: cycling,
    description: "Noticible results: 2017 TREK-China Best Young Rider (Overall), 1st-2018 TREK Beijing-Shanghai Criterium, 2nd-2018 Heros U25 Shanghai Classics, Top 10 Finisher- Tour de France Skoda Shanghai Criterium"
  }, {
    intro: "Full time ",
    title: "outdoorsy",
    img: outdoors,
    description: "I find reconnecting with nature my favorite pass time; nothing beats a quick getaway amongst the trees. Though I've been an outdoorsy person all my life, The Outdoors Adventure Club at UIUC took my interest to the next level with multi-day backpacking trips every break. OAC has the best people and the best trips. It's called trauma bonding."
  },{
    intro: "Favourite food... ",
    title: "Turkey!",
    img: eatingTurkey,
    description: "I love turkey lol."
  },{
    intro: "A brother of ",
    title: "ΑΔΦ",
    img: fraternity,
    description: "I love turkey lol."
  },
]


export const projects = [
  { 
    id: "mosiac",
    img: mosaic,
    title: "Photomosaic Board",
    // link: "/projects/flightplanner",
    link: "https://github.com/Atlantis357/PhotoMosaicCreator.git",
    description: "Implemented an algorithm that uses k-D Trees to combine images from an album of photographs to create a PNG mosaic that resembles any image.",
    titlePoster: "https://github.com/Atlantis357/PhotoMosaicCreator.git",
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
    // link: "/projects/flightplanner",
    link: "https://github.com/Atlantis357/OpenFlightPaths.git",
    description: "Designed a flight planning algorithm that uses over 14,000 airports and 67,000 routes to determine the shortest route between any airport.",
    titlePoster: "https://github.com/Atlantis357/OpenFlightPaths.git",
    linkType: "external",
  },{
    id: "ppgfilters",
    img: ppgInspect,
    title: "PPG Filters for HR-Variability",
    link: "/projects/ppgfilters",
    description: "Constructed a PPG signal-filtering pipeline using wavelet transforms and FFT to analyze HR variability during exercise.",
    titlePoster: ppgFilterPoster,
    linkType: "internal",
  },
  // {
  //   id: "abesPage",
  //   img: tripleA,
  //   title: "Abe's Page",
  //   link: "/",
  //   description: "Created an interactive personal-portfolio using react, tailwind-CSS, and the Vite from scrach to showcase my intrests and thoughts.",
  //   titlePoster: "",
  //   linkType: "internal",
  // },
  {
    id: "ecgAirV3",
    img: ecgFlowchart,
    title: "ECG-Air V3",
    link: "/projects/ecgAirV3",
    description: "Created an ECG-based risk prediction pipeline using the TensorFlow-Lite library to improve the accessibility and interoperability of ECG-Air to power a suite of AI-based prediction models.",
    titlePoster: ecgAirV3,
    linkType: "pdf",
  },
]

export const photos = [
  { 
    id: "p1",
    img: p1,
    title: "In between worlds",
    link: "/projects/p1",
    description: "Chicago Union Station (service ramp to tracks)",
    titlePoster: p1,
    linkType: "internal",
  },{ 
    id: "p2",
    img: p2,
    title: "Rush Hour",
    link: "/projects/p2",
    description: "CTA Foster Station North Exit Ramp",
    titlePoster: p2,
    linkType: "internal",
  },{ 
    id: "p9",
    img: p9,
    title: "The calm before the storm",
    link: "/projects/p9",
    description: "Illinois-Wisconsin trail",
    titlePoster: p9,
    linkType: "internal",
  },{ 
    id: "p6",
    img: p6,
    title: "Turnaround point",
    link: "/projects/p6",
    description: "The end of the pedestrain path on the Chicago Lakeshore",
    titlePoster: p6,
    linkType: "internal",
  },{ 
    id: "p4",
    img: p4,
    title: "Up close",
    link: "/projects/p4",
    description: "Office plant",
    titlePoster: p4,
    linkType: "internal",
  },{ 
    id: "p5",
    img: p5,
    title: "Stairwell #1",
    link: "/projects/p5",
    description: "Lower Wacker St. parking lot exit towards Randolf St.",
    titlePoster: p5,
    linkType: "internal",
  },{ 
    id: "p8",
    img: p8,
    title: "Resistance",
    link: "/projects/p8",
    description: "SJP Chicago protest",
    titlePoster: p8,
    linkType: "internal",
  },{ 
    id: "p7",
    img: p7,
    title: "The wicked of the good",
    link: "/projects/p7",
    description: "Lincoln Park Chicago, broken picnic bench",
    titlePoster: p7,
    linkType: "internal",
  },{ 
    id: "p3",
    img: p3,
    title: "The Grand Red Line Hotel",
    link: "/projects/p3",
    description: "CTA Red Line",
    titlePoster: p3,
    linkType: "internal",
  },{ 
    id: "p10",
    img: p10,
    title: "Window of oppertunity",
    link: "/projects/p10",
    description: "Main library, University of Illinois",
    titlePoster: p10,
    linkType: "internal",
  },
]

export const missionStatement = [`I use my creative and analytical skills along with my professional training in bioengineering and computer science to design solutions that provide unparalled value to my customers. Organizations and companies rely on me to create a development blueprint towards the cutting edge of comptuer science and medicine.`]

export const blogs = [
  {
    img: fraternity,
    title: "Finding the Journey to Mordor",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },
]

export const experiences = [
  {
    title: "Market Research Analyst",
    company: "AbbVie",
    date: "01/2024 – Present",
    skills: "Team-Leadership",
    description: "At AbbVie, I work as an internal consultant to various teams. I am responsible for researching and analyzing cutting-edge  solutions in healthcare and buisness.",
    svg: ecgPulse,
  },{
    title: "Undergraduate Course Assistant",
    company: "University of Illinois - Grainger College of Engineering",
    date: "01/2024 – Present",
    skills: "Team-Leadership",
    description: "I help undergraduates in BIOE 205, Signals and Systems in Bioengineering, learn by breaking down complex topics to digestible pieces. During class I answer questions, and lead discussions. After class I assist office hours and grade submitted work.",
    svg: ecgPulse,
  },{
    title: "Clinical Informatics Intern",
    company: "Wake Forest University School of Medicine",
    date: "05/2023 – 08/2023",
    skills: "Swift, TenorFlow/TFLite, iOS Development",
    description: "I spent the summer of 2023 as a bioinformatics intern at Wake Forest University School of Medicine. Working with AI models in TensorFlow Lite, I was responsible for embedding a suite of AI algorithoms to our newly developed clinical application. I was tasked to create data-transmission pipeline that was lightweight yet HIPAA complaint to protect user's data. To reduce latency, I also optimized the risk prediction pipeline for edge device. Doing so I decreased the ECG processing time to under 25ms, and improved the AI inference time by over 93% from the pervious generation. ",
    svg: ecgPulse,
  },{
    title: "Technical Director",
    company: "Biomedical Engineering Society",
    date: "05/2023 – Present",
    skills: "Team Leadership, Management",
    description: "Before the end of my sophmore year, I was elected to be Technical Director position for BMES at Illinois. In office, I achieved a 50% budget reduction by removing unnecessary committes and increasing virtual events. My goal is to prioritize exposure and bioengineering skill development among all students, particularly underclassmen.",
    svg: leaderSpeach,
  },{
    title: "Engineering Team Lead",
    company: "Biomedical Engineering Society",
    date: "08/2022 – 04/2023",
    skills: "CAD, Team Leadership, Management",
    description: "To demonstrate the recent advancements in helmet safty, I lead a team of underclassmen to design a rotaionally isolated helmet liner that enhance protection on angled impacts. As team lead, I found myself coordinating between multiple groups such as the University, BMES, and my project subteams to ensure budget compliance and demo saftey issues. The most challenging part of the project was desiging the 3D printed dummy head with embedded 3-axis gyroscopes and acclerometer. I also took a wood-working class to construct our test-rig. Our liner design proved to be as succesful as the industry standard, and we recieved 2nd for Outstanding Freshman Exhibit among 200+ competitors.",
    svg: engineeringHelmet,
  },
  {
    title: "Bicycle Mechanic",
    company: "Bike Lab Campustown",
    date: "08/2022 – 11/2022",
    skills: "Bicycle Maintainance, Communication",
    description: "After moving to college, I found my academic outlet with the cycling team. As a bike mechanic on campus, I oversaw and maintained a fleet of bicycles through preventative maintaincee measures. I diagnosed problems, proposed, and implemented solutions tailored to customer’s budget and need. I also rebuilt bicycles and components such as shifters and wheels to maximze performance on high-end racing models.",
    svg: bikeMechanic,
  },
  {
    title: "Operations Intern",
    company: "Pueblo Supermarkets",
    date: "08/2022 – 11/2022",
    skills: "Sales, Consulting, Management, Communication",
    description: "As the operations intern, my primary role is to act as an liason between store management and contractors to ensure smooth integration of newly acquired machinery. I succesfully assisted and oversaw the installation of multiple refrigeration units and shelving. During my time at Pueblo, I also shadowed store managers, and maintaince crews, and other employees.",
    svg: operations,
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

