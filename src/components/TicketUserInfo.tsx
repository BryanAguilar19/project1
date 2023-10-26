import React, { useContext, useEffect, useState } from "react";
import { Ticket } from "../models/ticket";
import { getTicketByUserIdAPI } from "../service/TicketService";
import { UsersContext } from "../App";
import { AuthContext } from "../context/auth-provider";
import { TicketInfo } from "./TicketInfo";
import { TicketInfoCard } from "./TicketInfoCard";

export function TicketDisplayByUser(){
    //Initialize a state variable of 'allTickets' to hold an array of Ticket objects.
    const [allTicketsByUser, setAllTicketsByUser] = useState<Ticket[]>([]);
    const {auth} = useContext(AuthContext)

    //It fetches data from an API using the getTicketByUserIdAPI function.
    useEffect(()=>{
        const userId: number = auth?.userId! ;

        getTicketByUserIdAPI(userId).then(response => {return response.json()})
        .then(json => {setAllTicketsByUser(json)
        console.log(json)
        });

    }, []);

    //return the mapping of the Tickets
    return(
        <>
            {allTicketsByUser.map(ticket => <TicketInfoCard ticket = {ticket}></TicketInfoCard>)}
        </>
    )
}