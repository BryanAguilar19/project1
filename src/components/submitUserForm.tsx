import { StdioNull } from "child_process";
import React, { SyntheticEvent, useState } from "react";


// function component named "submitUserForm" for Pages
export function SubmitUserForm(){
    //initialize state variables using useState
    const[userId, setUserId] = useState(0);
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[email, setEmail]= useState("");

    
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

    function handleSubmit(event: SyntheticEvent) {
        event.preventDefault(); // Prevent the default form submission behavior
      }
    //This will render to the User Form (pages)
    return (
        <>
        <div className="center-form">
            <form onSubmit={handleSubmit}>
            <h1>Creating User</h1>
            <h3>Insert Username</h3>
            <input
              type="text"
              value={username}
              onChange={updateSetUsername}
              required
            />
            <br />
            <h3>Insert Password</h3>
            <input
              type="password"
              value={password}
              onChange={updateSetPassword}
              required
            />
            <br />
            <h3>Insert Email</h3>
            <input
              type="email"
              value={email}
              onChange={updateSetEmail}
              required
            />
            <br />
            <br />
            <br />
            {/*TODO: Need to change the button TYPE to ONCLICK*/}
            <button className="light-blue-button" type="submit">Create User</button>
          </form>
          </div>
        </>
      );

}