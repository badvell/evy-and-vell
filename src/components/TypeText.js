import { useState } from 'react';
import Typewriter from 'typewriter-effect';

import './TypeText.css';

const TypeText = () => {
  const [typing] = useState({
    title: 'Switzerland',
    subtitle: 'we love'
  });

  return (
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
  );
};

export default TypeText;