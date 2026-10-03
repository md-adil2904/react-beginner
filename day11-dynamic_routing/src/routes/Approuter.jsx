import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import ProtectedRoute from "./ProtectedRoute";

const Approuter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        >
          About
        </Route>
        <Route path="/products" element={<Products />}>
          Products
        </Route>
        <Route path="/productDetail/:id" element={<ProductDetail />}>
          ProductDetail
        </Route>
      </Routes>
    </div>
  );
};

export default Approuter;
