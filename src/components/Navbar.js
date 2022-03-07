import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
          
        </nav>
      </div>
    </header>
  );
}
