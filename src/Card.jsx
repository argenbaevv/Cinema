import React from "react";



function Card(props) {
  return (

    <div className="catalog-box">

      <div class="product">
				<div class="product-img">
					<a href="#"><img src={props.imgUrl}/></a>
				</div>
				<p class="product-title">
					<a href="#">{props.productName}</a>
				</p>
				<p class="product-desc">{props.productDesc}</p>
				<p class="product-price">{props.price}</p>
			</div>

    </div>
  );
}

export default Card;

