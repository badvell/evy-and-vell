import Evy from '../assets/team/team1.jpg';
import Vell from '../assets/team/team2.JPG';
import { Text } from './Text';

import './AboutUs.css';

export const AboutUs = () => {
  return (
    <div id='about' data-aos='fade-up'>
      <Text text='About us' />
      <div className='about__container'>
        <div className='about__image'>
          <img src={Evy} alt='Evy' className='about__img' />
          <img src={Vell} alt='Vell' className='about__img' />
        </div>
        <div data-aos='fade-up' className='about__title'>
          <h2 className='about__info'>
            We are couple photographers based in Zürich, Switzerland &mdash;
            Evy and Vell.
          </h2>
          <p className='about__description'>
            Our love to photography started when we purchased our first Sony
            camera. Since then it is not only our hobby and passion, but also
            a way to capture beautiful visuals for our partners. We already
            collaborated with Swiss travel agencies and hotel-related
            organizations.
          </p>
        </div>
      </div>
    </div>
  );
};
