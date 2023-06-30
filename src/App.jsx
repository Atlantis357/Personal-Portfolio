/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 10:35:16 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/30 08:55:33 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { backgroundGradients } from './constants'
import { tripleA } from './assets'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Resume from './components/Resume'

function App() {

  const [backgroundIdx, setBackgroundIdx] = useState(0);

  const updateBackground = background => {
    setBackgroundIdx((prev) => ((prev + 1) % backgroundGradients.length))
  }

  return (
    // Shuffles background
    <div className={`h-auto ${backgroundGradients[backgroundIdx]}`}> 
      <Navbar updateBackground={updateBackground}/>


      <Hero />
      <AboutMe />
      <Projects />
      <Blog />
      <Resume />


      <Footer />
    </div>

  );
}


export default App
