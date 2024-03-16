import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTicket } from '../../features/ticket';
import './TicketForm.css';

const TicketForm = () => {
  const dispatch = useDispatch();
  const [ticketData, setTicketData] = useState({ title: '', description: '', attachment: null });

  const Input = (e) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };

  const File = (e) => {
    setTicketData({ ...ticketData, attachment: e.target.files[0] });
  };

  const Submit = (e) => {
    e.preventDefault();
    
    dispatch(createTicket(ticketData));
  };

  return (
    <div className="TicketForm">
      <h2>Ticket Form </h2>
      <form onSubmit={Submit}>
        <input
          type="text"
          name="title"
          value={ticketData.title}
          onChange={Input}
          placeholder="Title"
        />
        <textarea
          name="description"
          value={ticketData.description}
          onChange={Input}
          placeholder="Description"
        ></textarea>
        <input type="file" onChange={File} />
        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
};

export default TicketForm;
