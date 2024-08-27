import React from 'react';
import { useParams } from 'react-router-dom';

const AboutPage = () => {
  const { place } = useParams();

  const placeDetails = {
    paris: {
      name: "Paris",
      description: "Paris, the capital of France, is known for its art, fashion, gastronomy, and culture.",
      image: "/images/paris.jpg",
    },
    london: {
      name: "London",
      description: "London, the capital of England and the United Kingdom, is a 21st-century city with a rich history.",
      image: "/images/london.jpg",
    },
    // Add more places here...
  };

  const details = placeDetails[place.toLowerCase()] || {};

  return (
    <div className="p-6">
      {details.name ? (
        <>
          <h1 className="text-4xl font-bold mb-4">{details.name}</h1>
          <img src={details.image} alt={details.name} className="w-full h-64 object-cover mb-4" />
          <p className="text-lg">{details.description}</p>
        </>
      ) : (
        <p className="text-lg">Sorry, we don't have information about this place.</p>
      )}
    </div>
  );
};

export default AboutPage;
