// File: src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  &:hover {
    color: #007bff;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
        </FooterLinks>
        <SocialIcons>
          <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </SocialIcon>
          <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;