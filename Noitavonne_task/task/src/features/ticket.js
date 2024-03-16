import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [
    { id: 1, title: 'Ticket 1', description: 'Description 1' },
    { id: 2, title: 'Ticket 2', description: 'Description 2' },
    { id: 3, title: 'Ticket 3', description: 'Description 3' },
  ],
  selectedTicket: null,
};

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    createTicket(state, action) {
      // ticket creation logic
      const newTicket = { id: state.tickets.length + 1, ...action.payload };
      state.tickets.push(newTicket);
    },
    selectTicket(state, action) {
      state.selectedTicket = state.tickets.find((ticket) => ticket.id === action.payload);
    },
    closeTicket(state, action) {
      // closing ticket logic
      const ticketIndex = state.tickets.findIndex((ticket) => ticket.id === action.payload);
      if (ticketIndex !== -1) {
        state.tickets.splice(ticketIndex, 1);
      }
      state.selectedTicket = null;
    },
  },
});

export const { createTicket, selectTicket, closeTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
