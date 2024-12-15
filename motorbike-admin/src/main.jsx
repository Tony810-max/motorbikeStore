import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./Private/AdminPage";
import LoginPage from "./Auth/LoginPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AdminProvider } from "./Contexts/AdminContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { CategoryProvider } from "./Contexts/CategoryContext";
import { ProductProvider } from "./Contexts/ProductContext";

import CategoryMangePage from "./Private/CategoryMangePage";
import OrderManagePage from "./Private/OrderManagePage";
import ProductMangePage from "./Private/ProductMangePage";
import UserMangePage from "./Private/UserMangePage";
import { UserProvider } from "./Contexts/UserContext";
import AdminMangePage from "./Private/AdminMangePage";
import ContactManagePage from "./Private/ContactManagePage";
import { ContactProvider } from "./Contexts/ContactContext";
import { OrderProvider } from "./Contexts/OrderContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoryProvider>
      <ToastContainer />
      <ProductProvider>
        <UserProvider>
          <OrderProvider>
            <ContactProvider>
              <BrowserRouter>
                <AdminProvider>
                  <Routes>
                    <Route
                      path="/admin"
                      element={
                        <ProtectedRoute>
                          <AdminPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="/admin/login" element={<LoginPage />} />
                    <Route
                      path="/admin/category"
                      element={
                        <ProtectedRoute>
                          <CategoryMangePage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin/order"
                      element={
                        <ProtectedRoute>
                          <OrderManagePage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin/product"
                      element={
                        <ProtectedRoute>
                          <ProductMangePage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin/user"
                      element={
                        <ProtectedRoute>
                          <UserMangePage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin/admin"
                      element={
                        <ProtectedRoute>
                          <AdminMangePage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin/contact"
                      element={
                        <ProtectedRoute>
                          <ContactManagePage />
                        </ProtectedRoute>
                      }
                    />
                  </Routes>
                </AdminProvider>
              </BrowserRouter>
            </ContactProvider>
          </OrderProvider>
        </UserProvider>
      </ProductProvider>
    </CategoryProvider>
  </StrictMode>
);
