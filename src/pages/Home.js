import { Navbar } from '../components/Navbar';
import { Carousel } from '../components/Carousel';
import TypeText from '../components/TypeText';


export const Home = () => {
  return (
    <div className='home' id='home'>
      <Navbar />
      <Carousel />
      <TypeText />
    </div>
  );
};
