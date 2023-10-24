import { User } from "../models/User";

export function postUserAPI(User: User){
    return fetch("http://localhost:8080/user", {
        mode:"cors",
        method:"POST",
        headers:{
            "access-control-allow-origin":"*",
            "access-control-allow-headers":"*",
            "access-control-allow-method":"GET,POST",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            id:User.userId,
            username:User.username,
            password:User.password,
            email:User.email
        })
    })
}

export function getUserAPI():Promise<Response>{

    return fetch("http://localhost:8080/user", {
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



