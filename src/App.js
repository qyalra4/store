// App
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/Homepage';
import Products from './pages/Products';
import Brands from './pages/Brands';
import Aboutus from './pages/Aboutus';
import SpecialOrder from './pages/SpecialOrder';
import Cart from './pages/Cartpage';
import Favorites from './pages/Favoritespage';
import Product from './pages/ProductDetail';
import Auth from './pages/Auth';
import Dashboard from './admin/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* مسارات المستخدم */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/special-order" element={<SpecialOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/auth" element={<Auth />} />
        </Route>

        {/* مسارات لوحة التحكم */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
