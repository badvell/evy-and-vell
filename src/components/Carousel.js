import { useState, useEffect } from 'react';
import CarouselItem from './CarouselItem';
import images from '../helpers/CarouselData';

import './Carousel.css';

export const Carousel = () => {
  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrSlide(currSlide => currSlide < images.length - 1 ? currSlide + 1 : 0);
    }, 5000);

    return () => clearInterval(slideInterval);
  });

  return (
    <div className='container'>
      <div className='carousel'>
        <div
          className='carousel__inner'
          style={{ transform: `translateX(${-currSlide * 100}%)` }}
        >
          {images.map((slide, i) => {
            return (
              <CarouselItem slide={slide} key={i} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
