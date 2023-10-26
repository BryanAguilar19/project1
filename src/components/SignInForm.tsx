import React, { SyntheticEvent, useContext, useState } from "react";
import { getUserAPI } from "../service/userService";
import { loginUserAPI } from "../service/loginService";
import { UsersContext } from "../App";
import { AuthContext } from "../context/auth-provider";

//Sign in page
export function SignInForm(){

    const{setAuth} = React.useContext(AuthContext);
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

    function processLogin() {
        loginUserAPI(username, password)
          .then(response => {
            console.log("Login Successful");
            alert("Login Successful");
            console.log(response);
            setAuth(response.data);
          })
          .catch(error => {
            console.log("Login Failed");
            alert("Login Failed");
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
                    <br />
                    <br />
                    <button className="light-blue-button" onClick={processLogin}>Sign In</button>
            </div>
        </>
    );
}