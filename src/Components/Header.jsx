import React from "react";
import logo from "../assets/swiggyLogo.png"

const Logo= ()=>(
    <div className="logo">
        <img src={logo}></img>
    </div>
);

const Ul= ()=>(
    <ul>
        <li >Hello</li>
        <li >Beautiful</li>
        <li >World</li>
    </ul>
);

export const Header= ()=>(
    <div className="header">
        <Logo></Logo>
        <Ul></Ul>
    </div>
);