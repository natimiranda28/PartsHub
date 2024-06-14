import React from "react";
import "./styles.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;

