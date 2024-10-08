// File: src/pages/HomePage.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = styled.div`
  height: 70vh;
  background-image: url('/path-to-your-image.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  text-align: center;
  color: #fff;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
`;

const QuickLinksSection = styled.section`
  padding: 4rem 2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const QuickLinkCard = styled(motion.div)`
  background-color: #fff;
  padding: 2rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  width: 200px;
`;

const HomePage = () => {
  return (
    <div>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Urban Cafe
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your Urban Escape for Coffee and Conversations
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <QuickLinksSection>
        <QuickLinkCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/menu">Our Menu</Link>
        </QuickLinkCard>
        <QuickLinkCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/reservations">Make a Reservation</Link>
        </QuickLinkCard>
        <QuickLinkCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/contact">Contact Us</Link>
        </QuickLinkCard>
      </QuickLinksSection>
    </div>
  );
};

export default HomePage;