/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Home.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/07 21:44:12 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/01/10 23:59:41 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Wrapper to put Hero and AboutMe in the same view
import React from 'react'
import Hero from './Hero'
import AboutContact from './AboutContact.jsx'

const Home = (props) => {
  return (
    <>
        <Hero {...props}/>
        {/* <AboutContact {...props} /> */}
    </>
  )
}

export default Home