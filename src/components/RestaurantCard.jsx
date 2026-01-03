
import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ data, isAdmin, setData }) {
  const nav = useNavigate();

  const del = () => {
    if (!confirm("Are you sure you want to delete?")) return;
    const updated = data.filter(r => r.restaurantID !== this.restaurantID);
    localStorage.setItem("evalData", JSON.stringify(updated));
    setData(updated);
    alert("Deleted Successfully");
  };

  return (
    <div className="card">
      <img src={data.image} />
      <h4>{data.restaurantName}</h4>
      <p>{data.address}</p>
      <p>{data.type}</p>
      <p>Parking: {data.parkingLot ? "Yes" : "No"}</p>
      {isAdmin && (
        <>
          <button onClick={() => nav("/admin/restaurants/update", { state: data })}>Update</button>
          <button onClick={del}>Delete</button>
        </>
      )}
    </div>
  );
}
