// File: src/pages/MenuPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const MenuContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#007bff' : '#f0f0f0'};
  color: ${props => props.active ? '#fff' : '#333'};
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#0056b3' : '#e0e0e0'};
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const MenuItem = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 1rem;
  text-align: center;
`;

const MenuItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const MenuItemTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const MenuItemPrice = styled.p`
  font-weight: bold;
  color: #007bff;
`;

// Sample menu data
const menuItems = [
  { id: 1, name: 'Espresso', category: 'coffee', price: 2.50, image: '/path-to-espresso-image.jpg' },
  { id: 2, name: 'Cappuccino', category: 'coffee', price: 3.50, image: '/path-to-cappuccino-image.jpg' },
  { id: 3, name: 'Croissant', category: 'pastries', price: 2.00, image: '/path-to-croissant-image.jpg' },
  { id: 4, name: 'Green Tea', category: 'tea', price: 2.50, image: '/path-to-green-tea-image.jpg' },
  // Add more items as needed
];

const MenuPage = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === filter);

  return (
    <MenuContainer>
      <h1>Our Menu</h1>
      <FilterContainer>
        <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>All</FilterButton>
        <FilterButton active={filter === 'coffee'} onClick={() => setFilter('coffee')}>Coffee</FilterButton>
        <FilterButton active={filter === 'tea'} onClick={() => setFilter('tea')}>Tea</FilterButton>
        <FilterButton active={filter === 'pastries'} onClick={() => setFilter('pastries')}>Pastries</FilterButton>
      </FilterContainer>
      <MenuGrid>
        <AnimatePresence>
          {filteredItems.map(item => (
            <MenuItem
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MenuItemImage src={item.image} alt={item.name} />
              <MenuItemTitle>{item.name}</MenuItemTitle>
              <MenuItemPrice>${item.price.toFixed(2)}</MenuItemPrice>
            </MenuItem>
          ))}
        </AnimatePresence>
      </MenuGrid>
    </MenuContainer>
  );
};

export default MenuPage;