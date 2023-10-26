import { type } from "os";
import React from "react";
import { User } from "../models/User";


type AuthContextType = {
    auth: User | null;
    setAuth: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);


interface AuthProviderProp{
    children: React.ReactNode
}

export default function AuthProvider({children} : AuthProviderProp){
  const[auth, setAuth] = React.useState<User|null>(null);

  return(
    <>
        <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>
    </>
  )
}