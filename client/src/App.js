import React from 'react';
import './App.css';

import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import CartPage from 'pages/CartPage';

function App() {
  return (
    <div className="App">
      <ProductPage></ProductPage>
    </div>
  );
}

export default App;
