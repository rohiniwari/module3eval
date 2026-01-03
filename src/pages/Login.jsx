
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (!email || !password) return alert("Fill all fields");
    const role = login(email, password);
    if (!role) return alert("Invalid Credentials");
    nav(role === "admin" ? "/admin/dashboard" : "/customers/dashboard");
  };

  return (
    <div style={{ maxWidth:300, margin:"80px auto", background:"#fff", padding:20 }}>
      <h3>Login</h3>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={submit}>Login</button>
    </div>
  );
}
