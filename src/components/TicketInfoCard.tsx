import React from "react"
import { Ticket } from "../models/ticket"
interface TicketProps{
    ticket: Ticket
}

export function TicketInfoCard(props: TicketProps){
    
    return (
        <>
            <div className="center-form">
                <h4>ID: {props.ticket.id}</h4>
                <h4>Status: {`${props.ticket.status}`}</h4>
                <h4>Description: {props.ticket.description}</h4>
            </div>
        </>
    )
}