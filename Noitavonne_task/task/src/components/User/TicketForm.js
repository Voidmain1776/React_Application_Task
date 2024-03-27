import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTicket } from '../../features/ticket';
import './TicketForm.css';

const TicketForm = () => {
  const dispatch = useDispatch();
  const [ticketData, setTicketData] = useState({ title: '', description: '', attachment: null });

  const handleInput = (e) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setTicketData({ ...ticketData, attachment: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket(ticketData));
    // Clear form after submission
    setTicketData({ title: '', description: '', attachment: null });
  };

  return (
    <div className="TicketForm">
      <h2>Ticket Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={ticketData.title}
          onChange={handleInput}
          placeholder="Title"
        />
        <textarea
          name="description"
          value={ticketData.description}
          onChange={handleInput}
          placeholder="Description"
        ></textarea>
        <input type="file" onChange={handleFile} />
        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
};

export default TicketForm;
