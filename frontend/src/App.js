import React from "react";
import Navbar from "./components/Navbar";
import ProductsSection from "./components/ProductsSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsViewPage from "./pages/ProductsViewPage";
import IndividaulProduct from "./pages/IndividaulProduct";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsSection />} />
        <Route path="/products" element={<ProductsViewPage />} />
        <Route path="/products/:productId" element={<IndividaulProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
