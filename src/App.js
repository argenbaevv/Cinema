import React from 'react';
import './App.css';
import catalog from './catalog';
import Card from './Card';
import Navbar from './Navbar';
import Galery from './Galery';
import galery from './components/galery';

function createCard(catalog) {
  return (
    <Card
      key={catalog.id}
      productName={catalog.productName}
      imgUrl={catalog.imgUrl}
      price={catalog.price}
      productDesc={catalog.productDesc}
    />
  );
}

function createGalery() {
  return (
    <Galery 
      key={galery.id}
      imgUrl={catalog.imgUrl}
    />
  );
}




function App() {
  return (
  <div className='main'>
  <header><Navbar/></header>

  <div>
      <section className="hero container">
        <div className="hero-title"></div>
        <div className="catalog">{catalog.map(createCard)}</div>
      </section> 
  </div>


  </div>
  );
}

export default App;

