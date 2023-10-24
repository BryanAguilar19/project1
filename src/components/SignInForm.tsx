import React, { SyntheticEvent, useContext, useState } from "react";
import { getUserAPI } from "../service/userService";
import { loginUserAPI } from "../service/loginService";

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
        loginUserAPI(username, password).then(() => {
            console.log("Login Successfull");
            alert("Login Success");
        }).catch(() =>{
            console.log("Login Failed");
            alert("Login Fail");
        });
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