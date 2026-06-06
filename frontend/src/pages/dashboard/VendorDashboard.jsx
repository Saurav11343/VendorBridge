import AddVendor from "../../components/pages/vendor/AddVendor";

// pages/VendorDashboard.jsx
function VendorDashboard() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Vendor Management</h1>

        <button
          className="btn btn-primary"
          onClick={() =>
            document.getElementById("add_vendor_modal").showModal()
          }
        >
          + Add Vendor
        </button>
      </div>

      <AddVendor />

      {/* Vendor Table Here */}
    </div>
  );
}

export default VendorDashboard;
