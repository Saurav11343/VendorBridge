import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

function DashboardLayout() {
  const { user, logout } = useAuthStore();

  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content">
        <nav className="navbar bg-base-300">
          <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
            ☰
          </label>

          <div className="flex-1 px-4">
            <h1 className="text-xl font-bold">{user?.role} Bridge Dashboard</h1>
          </div>

          <div className="mr-4 text-right">
            <p className="font-semibold">{user?.name}</p>

            <p className="text-xs opacity-70">{user?.role}</p>
          </div>
        </nav>

        <div className="p-6">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <ul className="menu min-h-full w-64 bg-base-200 p-4">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          {(user?.role === "admin" || user?.role === "manager") && (
            <li>
              <Link to="/dashboard/vendors">Vendor Management</Link>
            </li>
          )}

          {(user?.role === "admin" || user?.role === "procurement_officer") && (
            <li>
              <Link to="/dashboard/rfq">RFQ Management</Link>
            </li>
          )}

          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>

          <li>
            <Link to="/dashboard/change-password">Change Password</Link>
          </li>

          <li>
            <button onClick={handleLogout} className="text-error">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardLayout;
