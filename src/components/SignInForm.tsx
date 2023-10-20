import React, { SyntheticEvent, useState } from "react";

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

    return(
        <>
            <div>
                <form className="center-form">
                    <h1>Sign In</h1>
                    <h3>Username</h3>
                    <input
                        type="text"
                        value={username}
                        onChange={updateSetUsername}
                        required
                    />
                 <br />
                    <h3>Password</h3>
                    <input
                        type="password"
                        value={password}
                        onChange={updateSetPassword}
                        required
                    />
                 <br />
                 <br />
                 <button className="light-blue-button">Sign In</button>
                </form>
            </div>
        </>
    );
}