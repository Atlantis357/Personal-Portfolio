/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Home.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/07 21:44:12 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/01/13 20:04:18 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Wrapper to put Hero and AboutMe in the same view
import React from 'react'
import Hero from './Hero'
import AboutContact from './AboutContact.jsx'

const Home = (props) => {



  
  return (
    <>
    {/* <div className={`bg-black black bg-opacity-[.50] z-50`}> */}
        <Hero {...props}/>
        <AboutContact {...props} />
    {/* </div> */}
    </>
  )
}

export default Home