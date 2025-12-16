import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import Footer from "./pages/Footer";

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
    </BrowserRouter>
  );
}

export default App;





// // import { useEffect, useState } from "react";
// // import AdminLogin from "./components/AdminLogin";
// // import AdminPanel from "./components/AdminPanel";
// // import PropertyList from "./components/PropertyList";
// // import { supabase } from "./services/supabase";


// export default function App() {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [properties, setProperties] = useState([]);

//   const fetchProperties = async () => {
//     const { data } = await supabase
//       .from("tbl_Properties")
//       .select("*")
//       .order("created_at", { ascending: false });

//     setProperties(data || []);
//   };

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   return (
//     <>
//       <nav className="navbar navbar-dark bg-dark">
//         <span className="navbar-brand ms-3">🏠 Real Estate</span>
//       </nav>

//       {!isAdmin && <AdminLogin onLogin={setIsAdmin} />}

//       {isAdmin && <AdminPanel refresh={fetchProperties} />}

//       <PropertyList properties={properties} />
//     </>
//   );
// }
