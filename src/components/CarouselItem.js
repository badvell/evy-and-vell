import './CarouselItem.css';

const CarouselItem = ({ slide }) => {
  return (
    <div className='carousel__item'>
      <img src={slide.url} alt='Switzerland nature' className='carousel__img' />
    </div>
  );
};

export default CarouselItem;