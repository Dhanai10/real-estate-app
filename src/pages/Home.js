import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import PropertyList from "../components/PropertyList";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {
  const [properties, setProperties] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);


  const fetchProperties = async () => {
    const { data, error } = await supabase
      .from("tbl_Properties")
      .select("*")
      .order("id", { ascending: false });

    if (!error && data) {
      setProperties(data || []);
    }
    //setLoading(false);
  };

  // if (loading) {
  // return (
  //   <div className="container mt-5 text-center">
  //     <div className="spinner-border" role="status"></div>
  //   </div>
  // );
  // }

  const heroStyle = {
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.6),
      rgba(0,0,0,0.6)
    ), url('https://images.unsplash.com/photo-1568605114967-8130f3a36994')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    padding: '20px'
    
  };
  return (
    <>
      {/* HERO SECTION */}
      <div style={heroStyle}>
        <div className="container text-white ">
          <h1 className="fw-bold display-6 display-md-4">Find Your Dream Property</h1>
          <p className="mt-3 fs-6 fs-md-5 col-12 col-md-8">
            Discover homes, apartments, and commercial properties designed
            for modern living and smart investments.
          </p>
        </div>
      </div>

      <div className="container mt-4">
        {properties.length > 0 && (
          <h2 className="menu-color">Featured Properties</h2>
        )}
        <PropertyList properties={properties} />
      </div>

      <WhyChooseUs />
    </>
  );
}

export default Home;
