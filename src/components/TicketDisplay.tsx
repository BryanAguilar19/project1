import React, { useEffect, useState } from "react";
import { Ticket } from "../models/ticket";
import { getTicketAPI } from "../service/TicketService";
import { TicketInfo } from "./TicketInfo";

export function TicketDisplay(){
    //Initialize a state variable of 'allTickets' to hold an array of Ticket objects.
    const [allTickets, setAllTickets] = useState<Ticket[]>([]);

    //It fetches data from an API using the getTicketAPI function.
    useEffect(()=>{
        getTicketAPI().then(response => {return response.json()})
        .then(json => {setAllTickets(json)
        console.log(json)
        });

    }, []);

    //return the mapping of the Tickets
    return(
        <>
            {allTickets.map(ticket => <TicketInfo ticket = {ticket}></TicketInfo>)}
        </>
    )
}