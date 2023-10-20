import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterUserPage } from './pages/registerUserPage';
import { Navbar } from './components/navbar';
import { HomePage } from './pages/homePage';
import { ListAllTicketsPage } from './pages/listAllTicketsPage';
import { UnresolvedTicketsPage } from './pages/unresolvedTicketsPage';



function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar></Navbar>
       <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/register' element={<RegisterUserPage></RegisterUserPage>}></Route>
          <Route path='/viewTickets' element={<ListAllTicketsPage></ListAllTicketsPage>}></Route>
          <Route path='/unresolvedTickets' element={<UnresolvedTicketsPage></UnresolvedTicketsPage>}></Route>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;