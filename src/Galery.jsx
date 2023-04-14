import React from "react";

function Galery(props) {
  return (
    <div className="galery container">
      <div className="galery-box">

        <div className="galery-item">
          <a href="#">
            {props.imgUrl}
          </a> 
        </div>
        
      </div>
      
    </div>
  );
}

export default Galery;