import { StdioNull } from "child_process";
import React, { SyntheticEvent, useState } from "react";
import { postUserAPI } from "../service/userService";
import { User } from "../models/User";

/**
 * 
 * This Page many handles the Create User Page
 */

// function component named "submitUserForm" for Pages
export function SubmitUserForm(){
    //initialize state variables using useState
    const[userId, setUserId] = useState(0);
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[email, setEmail] = useState("");
    const[admin, setAdmin] = useState(false);
    
    // Updating UserID based on user input
    function updateSetUserId (event: SyntheticEvent){
        let box = event.target as HTMLTextAreaElement;
        setUserId(parseInt(box.value));
    }
    
    // Updating "setUserName" based on user input
    function updateSetUsername (event:SyntheticEvent){
        let box = event.target as HTMLTextAreaElement;
        setUsername(box.value);
    }

    // Updating "setPassword" based on user input
    function updateSetPassword (event:SyntheticEvent){
        let box = event.target as HTMLTextAreaElement;
        setPassword(box.value);
    }

    // Updating "setEmail" based on user input
    function updateSetEmail(event:SyntheticEvent){
    let box = event.target as HTMLTextAreaElement;
        setEmail(box.value);
    }

    // updating "setIsAdmin" based on user input
    function updateAdmin(event:SyntheticEvent){
      let box = event.target as HTMLInputElement
         setAdmin(box.checked);
    }

    function attemptPostAPI(){
      let user = {
        userId: userId,
        username: username,
        password: password,
        email: email,
        admin: admin
      }
      postUserAPI(user);
      console.log("User Created!!");
      alert("The acount '"+ username +"' has been created");
    }
    //This will render to the User Form (pages)
    return (
        <>
        <div className="center-form">
            <h1>Creating User</h1>
            <h3>Insert Username</h3>
            <input value={username} onChange={updateSetUsername} required></input>
            <br />
            <h3>Insert Password</h3>
            <input value={password} onChange={updateSetPassword} required></input>
            <br />
            <h3>Insert Email</h3>
            <input value={email} onChange={updateSetEmail} required></input>
            <h3>Are you an Admin?</h3>
            <input type="checkbox" checked={admin} onChange={updateAdmin} />
            <br />
            <br />
            <button className="light-blue-button" onClick={attemptPostAPI}>Create User</button>
          </div>
        </>
      );

}