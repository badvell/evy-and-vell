import { Text } from './Text';
import { SiMinutemailer } from 'react-icons/si';

import './ContactSection.css';

export const ContactSection = () => {
  return (
    <>
      <section className="contact" id="contact">
        <Text text='Contact us' />
        <div data-aos="fade-up" className="contact__container about__container">
          <div className="contact__title about__title">
            <p className="contact__description about__description">
              We would be delighted to work with you and create awesome photo &
              video content.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="contact__btn">
          <a href="mailto: evyinswitzerland@gmail.com" className="contact__email"
          >Send email
            <SiMinutemailer size={22} color='#ced4da' />
          </a>
        </div>
      </section>
    </>
  );
};
