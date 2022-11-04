import cards from '../helpers/GalleryImageData';
import { Text } from './Text';

import './GallerySection.css';

export const GallerySection = () => {
  return (
    <div>
      <div className='gallery__container' id='gallery'>
        <Text text='gallery' />
        <div data-aos='fade-down' className='gallery__wrapper'>
          {cards.map((card, i) => {
            return (
              <div className='gallery__image' key={i}>
                <img
                  src={card.image}
                  alt={card.title}
                  className='gallery__img'
                />
                <p className='gallery__title'>{card.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
