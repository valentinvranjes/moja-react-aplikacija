import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import Solutions from "./Solutions";
import About from "./About";
import Adresa from "./Adresa";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/adresa/">Adresa</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/solutions/">Solutions</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/adresa" element={<Adresa/>} />
                    <Route path="/about/" element={<About/>} />
                    <Route path="/solutions/" element={<Solutions/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}