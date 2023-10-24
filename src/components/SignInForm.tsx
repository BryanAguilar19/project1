import React, { SyntheticEvent, useState } from "react";
import { getUserAPI } from "../service/userService";

//Sign in page
export function SignInForm(){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    
    function updateSetUsername(event: SyntheticEvent){
        let box = event.target as HTMLTextAreaElement;
        setUsername(box.value);
    }
    function updateSetPassword(event: SyntheticEvent){
        let box = event.target as HTMLTextAreaElement;
        setPassword(box.value);
    }

    function processLogin(){
        getUserAPI();
    }
    return(
        <>
            <div className="center-form">
                    <h1>Sign In</h1>
                    <h3>Username</h3>
                    <input value={username} onChange={updateSetUsername}></input>
                    <h3>Password</h3>
                    <input value={password} onChange={updateSetPassword}></input>
                 <button className="light-blue-button" onClick={processLogin}>Sign In</button>
            </div>
        </>
    );
}