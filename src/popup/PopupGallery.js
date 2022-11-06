import { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { VscChromeClose } from 'react-icons/vsc';
import cards from '../helpers/GalleryImageData';

import './PopupGallery.css';

export const PopupGallery = () => {
  const [open, setOpen] = useState(false);
  const [slideNum, setSlideNum] = useState(0);

  const openPopup = (i) => {
    setSlideNum(i);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const prevSlide = () => {
    slideNum === 0 ? setSlideNum(cards.length - 1) : setSlideNum(slideNum - 1);
  };

  const nextSlide = () => {
    slideNum + 1 === cards.length ? setSlideNum(0) : setSlideNum(slideNum + 1);
  };

  return (
    <>

      {open &&
        <div className="sliderWrap">
          <VscChromeClose className='btn__close' onClick={closeModal} size={50} />
          <RiArrowLeftSLine className='btn__prev' onClick={prevSlide} size={50} />
          <RiArrowRightSLine className='btn__next' onClick={nextSlide} />
          <div className="fullScreenImage">
            <img src={cards[slideNum].image} alt="" />
          </div>
        </div>
      }
      <div className='galleryWrap'>
        {
          cards.map((img, i) => {
            return (
              <div
                className='single'
                key={i}
                onClick={() => openPopup(i)}
              >
                <img
                  src={img.image}
                  alt=''
                />
              </div>
            );
          })
        }
      </div>
    </>
  );
};
