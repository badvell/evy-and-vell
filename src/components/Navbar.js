import { useState } from 'react';
import { Link } from 'react-scroll';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { VscChromeClose } from 'react-icons/vsc';

import './Navbar.css';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setClick(!click);
    document.body.classList.toggle('screen');
  };

  const handleClose = () => {
    setClick(!click);
    document.body.classList.remove('screen');
  };

  const changeColorNavbar = () => {
    window.scrollY >= 100 ? setColor(true) : setColor(false);
  };

  window.addEventListener('scroll', changeColorNavbar);

  return (
    <div className={color ? 'navbar navbar__color' : 'navbar'}>
      <Link
        to='home'
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className='navbar__logo'
      >
        Evy and Vel photography
      </Link>
      <ul className={click ? 'navbar__links active' : 'navbar__links'}>
        <li className='navbar__link'>
          <Link
            onClick={handleClose}
            to='about'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className='navbar__link'>
          <Link
            onClick={handleClose}
            to='features'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Features
          </Link>
        </li>
        <li className='navbar__link'>
          <Link
            onClick={handleClose}
            to='gallery'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Gallery
          </Link>
        </li>
        <li className='navbar__link'>
          <Link
            onClick={handleClose}
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div
        className='hamburger'
        onClick={handleClick}
      >
        {click ? <VscChromeClose size={25} /> : <HiOutlineMenuAlt3 size={25} />}
      </div>
    </div>
  );
};
