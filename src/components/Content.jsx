import React from "react";
import '../css/content.css';
import '../css/colors.css';
import Slider from './Slider';
import CarouselRatio from "./Carousel";
import Catalog from "./Catalog";



function Navbar() {
  return (
    <div class="main container">

      <div className="content-action">
        <div className="content-action-left">
        <div className="action-back-front">
          <a href="#prev" className="prev"><i class="fa-solid fa-chevron-left"></i></a>
          <a href="#prev" className="next"><i class="fa-solid fa-chevron-right"></i></a>
        </div>
        <input className="content-search" placeholder="Search"></input>
        </div>


        <div className="content-action-right">
          <a href="#home"><i class="fa-regular fa-bell"></i></a>
          <a href="#home"><i class="fa-regular fa-message"></i></a>

          <div className="user">
            <div className="user-avatar"></div>
            <div className="user-info">
              <span className="user-name">User Name</span>
              <span className="user-level">User level</span>
            </div>
          </div>
        </div>
      </div>


    <Slider/>
    <h2 className="section-title">Parties</h2>
    <CarouselRatio />
    <h2 className="section-title">Popular</h2>
    <Catalog />
    </div>
    
  );
}

export default Navbar;

