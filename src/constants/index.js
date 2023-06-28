/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/27 15:05:55 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/06/28 10:36:26 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


import { withOptions } from "tailwindcss/plugin";
import {instagram, linkedin} from "../assets";

export const navLinks = [
  {
    id: "aboutMe",
    title: "About Me",
  }, {
    id: "Projects",
    title: "Projects",
  }, {
    id: "Blog",
    title: "Blog",
  }, {
    id: "Resume",
    title: "Resume",
  },
];

export const nameIntro = {
    EngIntro: "Who is ",
    EngName: "Abraham?",
    EngOutro: "?",
    ChiOutro: "是 谁 ?",
    ChiName: "艾 笔 ",
}

export const socialMedia = [
  {
    id: "insta",
    icon: instagram,
    link: "https://www.instagram.com/",
  }, {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
