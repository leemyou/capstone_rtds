import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return(
        <>
            <Link to='/'>HOME</Link>
            <Link to='/about'>about</Link>
        </>
    )
}

export default Navigation;