import { useState } from "react";

export default function AdminLogin({ onLogin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    if (user === "admin" && pass === "admin123") {
      onLogin(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
<div className="container mt-5" style={{ maxWidth: 400 }}>
      <div className="card p-3">
        <h4 className="text-center">Admin Login</h4>
        <input className="form-control mb-2" placeholder="Username" onChange={e => setUser(e.target.value)} />
        <input type="password" className="form-control mb-3" placeholder="Password" onChange={e => setPass(e.target.value)} />
        <button className="btn btn-dark" onClick={login}>Login</button>
      </div>
    </div>
  );
}
