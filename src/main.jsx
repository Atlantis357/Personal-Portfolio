/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 10:35:44 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/14 21:51:24 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'

import { Helmet } from "react-helmet"
import nightwind from "nightwind/helper"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      
      {/* <Head>
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </Head> */}

      <ScrollToTop />

      <App />
      
    </Router>
  </React.StrictMode>,
)
