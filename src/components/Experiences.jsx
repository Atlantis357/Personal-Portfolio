/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Experiences.jsx                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/09 21:17:43 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/01/11 00:34:55 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import { asideBackground, experiences } from "../constants";

const Experiences = (props) => {
  return (
    <div id="experience" className=" min-h-screen py-20 md:py-28">
      <section className="pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0">
        <h1
          className={`font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${props.foreground.main} tracking-wider font-Orbitron`}
        >
          My Experience
        </h1>
      </section>

      {/* CHECKOUT NIGHTWIND FOR DARKMODE */}

      <section
        className={`mx-2 px-3 md:mx-16 md:px-5 lg:mx-28 lg:px-7 md:border-l-8 ${props.colorMode.border}`}
      >
        {experiences.map((info) => (
          <div
            className={`${asideBackground} mb-20 rounded-2xl border-l-4 border-b-2 ${props.colorMode.border}`}
          >
            <img 
            src={info.svg}
            className = {`fill-white absolute items-center hidden md:flex md:inset-x-12 lg:inset-x-24 justify-center w-10 h-10 rounded-2xl ring-4 ${props.colorMode.border} ${props.foreground.title}`}
            />

            <h1
              className={`text-2xl md:text-3xl font-medium bg-clip-text text-transparent font-Orbitron ${props.foreground.accent} px-5 pt-5`}
            >
              {info.title}
            </h1>
            <p
              className={`indent-10 mt-5 line-clamp-3 text-md font-semibold ${props.colorMode.text} px-5 pb-10 flex text-justify`}
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







/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Experiences.jsx                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/09 21:17:43 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/26 21:28:41 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// import React from "react";
// import { asideBackground, experiences } from "../constants";

// const Experiences = (props) => {
//   return (
//     <div id="experiences" className=" min-h-screen py-20 md:py-28">
//       <section className="pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0">
//         <h1
//           className={`font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${props.foreground.main} tracking-wider font-Orbitron`}
//         >
//           My Experiences
//         </h1>
//       </section>

//       {/* CHECKOUT NIGHTWIND FOR DARKMODE */}

//       <section
//         className={`mx-2 px-3 md:mx-16 md:px-5 lg:mx-28 lg:px-7 md:border-l-8 ${props.colorMode.border}`}
//       >
//         {experiences.map((info) => (
//           <div
//             className={`${asideBackground} my-5 rounded-2xl border-l-4 border-b-2 ${props.colorMode.border}`}
//           >
//             <img 
//             src={info.svg}
//             className = {`fill-white absolute items-center hidden md:flex md:inset-x-12 lg:inset-x-24 justify-center w-10 h-10 rounded-2xl ring-4 ${props.colorMode.border} ${props.foreground.title}`}
//             />

//             <h1
//               className={`text-2xl md:text-3xl font-medium bg-clip-text text-transparent font-Orbitron ${props.foreground.accent} px-5 pt-5`}
//             >
//               {info.title}
//             </h1>
//             <p
//               className={`indent-10 mt-5 line-clamp-3 text-md font-semibold ${props.colorMode.text} px-5 pb-10 flex text-justify`}
//             >
//               {info.description}
//             </p>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Experiences;
