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
    <div className="card p-4 shadow">
      <h5 className="mb-3">Add New Property</h5>

      <input
        className="form-control mb-2"
        placeholder="Property Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        className="form-control mb-3"
        placeholder="Size (sqft)"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />

      <input
        type="file"
        className="form-control mb-3"
        accept="image/*"
        ref={fileInputRef}
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        className="btn btn-success"
        onClick={uploadAndSave}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Save Property"}
      </button>
    </div>
  );
}

export default AdminPanel;

// import { useState } from "react";
// import axios from "axios";
// import { supabase } from "../services/supabase";

// export default function AdminPanel({ refresh }) {
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [size, setSize] = useState("");
//   const [file, setFile] = useState(null);

//   const uploadAndSave = async () => {
//     if (!file) {
//       console.log("File is null:", file); 
//       return alert("Select image");
//     }
//     console.log("Uploading file:", file);

//     const form = new FormData();
//     form.append("file", file);
//     form.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

//     const cloudUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;
//     const res = await axios.post(cloudUrl, form);

//     const { data, error } = await supabase.from("tbl_Properties").insert([
//       {
//         title,
//         price,
//         size,
//         imageURL: res.data.secure_url,
//       },
//     ]);
//     if (error) {
//   console.error("Supabase insert error:", error);
//   alert("Database insert failed! Check console.");
// } else {
//   console.log("Inserted row:", data);
//   alert("Property added successfully");
// }

//     setTitle(""); setPrice(""); setSize(""); setFile(null);
//     refresh();
//   };

//   return (
//     <div className="container mt-4">
//       <h4>Add Property</h4>
//       <input className="form-control mb-2" placeholder="Title" onChange={e => setTitle(e.target.value)} />
//       <input className="form-control mb-2" placeholder="Price" onChange={e => setPrice(e.target.value)} />
//       <input className="form-control mb-2" placeholder="Size" onChange={e => setSize(e.target.value)} />
//     <input
//   type="file"
//   className="form-control mb-3"
//   accept="image/*"
//   onChange={(e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       console.log("Selected file:", e.target.files[0]);
//       setFile(e.target.files[0]);
//     } else {
//       console.log("No file selected");
//     }
//   }}
// />

//       <button className="btn btn-success" onClick={uploadAndSave}>Save Property</button>
//     </div>
//   );
// }
