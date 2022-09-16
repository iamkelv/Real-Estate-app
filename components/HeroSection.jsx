import Image from "next/image";
import React from "react";
import classes from "./HeroSection.module.css";
import landing1 from "../assets/images/landing_page1.jpg";

export const HeroSection = () => {
  return (
    <div className={classes.hero_container}>
      <div className={classes.image_container}>
        <Image src={landing1} alt="Slider" />
      </div>
    </div>
  );
};
