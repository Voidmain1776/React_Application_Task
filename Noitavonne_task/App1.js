import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserDisplay from './components/User/UserDisplay';
import TechSupportDisplay from './components/TechSupport/TechSupportDisplay';
import AdminDisplay from './components/Admin/AdminDisplay';
import TicketList from './components/Ticket/TicketList';
import TicketDetail from './components/Ticket/TicketDetails';

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/user/Display" component={UserDisplay} />
            <Route path="/tech-support/Display" component={TechSupportDisplay} />
            <Route path="/admin/Display" component={AdminDisplay} />
            <Route path="/tickets" component={TicketList} />
            <Route path="/ticket/:id" component={TicketDetail} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
