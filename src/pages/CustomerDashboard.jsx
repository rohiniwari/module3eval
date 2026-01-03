
export default function CustomerDashboard() {
  const data = JSON.parse(localStorage.getItem("evalData")) || [];
  return (
    <div className="main">
      <h2>Customer Dashboard</h2>
      <div style={{ display:"flex", flexWrap:"wrap" }}>
        {data.map(r => (
          <div key={r.restaurantID} className="card">
            <img src={r.image} />
            <h4>{r.restaurantName}</h4>
            <p>{r.address}</p>
            <p>{r.type}</p>
            <p>Parking: {r.parkingLot ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
