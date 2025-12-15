import { useState } from "react";
import axios from "axios";
import { supabase } from "../services/supabase";

export default function AdminPanel({ refresh }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [file, setFile] = useState(null);

  const uploadAndSave = async () => {
    if (!file) {
      console.log("File is null:", file); 
      return alert("Select image");
    }
    console.log("Uploading file:", file);

    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "real_estate_upload");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dwgfwjhua/image/upload",
      form
    );

    const { data, error } = await supabase.from("tbl_Properties").insert([
      {
        title,
        price,
        size,
        imageURL: res.data.secure_url,
      },
    ]);
    if (error) {
  console.error("Supabase insert error:", error);
  alert("Database insert failed! Check console.");
} else {
  console.log("Inserted row:", data);
  alert("Property added successfully");
}

    setTitle(""); setPrice(""); setSize(""); setFile(null);
    refresh();
  };

  return (
    <div className="container mt-4">
      <h4>Add Property</h4>
      <input className="form-control mb-2" placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input className="form-control mb-2" placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <input className="form-control mb-2" placeholder="Size" onChange={e => setSize(e.target.value)} />
    <input
  type="file"
  className="form-control mb-3"
  accept="image/*"
  onChange={(e) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log("Selected file:", e.target.files[0]);
      setFile(e.target.files[0]);
    } else {
      console.log("No file selected");
    }
  }}
/>

      <button className="btn btn-success" onClick={uploadAndSave}>Save Property</button>
    </div>
  );
}
