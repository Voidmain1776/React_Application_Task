import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTicket, closeTicket } from '../../features/ticket';
import './TechSupportDisplay.css';

const TechSupportDisplay = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticket.tickets);

  const TicketSelect = (ticketId) => {
    dispatch(selectTicket(ticketId));
    
  };

  const TicketClose = (ticketId) => {
    dispatch(closeTicket(ticketId));
    
  };

  return (
    <div className="TechSupportDisplay">
      <h1>Tech Support Dashboard</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <div>{ticket.title}</div>
            <button onClick={() => TicketSelect(ticket.id)}>View</button>
            <button onClick={() => TicketClose(ticket.id)}>Close</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechSupportDisplay;
