import { useEffect, useState } from "react";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import PropertyList from "./components/PropertyList";
import { supabase } from "./services/supabase";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    const { data } = await supabase
      .from("tbl_Properties")
      .select("*")
      .order("created_at", { ascending: false });

    setProperties(data || []);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand ms-3">🏠 Real Estate</span>
      </nav>

      {!isAdmin && <AdminLogin onLogin={setIsAdmin} />}

      {isAdmin && <AdminPanel refresh={fetchProperties} />}

      <PropertyList properties={properties} />
    </>
  );
}
