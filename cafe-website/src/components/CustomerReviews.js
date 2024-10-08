// File: src/components/CustomerReviews.js
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const ReviewCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1.5rem;
  margin: 0.5rem;
`;

const ReviewText = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
`;

const ReviewAuthor = styled.p`
  font-weight: bold;
`;

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const reviews = [
    { id: 1, text: "The coffee here is amazing! I love the atmosphere too.", author: "John D." },
    { id: 2, text: "Best croissants in town. I come here every weekend.", author: "Sarah M." },
    { id: 3, text: "Great place to work remotely. Fast Wi-Fi and friendly staff.", author: "Mike L." },
  ];

  return (
    <ReviewContainer>
      <h2>What Our Customers Say</h2>
      <Slider {...settings}>
        {reviews.map(review => (
          <ReviewCard key={review.id}>
            <ReviewText>"{review.text}"</ReviewText>
            <ReviewAuthor>- {review.author}</ReviewAuthor>
          </ReviewCard>
        ))}
      </Slider>
    </ReviewContainer>
  );
};

export default CustomerReviews;