import React from 'react';
import { useSelector } from 'react-redux';
import './TicketDetails.css';

const TicketDetail = () => {
  // Get ticket detail
  const ticket = useSelector((state) => state.ticket.selectedTicket);

  // Check if ticket is null
  if (!ticket) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="TicketDetail">
      <h2>Ticket Detail</h2>
      <p>Title: {ticket.title}</p>
      <p>Description: {ticket.description}</p>
    </div>
  );
};

export default TicketDetail;
