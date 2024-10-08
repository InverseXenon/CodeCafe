// File: src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  background-color: #fff;
  padding: 2rem;
  box-shadow: -2px 0 4px rgba(0,0,0,0.1);
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Urban Cafe</Logo>
        <NavLinks>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/reservations">Reservations</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/events-blog">Events & Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </Nav>
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <NavLink to="/menu" onClick={() => setMobileMenuOpen(false)}>Menu</NavLink>
          <NavLink to="/reservations" onClick={() => setMobileMenuOpen(false)}>Reservations</NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/events-blog" onClick={() => setMobileMenuOpen(false)}>Events & Blog</NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;