import React from "react";
import { FaBeer } from 'react-icons/fa';
import { FaIcons, FaMagnifyingGlass } from "react-icons/fa6";






export const Search= ()=>{
    return (
        <div className="Search">
            <input className="inputText" placeholder="Search"></input>
            <FaMagnifyingGlass className="searchIcon"></FaMagnifyingGlass>

            
            
        </div>

    )
}