import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const  auth  = useSelector((state) => state.auth);
    console.log('Auth: ', auth);
    return (<><h1>Header</h1> <h3>Hello {auth.login}</h3></>)
}

export default Header;