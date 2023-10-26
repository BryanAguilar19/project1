import React, { useEffect } from "react";
import { Ticket } from "../models/ticket";
import { AxiosResponse } from "axios";
import axios from "axios";

export async function postTicketAPI(Ticket: Ticket){
    return await fetch("http://localhost:8080/ticket", {
        mode:"cors",
        method:"POST",
        headers:{
            "access-control-allow-origin":"*",
            "access-control-allow-headers":"*",
            "access-control-allow-method":"GET,POST",
            "content-type":"application/json"
        },
        body:JSON.stringify({
           id: Ticket.id,
           status: Ticket.status,
           description: Ticket.description,
           user: Ticket.username
        })
    })
}

export function getTicketAPI():Promise<Response>{

    return fetch("http://localhost:8080/ticket", {
        mode:"cors",
        method:"GET",
        headers:{
            "access-control-allow-origin":"*",
            "access-control-allow-headers":"*",
            "access-control-allow-method":"GET,POST",
            "content-type":"application/json"
        }
    })
}

export function getTicketByUserIdAPI(userId: number): Promise<Response>{

    return fetch(`http://localhost:8080/users/${userId}/ticket`, {
        mode:"cors",
        method:"GET",
        headers:{
            "access-control-allow-origin":"*",
            "access-control-allow-headers":"*",
            "access-control-allow-method":"GET,POST",
            "content-type":"application/json"
        }
    })
}