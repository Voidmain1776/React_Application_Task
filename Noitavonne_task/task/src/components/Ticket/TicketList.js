import React from 'react';
import { useSelector } from 'react-redux';
import './TicketList.css';

const TicketList = () => {
  // Get tickets
  const tickets = useSelector((state) => state.ticket.tickets);

  return (
    <div className="TicketList">
      <h2>Ticket List</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>{ticket.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
