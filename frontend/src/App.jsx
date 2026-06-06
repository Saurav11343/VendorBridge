import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./forms/Signup";
import Login from "./forms/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import VendorDashboard from "./pages/VendorDashboard";
import ProcurementDashboard from "./pages/ProcurementDashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/procurement" element={<ProcurementDashboard />} />
        <Route path="/vendor" element={<VendorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
