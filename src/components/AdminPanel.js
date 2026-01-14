import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { supabase } from "../services/supabase";


function AdminPanel({ onRefresh }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [PTList, setPTList] = useState([]);
  const [selectedPT, setSelectedPT] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchPropertyTypes();
  }, []);

  const fetchPropertyTypes = async () => {
    const { data, error } = await supabase
      .from("tbl_PropertyTypes")
      .select("id,Type");

    if (!error && data) {
      setPTList(data || []);
    }
  };



  const uploadAndSave = async () => {
    if (!title || !price || !size || !file || (!location && !city)) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ Upload image to Cloudinary
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;

      const uploadRes = await axios.post(cloudinaryUrl, form);

      // 2️⃣ Save data to Supabase
      const { error } = await supabase
        .from("tbl_Properties")
        .insert([
          {
            title,
            price,
            size,
            imageURL: uploadRes.data.secure_url,
            location,
            city,
            property_type: selectedPT
          }
        ]);

      if (error) throw error;

      toast.success("Property added successfully");

      // 3️⃣ Reset form
      setTitle("");
      setPrice("");
      setSize("");
      fileInputRef.current.value = "";
      setFile(null);
      setSelectedPT("");
      setLocation("");
      setCity("");

      if (onRefresh) onRefresh();

    } catch (err) {
      console.error(err);
      toast.error("Failed to save property");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-6 col-lg-5">
          <div className="login-page-light">
            <div className="login-card-light big-card">
              <h3 className="login-logo text-center">Add New Property</h3>

              <form className="property-form">
                {/* Property Type */}
                <div className="form-group">
                  <select
                    className="input-field-light"
                    value={selectedPT}
                    onChange={(e) => setSelectedPT(e.target.value)}
                  >
                    <option value="">Select Property Type</option>
                    {PTList.map((pt) => (
                      <option key={pt.id} value={pt.id}>
                        {pt.Type}
                      </option>
                    ))}
                  </select>
                </div>


                {/* Property Title */}
                <div className="form-group">
                  <input
                    className="input-field-light"
                    placeholder="Property Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>


                {/* Price */}
                <div className="form-group">
                  <input
                    className="input-field-light"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  /></div>

                {/* Size */}
                <div className="form-group">
                  <input
                    className="input-field-light"
                    placeholder="Size (sq.ft)"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  /></div>

                {/* Location */}
                <div className="form-group">
                  <input
                    className="input-field-light"
                    placeholder="Location/Area"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  /></div>

                {/* City */}
                <div className="form-group">
                  <input
                    className="input-field-light"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  /></div>

                {/* Image */}
                <div className="form-group">

                  <input
                    type="file"
                    className="input-field-light"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={(e) => setFile(e.target.files[0])}
                  /></div>

                {/* Add Button */}
                <div className="form-group">
                  <button className="btn-login-light" onClick={uploadAndSave} disabled={loading}>
                    {loading ? "Uploading..." : "Save Property"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AdminPanel;