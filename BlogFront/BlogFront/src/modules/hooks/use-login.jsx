import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const TryLogin = (navigate) => {
    navigate("Login",{replace:true});
};

export function useLogin(){
    const navigate=useNavigate();
    useEffect(()=>{
        TryLogin(navigate);
    })
}

