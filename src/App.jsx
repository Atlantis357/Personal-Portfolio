/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 10:35:16 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/27 23:20:31 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useState } from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { backgroundGradients } from './assets'
import { tripleA } from './assets'

function App() {

  const [backgroundIdx, setBackgroundIdx] = useState(0);

  const updateBackground = background => {
    setBackgroundIdx((prev) => ((prev + 1) % backgroundGradients.length))
  }

  return (
    // Shuffles background
     <div className={`h-auto ${backgroundGradients[backgroundIdx]}`}> 

        {/* Navigation Bar */}
        <nav className='w-full overflow-hidden'>
          <div className='sm:mx-16 mx-6, flex justify-center items-center'>
            <div className='xl:max-w-[1280px] w-full'>
              <Navbar updateBackground={updateBackground}/>
            </div>
          </div>
        </nav>

        {/* Front Page */}
        <section className={`w-full overflow-hidden flex justify-center items-start`}>
            <Hero />
        </section>


        {/* Footer */}
        <section className='w-full py-3 overflow-hidden'>
          <div className='flex justify-center items-center'>
            <img 
              src={tripleA} 
              alt='tripleA' 
              className='w-[124px] h-[32px] justify-center items-center'
              />
            </div>
        </section>



     </div>


  );
}


export default App
