import { FiInstagram } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';

import './FooterSection.css';

export const FooterSection = () => {
  return (
    <div className='footer'>
      <div className='footer__wrapper'>
        <p className='footer__copyright'>&copy; 2022 Evy and Vell Photography.</p>
      </div>
      <div className='footer__icons'>
        <a
          href='https://www.instagram.com/evyinswitzerland/'
          className='footer__link'
        >
          <FiInstagram size={20} color={'#fff'} />
        </a>
        <a
          href='mailto: evyinswitzerland@gmail.com'
          className='footer__link'
        >
          <TfiEmail size={20} color={'#fff'} />
        </a>
      </div>
    </div>
  );
};
