import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (user === "admin" && pass === "admin123") {
    //   toast.success("Login successful");
      navigate("/admin/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h4>Admin Login</h4>
      <input className="form-control mb-2" placeholder="Username" onChange={e => setUser(e.target.value)} />
      <input type="password" className="form-control mb-3" placeholder="Password" onChange={e => setPass(e.target.value)} />
      <button className="btn btn-dark w-100" onClick={login}>Login</button>
    </div>
  );
}

export default AdminLogin;
