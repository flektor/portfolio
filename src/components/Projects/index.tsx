import React from "react";
import Candle from "./Candle";
import Tetrion from "./Tetrion";
import Tetrees from "./Tetrees";
import Meet from "./Meet";
import Gallery from "./Gallery";

export default function Projects() {
  return (
    <ul>
      <li key="Meet">
        <Meet />
      </li>

      <li key="Tetrion" className="-mt-36">
        <Tetrion />
      </li>

      <li key="Gallery" className="mt-36">
        <Gallery />
      </li>

      <li key="Candle" className="mt-20">
        <Candle />
      </li>

      <li key="Tetrees" className="mt-48">
        <Tetrees />
      </li>
    </ul>
  );
}
