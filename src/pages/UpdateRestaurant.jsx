
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UpdateRestaurant() {
  const { state } = useLocation();
  const nav = useNavigate();
  const [form, setForm] = useState(state);

  const update = () => {
    if (!confirm("Are you sure you want to update?")) return;
    const data = JSON.parse(localStorage.getItem("evalData")) || [];
    const updated = data.map(r => r.restaurantID === form.restaurantID ? form : r);
    localStorage.setItem("evalData", JSON.stringify(updated));
    alert("Updated Successfully");
    nav("/admin/dashboard");
  };

  return (
    <div className="sidebar">
      <h3>Update Restaurant</h3>
      <input value={form.restaurantName} onChange={e=>setForm({...form, restaurantName:e.target.value})}/>
      <input value={form.address} onChange={e=>setForm({...form, address:e.target.value})}/>
      <input value={form.type} onChange={e=>setForm({...form, type:e.target.value})}/>
      <button onClick={update}>Update</button>
    </div>
  );
}
