import React from "react";
import { SignInForm } from "../components/SignInForm";

export function HomePage(){
    return(
        <>
        <div className="home">
            <br />
             <h1> Welmome to the Ticketing Master Homepage</h1>
             <SignInForm></SignInForm>
             <br />
             <br />
        </div>
        
        </>
    );
}