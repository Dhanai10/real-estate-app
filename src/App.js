import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import Footer from "./pages/Footer";
import FloatingContact from "./components/FloatingContact";
import "../src/assets/css/App.css";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminPanel />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
      <Footer/>
      <FloatingContact/>
    </BrowserRouter>
  );
}

export default App;
