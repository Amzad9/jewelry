import { lazy, Suspense } from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
const Category = lazy(() => import('@/pages/Category'));
import SubCategory from "./pages/SubCategory";
import Order from "./pages/Order";
import Products from "./pages/Products";
import Setting from "./pages/Setting";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import './App.css'
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="category" element={<Suspense fallback={<div>Loading...</div>}><Category /></Suspense>} />
            <Route path="subcategory" element={<SubCategory />} />
            <Route path="order" element={<Order />} />
            <Route path="products" element={<Products />} />
            <Route path="setting" element={<Setting />} />
         </Route>
         <Route path="login" element={<Login />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
