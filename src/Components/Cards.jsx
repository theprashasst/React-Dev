import React from "react";
import biryani from '../assets/biryani.png'
export const Card = (props)=>(
    <div className="card">
        <div className="resImgContainer">
        <img src={biryani} className="resImg" ></img>
        </div>
        <div className="resContent">
            <h3>Name</h3>
            <h4>type</h4>
            <h5>4.5</h5>


        </div>
        

    </div>
);