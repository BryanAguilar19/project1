import { Http2ServerResponse } from "http2";
import React, { SyntheticEvent, useContext, useState } from "react";
import { UsersContext } from "../App";
import { User } from "../models/User";
import { Ticket } from "../models/ticket";
import { postTicketAPI } from "../service/TicketService";
import { AuthContext } from "../context/auth-provider";

/**
 * This function will retrieve the information of the Ticket
 * The ticket should  have an:
 *      - ID
 *      - Status
 *      - Description
 * 
 * A page to submit a new ticket. The user must submit a description. 
 * A ticket should have its ID and its unresolved status be generated automatically by the application.
 */

export function TicketForm(){

    const{auth} = React.useContext(AuthContext);
    
    const [id, setTicketId] = useState(0);
    const [status, setTicketStatus] = useState(false);
    const [description, setTicketDescrption] = useState(" ");
    const [user, setUserName] = useState(" ")
    
    function updateTicketDescription(event: SyntheticEvent){
        let box = event.target as HTMLTextAreaElement
        setTicketDescrption(box.value);
    }

    function attemptSubmitTicket(){
        let ticket = {
           id:id,
           status: status,
           description:description,
           user: user
        }
        postTicketAPI(ticket)
        console.log("ticket submited");
        alert("ticket submitted")
    }

    return(
        <>
        <div className="center-form">
            <h1>Ticket Submision</h1>
            <p>Hello {auth?.username}, please submit your ticket with a description</p>
            <textarea value={description} onChange={updateTicketDescription} />
            <br />
            <br />
            <button className="light-blue-button" onClick={attemptSubmitTicket}>Submit Ticket</button>
        </div>  
        </>
    );

}