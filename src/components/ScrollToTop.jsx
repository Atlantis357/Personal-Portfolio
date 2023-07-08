/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ScrollToTop.jsx                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Abraham Alkhatib <aaa26@illinois.edu>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/07 21:33:45 by Abraham Alk       #+#    #+#             */
/*   Updated: 2023/07/07 21:33:46 by Abraham Alk      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}