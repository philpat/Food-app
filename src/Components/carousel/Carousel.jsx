import React from 'react';
import Slider from 'react-slick';


const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='overflow-hidden'>
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} >
          <div className=' flex justify-center items-center py-3'>
            <div>
            <div className='p-3 rounded-lg shadow-lg'>
            <img src={image}  alt={`Slide ${index + 1}`} className='bg-gray-200 p-3 shadow-md rounded' />
            </div>
            <p className="text-center py-2">{image.name}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default Carousel;
 