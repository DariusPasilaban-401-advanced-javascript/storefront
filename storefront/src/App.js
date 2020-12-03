// import logo from './logo.svg';
import './App.css';

// ========
import React from 'react';

import Header from '../src/components/header/header.js';
import Footer from '../src/components/footer/footer.js';
import Categories from '../src/components/storefront/categories.js';
import ActiveCategory from '../src/components/storefront/current-category.js';
import Products from '../src/components/storefront/products.js';
// ========

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <ActiveCategory />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
