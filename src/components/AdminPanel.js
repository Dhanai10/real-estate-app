import { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { supabase } from "../services/supabase";

function AdminPanel({ onRefresh }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const uploadAndSave = async () => {
    if (!title || !price || !size || !file) {
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
            imageURL: uploadRes.data.secure_url
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

      if (onRefresh) onRefresh();

    } catch (err) {
      console.error(err);
      toast.error("Failed to save property");
    } finally {
      setLoading(false);
    }
  };

  return (
     <div className="login-page-light">
      <div className="login-card-light big-card">
        <h3 className="login-logo">Add New Property</h3>

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
      </div>
    </div>
  );
}

export default AdminPanel;