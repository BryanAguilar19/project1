import React from "react";
import { Link } from "react-router-dom";


export function Navbar(){
   return(
    <>
      <div className="navigation-bar">
      <Link to="/">Home</Link>
      <Link to="/register">Registration</Link>
      <Link to="/viewTickets"> View Tickets</Link>
      <Link to="/unresolevedTicket">Unresolved Tickets</Link>
      </div>
    </>
   );
}