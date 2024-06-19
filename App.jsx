import React from "react";
import ReactDom from "react-dom/client";
import { Header } from "./src/Components/Header";
import { Search } from "./src/Components/Search";
import { Card } from "./src/Components/Cards";

const root = ReactDom.createRoot(document.getElementById("root"));

const App= ()=>(
    
    <div>
        <Header></Header>
        <div className="container">
            <Search></Search>
            <div className="cardsContainer">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>

        </div>
        
    </div>
    
);



root.render(<App/>);

