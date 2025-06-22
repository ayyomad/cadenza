import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BuyInstruments.css';

const BuyInstruments = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/')
      .then((res) => setProducts(res.data.products.slice(0, 10)))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <section className="buy-instruments">
      <h2 className="buy-heading">Buy Instruments</h2>
      <div className="instrument-grid">
        {products.map((product) => (
          <div className="instrument-card" key={product.id}>
            <img
              className="instrument-img"
              src={product.thumbnail}
              alt={product.title}
            />
            <div className="instrument-info">
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BuyInstruments;
