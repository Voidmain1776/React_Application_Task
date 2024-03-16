import { combineReducers } from '@reduxjs/toolkit';
import authenticationReducer from './authentication'; // Corrected import statement
import ticketReducer from './ticket';

const rootReducer = combineReducers({
  auth: authenticationReducer, // Corrected reducer name
  ticket: ticketReducer,
  // Add other reducers as needed
});

export default rootReducer;
