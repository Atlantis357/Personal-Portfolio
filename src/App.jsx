/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 10:35:16 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/27 15:06:18 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useState } from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import { backgroundGradients } from './assets'

function App() {
  // const [count, setCount] = useState(0)
  //const styles = styles
  const [backgroundIdx, setBackgroundIdx] = useState(0);

  const updateBackground = background => {
    setBackgroundIdx((prev) => ((prev + 1) % backgroundGradients.length))
  }

  return (
    // Attempt to create a unifying background for the page
    // could use a random gradient generator
     <div className={`h-screen ${backgroundGradients[backgroundIdx]}`}> 

        <div className='w-full overflow-hidden'>
          <div className='sm:mx-16 mx-6, flex justify-center items-center'>
            <div className='xl:max-w-[1280px] w-full'>
              <Navbar updateBackground={updateBackground}/>
            </div>
          </div>
        </div>

     </div>


  );
}


export default App
