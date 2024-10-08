// File: src/pages/ReservationPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const ReservationContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the reservation data to a server
    console.log('Reservation submitted:', { name, email, date, time, guests });
    // Reset form or show confirmation message
  };

  return (
    <ReservationContainer>
      <h1>Make a Reservation</h1>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <Input 
          type="email" 
          placeholder="Your Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <DatePicker 
          selected={date} 
          onChange={(date) => setDate(date)} 
          minDate={new Date()} 
          required 
        />
        <Select value={time} onChange={(e) => setTime(e.target.value)} required>
          <option value="">Select Time</option>
          <option value="18:00">6:00 PM</option>
          <option value="19:00">7:00 PM</option>
          <option value="20:00">8:00 PM</option>
          <option value="21:00">9:00 PM</option>
        </Select>
        <Select value={guests} onChange={(e) => setGuests(Number(e.target.value))} required>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5 Guests</option>
          <option value="6">6 Guests</option>
        </Select>
        <Button type="submit">Make Reservation</Button>
      </Form>
    </ReservationContainer>
  );
};

export default ReservationPage;