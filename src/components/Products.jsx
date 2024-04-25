import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Electronics() {
  return (
    <div>
      <h2>Electronics</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '10px' }}>
          <h3>Phone</h3>
          <p>A modern smartphone with advanced features.</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '10px' }}>
          <h3>Tablet</h3>
          <p>A lightweight tablet with a high-resolution screen.</p>
        </div>
      </div>
    </div>
  );
}

function Cars() {
  return (
    <div>
      <h2>Cars</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '10px' }}>
          <h3>SUV</h3>
          <p>A comfortable SUV with ample space.</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '10px' }}>
          <h3>Convertible</h3>
          <p>A sleek convertible for a fun ride.</p>
        </div>
      </div>
    </div>
  );
}

function Sports() {
  return (
    <div>
      <h2>Sports Items</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '10px' }}>
          <h3>Football</h3>
          <p>A high-quality football for professional play.</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '10px' }}>
          <h3>Tennis Racket</h3>
          <p>A sturdy tennis racket for competitive games.</p>
        </div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h2>Products</h2>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/products/electronics" style={{ marginRight: '10px' }}>Electronics</Link>
          <Link to="/products/cars" style={{ marginRight: '10px' }}>Cars</Link>
          <Link to="/products/sports" style={{ marginRight: '10px' }}>Sports Items</Link>
        </nav>

        <Switch>
          <Route path="/products/electronics" component={Electronics} />
          <Route path="/products/cars" component={Cars} />
          <Route path="/products/sports" component={Sports} />
        </Switch>
      </div>
    </Router>
  );
}

export default Products;
