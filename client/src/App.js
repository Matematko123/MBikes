import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import CartPage from 'pages/CartPage';
import AdminPage from 'pages/AdminPage';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { clearState } from './redux/userRedux';

function App() {
  // @ts-ignore
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  //dispatch(clearState());

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:category" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/admin"
            element={
              // @ts-ignore
              user.isAdmin ? <AdminPage /> : <Navigate to="/login" replace />
            }
          />

          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/register"
            element={
              user.length ? <Navigate to="/" replace /> : <RegisterPage />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
