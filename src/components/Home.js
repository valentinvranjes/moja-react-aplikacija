import React, { Component } from "react";

export default class Home extends Component {
    render () {
        return (
        <div>
        <h2>Home</h2>
            <p>Stranica se moće navigirati preko URL-a</p>
            <p>za Kontakt stranicu u URL traku upišite http://localhost:3000/home/</p>
            <p>za stranicu Adresa u URL traku upišite http://localhost:3000/adresa/</p>
        </div> 
        );
    }
}