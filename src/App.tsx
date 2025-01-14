
import {BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Category from "./pages/Category";
import SubCategory from "./pages/SubCategory";
import Order from "./pages/Order";
import Products from "./pages/Products";
import Setting from "./pages/Setting";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/category" element={<Category />} />
            <Route path="/subcategory" element={<SubCategory />} />
            <Route path="/order" element={<Order />} />
            <Route path="/products" element={<Products />} />
            <Route path="/setting" element={<Setting />} />
         </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
