import { useState } from 'react';
import { Text } from './Text';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { VscChromeClose } from 'react-icons/vsc';
import cards from '../helpers/GalleryImageData';

import './GallerySection.css';

export const GallerySection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [slideNum, setSlideNum] = useState(0);

  const toggleModal = (i) => {
    setSlideNum(i);
    setOpenModal(() => !openModal);
    document.body.classList.toggle('screen');
  };

  const prevSlide = () => {
    slideNum === 0 ? setSlideNum(cards.length - 1) : setSlideNum(slideNum - 1);
  };

  const nextSlide = () => {
    slideNum + 1 === cards.length ? setSlideNum(0) : setSlideNum(slideNum + 1);
  };

  return (
    <>
      {openModal &&
        <div className="popup">
          <div className="popup__wrapper">
            <img src={cards[slideNum].image} alt='' className="popup__img" />
            <p className="popup__title">{cards[slideNum].title}</p>
            <VscChromeClose className='popup__close' onClick={toggleModal} />
            <RiArrowLeftSLine className='popup__btn popup__btn-prev' onClick={prevSlide} />
            <RiArrowRightSLine className='popup__btn popup__btn-next' onClick={nextSlide} />
          </div>
        </div>
      }
      <div className='gallery__container' id='gallery'>
        <Text text='gallery' />
        <div data-aos='fade-down' className='gallery__wrapper'>
          {cards.map((card, i) => {
            return (
              <div
                className='gallery__image'
                key={i}
                onClick={() => toggleModal(i)}
              >
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
    </>
  );
};
