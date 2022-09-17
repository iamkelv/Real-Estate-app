import Image from 'next/image';
import React from 'react';
import classes from './HeroSection.module.css';
import landing1 from '../assets/images/landing_page1.jpg';
import landing2 from '../assets/images/landing_page2.jpg';
import landing3 from '../assets/images/landing_page3.jpg';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { list } from '@chakra-ui/react';
const slideImg = [
  { title: 'The Best of Pleasure', img: landing1 },
  { title: 'Own A House Now', img: landing2 },
  { title: 'Enjoy Your Vacation   ', img: landing3 },
];
export const HeroSection = () => {
  const slider = slideImg.map((list) => {
    const { title, img } = list;
    return (
      <div key={title}>
        <Image src={img} alt={title} />
        <p className="legend">
          <h1>{title}</h1>
        </p>
      </div>
    );
  });
  return (
    <div className={classes.hero_container}>
      <div className={classes.image_container}>
        <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          stopOnHover={true}
          showArrows={true}
          showIndicators={true}
          swipeable={true}
        >
          {slider}
        </Carousel>
      </div>
    </div>
  );
};
