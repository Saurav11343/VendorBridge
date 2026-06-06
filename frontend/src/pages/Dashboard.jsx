import React from "react";
import ProcurementDashboard from "./ProcurementDashboard";
import VendorDashboard from "./VendorDashboard";

const Dashboard = () => {
  // Example: get role from localStorage
  const role = "procurement";

  if (role === "procurement") {
    return <ProcurementDashboard />;
  }

  if (role === "vendor") {
    return <VendorDashboard />;
  }

  return (
    <div className="text-center mt-10">
      <h2>Unauthorized User</h2>
    </div>
  );
};

export default Dashboard;