import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Carousel } from '../components/Carousel';
import Typewriter from 'typewriter-effect';

export const Home = () => {
  const [typing] = useState({
    title: 'Switzerland',
    subtitle: 'we love'
  });

  return (
    <div className='home' id='home'>
      <Navbar />
      <Carousel />
      <div className='home__text'>
        <p className='home__subtext'>{typing.subtitle}</p>
        <h1 className='home__title'>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 'natural',
              deleteSpeed: 120,
              cursor: '',
              strings: [
                'Switzerland',
                'Photography',
                'Travel'
              ]
            }}
          />
        </h1>
      </div>
    </div>
  );
};
