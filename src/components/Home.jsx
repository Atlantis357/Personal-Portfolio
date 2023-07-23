/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Home.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/07 21:44:12 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/23 14:00:02 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Wrapper to put Hero and AboutMe in the same view
import React from 'react'
import AboutMe from './AboutMe'
import Hero from './Hero'
import ContactMe from './ContactMe'

const Home = (props) => {
  return (
    <>
        <Hero {...props}/>
        <AboutMe {...props}/>
        <ContactMe {...props}/>
    </>
  )
}

export default Home