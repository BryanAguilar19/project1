import { User } from "../models/User";

export async function postUserAPI(User: User){
    return await fetch("http://localhost:8080/register", {
        mode:"cors",
        method:"POST",
        headers:{
            "access-control-allow-origin":"*",
            "access-control-allow-headers":"*",
            "access-control-allow-method":"GET,POST",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            userId:User.userId,
            username:User.username,
            password:User.password,
            email:User.email,
            admin:User.admin,
        })
    })
}

export function getUserAPI():Promise<Response>{

    return fetch("http://localhost:8080/register", {
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



