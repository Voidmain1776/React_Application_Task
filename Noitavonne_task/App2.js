// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';


// export default function App(){

//   return(
//     <div>
//       <BrowserRouter>
//         <Routes>

//           <Route index element={<Login/>}></Route>
//           <Route path="/login" element={<Login/>}></Route>

//           <Route index element={<Register/>}></Route>
//           <Route path="/register" element={<Register/>}></Route>

//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

import React from 'react';
import './App.css'; 
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminDisplay from './components/Admin/AdminDisplay';
import TechSupportDisplay from './components/TechSupport/TechSupportDisplay'
import TicketDetails from './components/Ticket/TicketDetails';
import TicketList from './components/Ticket/TicketList';
import TicketForm from './components/User/TicketForm';
import UserDisplay from './components/User/UserDisplay';
import Authentication from './features/authentication';
import Root from './features/root';
import Ticket from './features/ticket';
import Api from './services/api';
import Auth from './utils/authentication';
import { login } from './services/api';

class App extends React.Component{

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
      <div className="App">
      <Login></Login>
      <Register></Register>
      <AdminDisplay></AdminDisplay>
      <TechSupportDisplay></TechSupportDisplay>
      <TicketDetails></TicketDetails>
      <TicketList></TicketList>
      <TicketForm></TicketForm>
      <UserDisplay></UserDisplay>
      <Authentication></Authentication>
      <Root></Root>
      <Ticket></Ticket>
      <Api></Api>
      <Auth></Auth>
      </div>
    );
  }
}
export default App;
