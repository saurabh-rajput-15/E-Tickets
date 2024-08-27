"use client";   
import React from 'react';

const SliderRow = ({ images, direction }) => {
  return (
    <div className={`flex ${direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'} space-x-4`}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`slider-${index}`}
          className="h-48 object-cover"
          style={{ width: image.width }}
        />
      ))}
    </div>
  );
};

const InfiniteSlider = () => {
  const imageRows = [
    [
      { src: './janjira.jpeg', width: '200px' },
      { src: './delihizoo.jpeg', width: '150px' },
      { src: './raigadh.jpeg', width: '300px' },
      { src: './tajmahal.jpeg', width: '250px' },
      { src: './janjira.jpeg', width: '200px' },
      { src: './delihizoo.jpeg', width: '150px' },
      { src: './raigadh.jpeg', width: '300px' },
      { src: './tajmahal.jpeg', width: '250px' },
      { src: './lalkila.jpeg', width: '250px' },
      { src: './jaipur.jpeg', width: '200px' },
      { src: './muzium1.jpeg', width: '300px' },
      { src: './mumbaimuzium.jpeg', width: '150px' },
      { src: './janjira.jpeg', width: '200px' },
      { src: './delihizoo.jpeg', width: '150px' },
      { src: './raigadh.jpeg', width: '300px' },
      { src: './tajmahal.jpeg', width: '250px' },
    ],
    [
      { src: './janjira.jpeg', width: '200px' },
      { src: './delihizoo.jpeg', width: '150px' },
      { src: './raigadh.jpeg', width: '300px' },
      { src: './tajmahal.jpeg', width: '250px' },
      { src: './lalkila.jpeg', width: '250px' },
      { src: './jaipur.jpeg', width: '200px' },
      { src: './muzium1.jpeg', width: '300px' },
      { src: './mumbaimuzium.jpeg', width: '150px' },
      { src: './janjira.jpeg', width: '200px' },
      { src: './delihizoo.jpeg', width: '150px' },
      { src: './raigadh.jpeg', width: '300px' },
      { src: './tajmahal.jpeg', width: '250px' },
      { src: './janjira.jpeg', width: '200px' },
      { src: './delihizoo.jpeg', width: '150px' },
      { src: './raigadh.jpeg', width: '300px' },
      { src: './tajmahal.jpeg', width: '250px' },
      { src: './janjira.jpeg', width: '200px' },
      { src: './delihizoo.jpeg', width: '150px' },
      { src: './raigadh.jpeg', width: '300px' },
      { src: './tajmahal.jpeg', width: '250px' },
    ],
    [
      { src: './janjira.jpeg', width: '200px' },
      { src: './delihizoo.jpeg', width: '150px' },
      { src: './raigadh.jpeg', width: '300px' },
      { src: './tajmahal.jpeg', width: '250px' },
      { src: './janjira.jpeg', width: '200px' },
      { src: './delihizoo.jpeg', width: '150px' },
      { src: './raigadh.jpeg', width: '300px' },
      { src: './tajmahal.jpeg', width: '250px' },
    ],
    
  ];

  return (
    <div className="space-y-8 overflow-hidden">
      {imageRows.map((images, index) => (
        <SliderRow
          key={index}
          images={images}
          direction={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
};

export default InfiniteSlider;
