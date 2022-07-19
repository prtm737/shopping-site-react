import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/cart";
import { Product } from "./pages/product";
import { Products } from "./pages/products";
import { Notfound } from "./pages/not-found";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
