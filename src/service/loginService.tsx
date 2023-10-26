import React from "react";
import axios, { AxiosResponse } from "axios"

export function loginUserAPI(username: string, password: any): Promise<AxiosResponse<any,any>> {
    let res = axios.post("http://localhost:8080/login",
        {
         username: username,
         password: password
        }
    );
    return res;
}
