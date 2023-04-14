import React from "react";



function Navbar() {
  return (
    <header className="header container">
     
     <div className="logo">Home Decor</div>

      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">Home</a></li>
          <li  className="nav-item"><a href="#">Contact</a></li>
          <li className="nav-item"><a href="#">About</a></li>
        </ul>
      </nav>

      <i class="fa-sharp fa-solid fa-bars"></i>

      
      
    </header>
    
  );
}

export default Navbar;

