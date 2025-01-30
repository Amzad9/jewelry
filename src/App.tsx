import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
const Category = lazy(() => import("@/pages/Category"));
const SubCategory = lazy(() => import("@/pages/SubCategory"));
import Order from "./pages/Order";
const Products = lazy(() => import("@/pages/Products"));
import Setting from "./pages/Setting";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import "./App.css";
import ProtectedRoute from "./store/auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/category"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Category />
                </Suspense>
              }
            />
            <Route
              path="/subcategory"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SubCategory />
                </Suspense>
              }
            />
            <Route path="/order" element={<Order />} />
            <Route
              path="/products"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Products />
                </Suspense>
              }
            />
            <Route path="/setting" element={<Setting />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
