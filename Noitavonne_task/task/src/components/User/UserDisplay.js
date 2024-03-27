import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTicket } from '../../features/ticket';
import TicketForm from './TicketForm';
import './UserDisplay.css';

const UserDisplay = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticket.tickets);

  const handleTicketSelect = (ticketId) => {
    dispatch(selectTicket(ticketId));
  };

  return (
    <div className="UserDisplay">
      <h1>User Display</h1>
      <TicketForm />
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <div>{ticket.title}</div>
            <button onClick={() => handleTicketSelect(ticket.id)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDisplay;