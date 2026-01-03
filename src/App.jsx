
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdateRestaurant from "./pages/UpdateRestaurant";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/dashboard" element={<ProtectedRoute role="admin"><AdminDashboard/></ProtectedRoute>} />
      <Route path="/admin/restaurants/update" element={<ProtectedRoute role="admin"><UpdateRestaurant/></ProtectedRoute>} />
      <Route path="/customers/dashboard" element={<ProtectedRoute role="customer"><CustomerDashboard/></ProtectedRoute>} />
    </Routes>
  );
}
