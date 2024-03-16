import React from 'react';
import { connect } from 'react-redux';
import './App.css'; 
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminDisplay from './components/Admin/AdminDisplay';
import TechSupportDisplay from './components/TechSupport/TechSupportDisplay';
import TicketDetails from './components/Ticket/TicketDetails';
import TicketList from './components/Ticket/TicketList';
import TicketForm from './components/User/TicketForm';
import UserDisplay from './components/User/UserDisplay';
import login from './services/api';


class App extends React.Component {

  async componentDidMount() {
    try {
      const credentials = {
        username: 'example_username',
        password: 'example_password'
      };
  
      // Assuming login function is imported correctly
      const userData = await login(credentials); 
      console.log(userData);  // Define userData here
    } catch (error) {
      console.error('Login failed:', error); 
    }
  }

  render() {
    return (
      <div className="App">
        <Login />
        <Register />
        <UserDisplay />
        <TicketForm />
        <AdminDisplay />
        <TechSupportDisplay />
        <TicketDetails />
        <TicketList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps)(App);
