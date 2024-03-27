import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDrag } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';

const FavoriteRecipesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


  return <Slider {...settings}>{/* Carousel items */}</Slider>;
};

export default FavoriteRecipesCarousel;
