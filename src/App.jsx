/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 10:35:16 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/30 15:03:43 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { foregroundGradients, colorModes } from './constants'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Resume from './components/Resume'

function App() {

  const [foregroundIdx, setForegroundIdx] = useState(0);
  const [colorModeIdx, setColorModeIdx] = useState(0);

  var foreground = foregroundGradients[foregroundIdx];
  var colorMode = colorModes[colorModeIdx];

  const updateForeground = foreground => {
    setForegroundIdx((prev) => ((prev + 1) % foregroundGradients.length))
    foreground = foregroundGradients[foregroundIdx];
  }
  const updateColorMode = colorMode => {
    setColorModeIdx((prev) => ((prev + 1) % colorModes.length))
    colorMode = colorModes[colorModeIdx];
  }
  
  return (
    
    // Shuffles background
    // <div className={`h-auto ${backgroundGradients[backgroundIdx]}`}> 
    <div className={`h-auto ${colorMode.background}`}> 
      <Navbar 
        updateForeground={updateForeground}
        updateColorMode={updateColorMode}
        colorMode={colorMode}
      />


      <Hero 
        foreground={foreground}
        colorMode={colorMode}
      />
      <AboutMe 
        foreground={foreground}
        colorMode={colorMode}
      />
      <Projects 
        foreground={foreground}
        colorMode={colorMode}
      />
      <Blog 
        foreground={foreground}
        colorMode={colorMode}
      />
      <Resume
        foreground={foreground}
      />


      <Footer />
    </div>

  );
}


export default App
