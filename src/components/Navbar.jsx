import React from "react";
import '../css/navbar.css';


function Navbar() {
  return (
    <div class="sidenav">
      <a href="#logo" className="logo">Netflix</a>
      <span>Menu</span>
      <a href="#about"><i class="fa-regular fa-compass nav-icon"></i>Browse</a>
      <a href="#services"><i class="fa-regular fa-heart nav-icon"></i>Watchlist</a>
      <a href="#clients"><i class="fa-regular fa-calendar nav-icon"></i>Coming soon</a>
      <span>Social</span>
      <a href="#services"><i class="fa-regular fa-user nav-icon"></i>Frined</a>
      <a href="#clients"><i class="fa-regular fa-user nav-icon"></i>Parties</a>
      <span>General</span>
      <a href="#services"><i class="fa-regular fa-gear nav-icon"></i>Settings</a>
      <a href="#clients"><i class="fa-solid fa-arrow-right-from-bracket nav-icon"></i>Log out</a>
    </div>
    
  );
}

export default Navbar;

