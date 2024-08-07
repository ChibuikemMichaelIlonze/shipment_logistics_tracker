import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageCarousel.css'; // Import the external CSS for dot indicators

const images = [
  {
    url: 'path/to/your/image1.jpg',
    caption: 'What we value',
    description: 'We’re committed to innovating. Practicing inclusion. Delivering more sustainable solutions. And improving all the time. See how we put these commitments into practice.',
  },
  {
    url: 'path/to/your/image2.jpg',
    caption: 'Another Value',
    description: 'Another description about values and commitments.',
  },
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Change slide every 4 seconds
    arrows: false, // Disable the arrow buttons
  };

  return (
    <div className="h-screen bg-grey-450 text-white lg:px-24 px-4 py-20">
      <Slider {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index} className="h-full flex flex-col justify-between">
            <div className="h-[70%]">
              <img src={image.url} alt={image.caption} className="w-full h-full object-cover" />
            </div>
            <div className="h-[30%] p-8 flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold">{image.caption}</h2>
              <p className="mt-2">{image.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
