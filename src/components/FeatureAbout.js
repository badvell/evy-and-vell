import Zurich from '../assets/logo/zurich.png';
import MySwitzerland from '../assets/logo/my_switzerland.png';
import Geneva from '../assets/logo/geneva.png';
import logo from '../helpers/FeatureLogoData';
import { Text } from './Text';

import './FeatureAbout.css';

export const FeatureAbout = () => {
  return (
    <div>
      <div className='features__container' id='features'>
        <Text text='Collaborated with' />
        <div data-aos="fade-up" className='features__highlight'>
          <img
            src={Zurich}
            alt='Welcome to Zurich'
            className='features__images'
          />
          <img
            src={MySwitzerland}
            alt='My Switzerland'
            className='features__images'
          />
          <img
            src={Geneva}
            alt='Geneva Tourism'
            className='features__images'
          />
        </div>
        <div data-aos="fade-down" className='features__wrapper'>
          {logo.map((img, i) => {
            return (
              <img
                src={img.logo}
                alt={img.alt}
                className='features__img'
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
