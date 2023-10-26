import React from "react";
import { TicketForm } from "../components/TicketForm";
import { TicketDisplay } from "../components/TicketDisplay";
import { TicketDisplayByUser } from "../components/TicketUserInfo";

export function SubmitTicket(){
    return(
        <>
            <TicketForm></TicketForm>
            {/** put in tickets only made by users */}
        </>
    );
}