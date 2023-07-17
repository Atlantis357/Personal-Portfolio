/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Music.jsx                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/16 18:43:19 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/17 00:52:09 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import { spotifyPlaylists, spotifySongs } from "../constants";

const Music = (props) => {
  return (
    <div id="music" className=" py-20 md:py-28">
      {/* Title */}
      <section className="pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0">
        <h1
          className={`font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${props.foreground.main} tracking-wider font-Orbitron`}
        >
          Forever Favs
        </h1>
      </section>

      <section className="container mx-auto pb-10 px-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 lg:gap-16 md:gap-10 sm:gap-8 items-center justify-center">
          {spotifySongs.map((song) => (
            <iframe
              className="hover:scale-105 "
              src={song.src}
              width="100%"
              height="152"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section className="pb-8 md:pb-16 text-center w-screen pt-8 md:pt-0">
        <h1
          className={`font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent ${props.foreground.main} tracking-wider font-Orbitron`}
        >
          My Life in playlists
        </h1>
      </section>

      {/* Grid */}
      <section className="container mx-auto pb-10 px-10">
        <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-16 md:gap-10 sm:gap-8 items-center justify-center">
          {spotifyPlaylists.map((playlist) => (
            <iframe
              className="hover:scale-105"
              src={playlist.src}
              width="100%"
              height="352"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Music;
