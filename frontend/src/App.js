import React from "react";
import Navbar from "./components/Navbar";
import ProductsSection from "./components/ProductsSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsViewPage from "./pages/ProductsViewPage";
import IndividaulProduct from "./pages/IndividaulProduct";
import Cart from "./pages/Cart";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsSection />} />
        <Route path="/products" element={<ProductsViewPage />} />
        <Route path="/products/:productId" element={<IndividaulProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
