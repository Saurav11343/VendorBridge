import { useAuthStore } from "../store/auth.store";
import AdminDashboard from "./dashboard/AdminDashboard";
import ManagerDashboard from "./dashboard/ManagerDashboard";
import ProcurementDashboard from "./dashboard/ProcurementDashboard";
import VendorDashboard from "./dashboard/VendorDashboard";

function DashboardHome() {
  const { user } = useAuthStore();

  switch (user?.role) {
    case "admin":
      return <AdminDashboard />;

    case "manager":
      return <ManagerDashboard />;

    case "procurement_officer":
      return <ProcurementDashboard />;

    case "vendor":
      return <VendorDashboard />;

    default:
      return <h1>Dashboard</h1>;
  }
}

export default DashboardHome;
