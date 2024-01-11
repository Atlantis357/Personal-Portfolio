/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 10:35:16 by Abraham Alk       #+#    #+#             */
/*   Updated: 2024/01/11 00:33:28 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { foregroundGradients, colorModes } from "./constants";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Music from "./components/Music";
import Resume from "./components/Resume";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProjectView from "./components/ProjectView";
import Experiences from "./components/Experiences";
import Photography from "./components/Photography";

function App() {
  const [foregroundIdx, setForegroundIdx] = useState(0);
  const [colorModeIdx, setColorModeIdx] = useState(0);

  var foreground = foregroundGradients[foregroundIdx];
  var colorMode = colorModes[colorModeIdx];

  const updateForeground = (foreground) => {
    setForegroundIdx((prev) => (prev + 1) % foregroundGradients.length);
    foreground = foregroundGradients[foregroundIdx];
  };
  const updateColorMode = (colorMode) => {
    setColorModeIdx((prev) => (prev + 1) % colorModes.length);
    colorMode = colorModes[colorModeIdx];
  };

  return (
    <>
      {/* Shuffles background */}
      {/* <div className={`h-auto ${colorMode.background} bg-fixed`}> */}
      <div className={`h-auto bg-gray-900 bg-fixed`}>
        <Navbar
          updateForeground={updateForeground}
          updateColorMode={updateColorMode}
          colorMode={colorMode}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home foreground={foreground} colorMode={colorMode} />}
          />

          <Route
            path="/experience"
            element={
              <Experiences foreground={foreground} colorMode={colorMode} />
            }
          />

          <Route
            path="/projects"
            element={<Projects foreground={foreground} colorMode={colorMode} />}
          />

          <Route
            path="/projects/:id"
            element={<ProjectView foreground={foreground} />}
          />

          <Route
            path="/music"
            element={<Music foreground={foreground} colorMode={colorMode} />}
          />

          {/*  */}
          <Route
            path="/photography"
            element={<Photography foreground={foreground} colorMode={colorMode} />}
          />

          {/* <Route
            path="/photography/:id"
            element={<ImageView foreground={foreground} />}
          /> */}
          {/*  */}

          <Route path="/resume" element={<Resume foreground={foreground} />} />


          {/* Case where there is no page found */}
          <Route path="*" element={<NotFound foreground={foreground} />} />
        </Routes>

        <Footer updateForeground={updateForeground} colorMode={colorMode} />
      </div>
    </>
  );
}

export default App;
