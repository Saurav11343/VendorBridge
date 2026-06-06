import React from 'react'
import Admin_Dash from './Admin_Dash';
import Manager_Dash from './Manager_Dash';

export default function Dashboard() {
const Dashboard = () => {
  // Example: get role from localStorage
  const role = "admin";

  if (role === "admin") {
    return <Admin_Dash />;
  }

  if (role === "manager") {
    return <Manager_Dash />;
  }

  return (
    <div className="text-center mt-10">
      <h2>Unauthorized User</h2>
    </div>
  );
};
}
