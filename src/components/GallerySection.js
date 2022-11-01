import Nature from '../assets/gallery/img1.jpg';
import City from '../assets/gallery/img2.jpg';
import Events from '../assets/gallery/img3.jpg';
import Products from '../assets/gallery/img4.jpg';
import Hotels from '../assets/gallery/img5.jpg';
import Food from '../assets/gallery/img6.jpg';
import People from '../assets/gallery/img7.jpg';
import Cars from '../assets/gallery/img8.jpg';
import Animals from '../assets/gallery/img9.jpg';
import { Text } from './Text';

import './GallerySection.css';

export const GallerySection = () => {
  return (
    <div>
      <div className='gallery__container' id='gallery'>
        <Text text='gallery' />
        <div className='gallery__wrapper'>
          <div className='gallery__image'>
            <img
              src={Nature}
              alt='Nature view'
              className='gallery__img'
            />
            <p className='gallery__title'>Nature</p>
          </div>
          <div className='gallery__image'>
            <img
              src={City}
              alt='City view'
              className='gallery__img'
            />
            <p className='gallery__title'>City</p>
          </div>
          <div className='gallery__image'>
            <img
              src={Events}
              alt='Events'
              className='gallery__img'
            />
            <p className='gallery__title'>Events</p>
          </div>
          <div className='gallery__image'>
            <img
              src={Products}
              alt='Products'
              className='gallery__img'
            />
            <p className='gallery__title'>Products</p>
          </div>
          <div className='gallery__image'>
            <img
              src={Hotels}
              alt='Hotels view'
              className='gallery__img'
            />
            <p className='gallery__title'>Hotels</p>
          </div>
          <div className='gallery__image'>
            <img
              src={Food}
              alt='Food'
              className='gallery__img'
            />
            <p className='gallery__title'>Food</p>
          </div>
          <div className='gallery__image'>
            <img
              src={People}
              alt='People'
              className='gallery__img'
            />
            <p className='gallery__title'>People</p>
          </div>
          <div className='gallery__image'>
            <img
              src={Cars}
              alt='Cars'
              className='gallery__img'
            />
            <p className='gallery__title'>Cars</p>
          </div>
          <div className='gallery__image'>
            <img
              src={Animals}
              alt='Animals'
              className='gallery__img'
            />
            <p className='gallery__title'>Animals</p>
          </div>
        </div>
      </div>
    </div>
  );
};
