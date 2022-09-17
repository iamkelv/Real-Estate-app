import Image from 'next/image';
import React from 'react';
import classes from './HeroSection.module.css';
import { landing1 } from '../assets/images/landing_page1.jpg';
import { landing2 } from '../assets/images/landing_page2.jpg';
import { landing3 } from '../assets/images/landing_page3.jpg';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
const slideImg = [
  { title: 'The Best of Pleasure', img: landing1 },
  { title: 'The Best of Pleasure', img: landing2 },
  { title: 'The Best of Pleasure', img: landing3 },
];
export const HeroSection = () => {
  return (
    <div className={classes.hero_container}>
      <div className={classes.image_container}>
        {/* <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          stopOnHover={true}
          showArrows={true}
          showIndicators={true}
          swipeable={true}
        >
          <div>
            <Image src={landing1} alt="slider" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <Image src={landing1} alt="slider" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <Image src={landing1} alt="slider" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <Image src={landing1} alt="slider" />
            <p className="legend">Legend 4</p>
          </div>
          <div>
            <Image src={landing1} alt="slider" />
            <p className="legend">Legend 5</p>
          </div>
        </Carousel> */}
        <Image src={landing1} alt="text" width="100%" height="100%" />
      </div>
    </div>
  );
};
