import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "animate.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { UserProvider } from "./contexts/userContext";
import { ProductProvider } from "./contexts/productContext";

import HomePage from "./public/HomePage";
import ProductPage from "./public/ProductPage";
import Contact from "./public/Contact";
import ProductDetail from "./public/ProductPage/[id]";

import ProfilePage from "./private/ProfilePage";
import MyOrderPage from "./private/MyOrderPage";
import CartPage from "./private/CartPage";
import OrderPage from "./private/OrderPage";

import ProtectedRoute from "./components/ProtectedRoute";

import LoginPage from "./Auth/LoginPage";
import SignUpPage from "./Auth/SignUpPage";
import { CategoryProvider } from "./contexts/categoryContext";
import { CartProvider } from "./contexts/cartContext";
import ChangePassword from "./private/ChangePassword";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <CategoryProvider>
          <CartProvider>
            <BrowserRouter>
              <ToastContainer />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signUp" element={<SignUpPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/contact" element={<Contact />} />

                {/* private */}
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/myOrder"
                  element={
                    <ProtectedRoute>
                      <MyOrderPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute>
                      <CartPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/order"
                  element={
                    <ProtectedRoute>
                      <OrderPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/change-password"
                  element={
                    <ProtectedRoute>
                      <ChangePassword />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </CategoryProvider>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>
);
