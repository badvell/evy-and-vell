import { useState } from 'react';
import { images } from '../helpers/CarouselData';

export const Carousel = () => {
  const [currImg] = useState(0);

  return (
    <div
      className='home__img'
      style={{ backgroundImage: `url(${images[currImg].image})` }}
    >
    </div>
  );
};
