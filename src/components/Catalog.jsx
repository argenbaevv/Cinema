import React from "react";
import "../css/catalog.css";

function Catalog () {
  return (
    <section className="catalog">

      <div className="catalog-box">
      
        <img src="https://www.kino-teatr.ru/movie/poster/143787/145621.jpg"></img>
        <h5>Name Film</h5>
        <span className="film-genre">Drama</span>
      </div>

    </section>
  );
}

export default Catalog;