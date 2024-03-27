import { combineReducers } from '@reduxjs/toolkit';
import authenticationReducer from './authentication';
import ticketReducer from './ticket';

const rootReducer = combineReducers({
  auth: authenticationReducer,
  ticket: ticketReducer,
});

export default rootReducer;
