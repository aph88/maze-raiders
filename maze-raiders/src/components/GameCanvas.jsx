import React, { useState, useEffect, useRef } from "react";
import femaleChar from "../sprites/femaleChar.png";
import maleChar from "../sprites/maleChar.png";
import floor from "../sprites/floor.png";
import wall from "../sprites/wall.png";
import door from "../sprites/door.png";
import diamond from "../sprites/diamond.png";
import emerald from "../sprites/emerald.png";
import ruby from "../sprites/ruby.png";
import sapphire from "../sprites/sapphire.png";

const GameCanvas = () => {
  const [map, setMap] = useState(null);
  const canvas = useRef(null);

  const makeImage = (image) => {
    const img = new Image()
    img.src = image;
    return img;
  }

  const drawMap = (ctx) => {
    const floorImg = makeImage(floor);
    const femaleCharImg = makeImage(femaleChar);
    const wallImg = makeImage(wall);

    for (let y = 0; y < 50; y++) {
      for (let x = 0; x < 64; x++) {
        if (x === 0 || y === 0 || x === 63 || y === 49) {
          ctx.drawImage(wallImg, x * 16, y* 16)
        } else {
          if (x === 1 && y === 1) {
            ctx.drawImage(femaleCharImg, x*16, y*16)
          } else {
            ctx.drawImage(floorImg, x * 16, y * 16);
          }
        }
      }
    }
  };

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    drawMap(ctx);
  });

  return <canvas ref={canvas} width={1024} height={800} />;
};

export default GameCanvas;
