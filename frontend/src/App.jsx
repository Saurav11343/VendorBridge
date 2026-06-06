import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./forms/Login";
import Signup from "./forms/Signup";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import VendorManagement from "./pages/VendorManagement";
import RFQManagement from "./pages/RFQManagement";
import AddVendor from './components/pages/vendor/AddVendor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />

          <Route path="profile" element={<Profile />} />

          <Route path="change-password" element={<ChangePassword />} />

          <Route path="vendors" element={<VendorManagement />} />

          <Route path="rfq" element={<RFQManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
