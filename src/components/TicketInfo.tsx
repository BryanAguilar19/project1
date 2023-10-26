import React, { useState } from "react";
import { Ticket } from "../models/ticket";
import { AuthContext } from "../context/auth-provider";
import { TicketDisplayByUser } from "./TicketUserInfo";

interface TicketProps{
    ticket: Ticket
}

export function TicketInfo(props: TicketProps){

    const [status, setStatus] = useState(props.ticket.status);

    const toggleStatus = () => {
        setStatus(!status);
      };
    
    return (
        <>
            <div className="center-form">
                <h4>ID: {props.ticket.id}</h4>
                <h4>Status: {status ? "Resolved" : "Unresolved"}</h4>
                <h4>Description: {props.ticket.description}</h4>
                <button onClick={toggleStatus}>Resolve Status</button>
            </div>
        </>
    )
}