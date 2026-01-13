import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../assets/css/Login.css';


function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (user === "admin" && pass === "admin@123") {
    //   toast.success("Login successful");
      navigate("/admin/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
 <div className="login-page-light">
      <div className="login-card-light">
        {/* Brand Logo */}
        <h3 className="login-logo">
          Admin Login
        </h3>

        {/* Login Form */}
        <input
          className="form-control input-field-light"
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          className="form-control input-field-light"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />

        {/* Login Button */}
        <button className="btn-login-light" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
