import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../App";
import { AuthContext } from "../context/auth-provider";


export function Navbar(){

  const{auth,setAuth} = React.useContext(AuthContext);

  function logoutProcess(){
    setAuth(null);
  }
  
   return(
    <>
      <div className="navigation-bar">
      { auth ? (
        <div>
          <Link to="/">Home</Link>
          <Link to="/register">Registration</Link>
          
          {auth.admin ? (
            <>
              <Link to="/viewTickets">View Tickets</Link>
              <Link to="/unresolvedTicket">Resolved Tickets</Link>
            </>
          ) : (
              <Link to="/submitTicket">Submit Tickets</Link>
          )}
          <button onClick={logoutProcess}>LOG OUT</button>
        </div>
        ): (
          <div>
              <Link to="/">Home</Link>
              <Link to="/register">Registration</Link>
          </div>
        )}
      </div>
      
    </>
   );
}