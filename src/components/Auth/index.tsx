import { useCallback, useContext, useEffect } from "react";
// Context
import { formContext } from "../contexts/FormContext";
// React Router Hooks
import {  useLocation, useNavigate } from "react-router-dom";
// Types
import { AuthCheckProps } from "../types";


function Authorize({children}: AuthCheckProps){

const {value} = useContext(formContext);

const navigate = useNavigate();
const {pathname} = useLocation();

const AuthCheck =  useCallback(() => {
    if(!value.isLoggedIn){
        navigate("/")
    }
}, [pathname])
useEffect(()=>{
    AuthCheck();
},[])
    return(
        <>
            {children}
        </>
    )
}

export default Authorize;