import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AboutPage = () => {
  const { place } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate

  const placeDetails = {
    tajmahal: {
      name: "Taj Mahal",
      description: "The Taj Mahal, located in Agra, India, is an iconic symbol of love and a masterpiece of Mughal architecture. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this white marble mausoleum is renowned for its breathtaking beauty and intricate details.",
      images: [
        "https://th.bing.com/th/id/OIP._vkywyPP0Hr4EnPyVo65wwHaFn?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.uaokMPkxNVoBxPijZ_a0iwHaKk?rs=1&pid=ImgDetMain",
        "https://static2.bigstockphoto.com/3/1/2/large1500/213780904.jpg"
      ]
    },
    // Add more places here...
  };

  const details = placeDetails[place.toLowerCase()] || {};

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Handle button click to navigate to another page
  const handleButtonClick = () => {
    navigate('/form'); // Replace '/form' with your desired route
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      {details.name ? (
        <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex">
          <div className="w-3/5 h-auto">
            <Slider {...settings}>
              {details.images.map((image, index) => (
                <div key={index}>
                  <img 
                    src={image} 
                    alt={`Taj Mahal Image ${index + 1}`} 
                    className="w-full h-96 object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-2/5 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
                {details.name}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {details.description}
              </p>
            </div>
            <button 
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300"
              onClick={handleButtonClick}  // Add onClick event here
            >
              Get Tickets to There
            </button>
          </div>
        </div>
        
      ) : (
        <p className="text-lg text-center text-gray-700">Sorry, we don't have information about this place.</p>
      )}
    </div>
  );
};

export default AboutPage;
