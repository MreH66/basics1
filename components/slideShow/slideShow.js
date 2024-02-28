"use client";
import React, { useState } from "react";
import Image from "next/image";
import c from "@/components/slideShow/slidShow.module.css";

// react icons
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

import imageMain from "../../public/cars/DakarCar.jpg";
import secondImg from "../../public/cars/dakarQuads.png";
import ThirdImg from "../../public/cars/RallyCar.jpg";
import FourthImg from "../../public/cars/redBull1.jpg";
import FifthImg from "../../public/cars/truck1.jpg";
import porshe from "../../public/img1.jpg";

export default function SlideShow() {
  const cars = [
    {
      img: imageMain,
      info: "The most common type (among professionals and amateurs) is a prototype that meets Federation Internationale de l'Automobile (FIA) technical and safety standards. The base of the vehicle is a tubular chassis on which mechanical and safety components are mounted.",
    },
    {
      img: secondImg,
      info: "Their maximum engine capacity is 750 cc for two-wheel drive machines and 900 cc for four-wheel drives.",
    },
    {
      img: ThirdImg,
      info: "Lightweight vehicles bring together the T3 and T4 categories. T3s (race number on a violet background) are prototypes crafted by specialised makers, a launchpad for seasoned crews and the last step before the car category. ",
    },
    {
      img: FourthImg,
      info: "In this premier category, riders also convey the image of the lonely biker at sunset, looking for a way in the middle of an ocean of dunes.",
    },
    {
      img: FifthImg,
      info: "These are production-based trucks that meet FIA regulations. They have become quite rare because they are not very suitable for crossing dunes, for example.",
    },
    {
      img: porshe,
      info: "Find more about vehicle types at official page",
    },
  ];

  const [stateChangePic, setStateChanegPic] = useState(0);

  function changeState(isValTrue) {
    if (isValTrue) {
      if (stateChangePic === cars.length - 1) {
        setStateChanegPic(0);
        return;
      }
      setStateChanegPic(stateChangePic + 1);
    } else {
      if (stateChangePic === 0) {
        setStateChanegPic(cars.length - 1);
        return;
      }
      setStateChanegPic(stateChangePic - 1);
    }
  }

  return (
    <>
      <div className={c.mainDiv}>
        <div
          onClick={() => {
            changeState(false);
          }}
          className={c.iconLeft}
        >
          <SlArrowLeft size={60} />
        </div>

        <div>
          <Image
            className={c.mainImg}
            src={cars[stateChangePic].img}
            priority
            alt="pictures"
          />
          <div className={c.textDiv}>
            <p className={c.mainInfo}>{cars[stateChangePic].info}</p>
          </div>
        </div>
        <div
          onClick={() => {
            changeState(true);
          }}
          className={c.iconRight}
        >
          <SlArrowRight size={60} />
        </div>
      </div>
    </>
  );
}