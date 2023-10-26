import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterUserPage } from './pages/registerUserPage';
import { Navbar } from './components/navbar';
import { HomePage } from './pages/homePage';
import { ListAllTicketsPage } from './pages/listAllTicketsPage';
import { ResolvedTicketsPage } from './pages/unresolvedTicketsPage';
import { createContext } from 'react';
import { User } from './models/User';
import { SubmitTicket } from './pages/submitTicket';
import AuthProvider from './context/auth-provider';

//Create a context called UsersContext with a user object and a setUser function.
export const UsersContext = createContext(
 {user: {userId: 0, username: " ", password: " ", email: " ", admin: false}, 
 setUser:(user: User)=>{}}
);


function App() {
  //Initialize the user state using the useState hook
  const [user, setUser] = useState<User>({ 
    userId: 0, 
    username: " ", 
    password: " ", 
    email: " ", 
    admin: false 
  });
  
  //Create a variable ctx to hold the user state and setUser function
  const ctx = {user, setUser}
  
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
       <Navbar></Navbar>
       <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/register' element={<RegisterUserPage></RegisterUserPage>}></Route>
          <Route path='/viewTickets' element={<ListAllTicketsPage></ListAllTicketsPage>}></Route>
          <Route path='/unresolvedTickets' element={<ResolvedTicketsPage></ResolvedTicketsPage>}></Route>
          <Route path='/submitTicket' element={<SubmitTicket></SubmitTicket>}></Route>
       </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;