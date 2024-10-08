// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import ReservationPage from './components/ReservationPage';
import AboutUsPage from './pages/AboutUsPage';
import EventsBlogPage from './pages/EventsBlogPage';
import ContactPage from './pages/ContactPage';
import NewsletterPopup from './components/NewsletterPopup';
import LiveChat from './components/LiveChat';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f9f9f9;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservations" element={<ReservationPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/events-blog" element={<EventsBlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <NewsletterPopup />
        <LiveChat />
      </AppContainer>
    </Router>
  );
};

export default App;