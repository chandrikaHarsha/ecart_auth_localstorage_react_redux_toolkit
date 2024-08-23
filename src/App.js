// import logo from './logo.svg';
// import "./App.css";
import "./index.css";
import Header from "../src/Components/Layout/Header";
import Home from "../src/Components/Pages/Home";
import CartDetails from "../src/Components/Pages/CartDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
    </>
  );
}

export default App;
