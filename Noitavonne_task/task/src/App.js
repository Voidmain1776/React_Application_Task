import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css'; 
import Home from './headers/home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminDisplay from './components/Admin/AdminDisplay';
import TechSupportDisplay from './components/TechSupport/TechSupportDisplay';
import TicketDetails from './components/Ticket/TicketDetails';
import TicketList from './components/Ticket/TicketList';
import TicketForm from './components/User/TicketForm';
import UserDisplay from './components/User/UserDisplay';
import { login } from './services/api';

class App extends React.Component {

  async componentDidMount() {
    try {
      const credentials = {
        username: 'example_username',
        password: 'example_password'
      };
  
      const userData = await login(credentials); 
      console.log(userData); 
    } catch (error) {
      console.error('Login failed:', error); 
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/ticket/:id" element={<TicketDetails />} />
              <Route path="/TicketList" element={<TicketList />} />
              <Route path="/TicketForm" element={<TicketForm />} />
              <Route path="/user" element={<UserDisplay />} />
              <Route path="/admin" element={<AdminDisplay />} />
              <Route path="/tech-support" element={<TechSupportDisplay />} />
            </Routes>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps)(App);