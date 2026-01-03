
import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";

const defaultImg = "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg";

export default function AdminDashboard() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("evalData")) || []);
  const [form, setForm] = useState({ restaurantName:"", address:"", type:"", parkingLot:"", image:defaultImg });

  const add = () => {
    if (Object.values(form).includes("")) return alert("Fill all fields");
    const newRest = { ...form, restaurantID: Date.now(), parkingLot: form.parkingLot==="true" };
    const updated = [...data, newRest];
    localStorage.setItem("evalData", JSON.stringify(updated));
    setData(updated);
    alert("Restaurant Added");
    setForm({ restaurantName:"", address:"", type:"", parkingLot:"", image:defaultImg });
  };

  return (
    <div style={{ display:"flex" }}>
      <div className="sidebar">
        <h3>Add Restaurant</h3>
        <input placeholder="Name" value={form.restaurantName} onChange={e=>setForm({...form, restaurantName:e.target.value})}/>
        <input placeholder="Address" value={form.address} onChange={e=>setForm({...form, address:e.target.value})}/>
        <select value={form.type} onChange={e=>setForm({...form, type:e.target.value})}>
          <option value="">Select Type</option>
          <option>Rajasthani</option><option>Gujarati</option><option>Mughlai</option>
          <option>Jain</option><option>Thai</option><option>North Indian</option><option>South Indian</option>
        </select>
        <select value={form.parkingLot} onChange={e=>setForm({...form, parkingLot:e.target.value})}>
          <option value="">Parking</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <button onClick={add}>Add</button>
      </div>
      <div className="main">
        <h2>Admin Dashboard</h2>
        <div style={{ display:"flex", flexWrap:"wrap" }}>
          {data.map(r => <RestaurantCard key={r.restaurantID} data={r} isAdmin setData={setData} />)}
        </div>
      </div>
    </div>
  );
}
