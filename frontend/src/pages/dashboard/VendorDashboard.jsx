import AddVendor from "../../components/pages/vendor/AddVendor";
import VendorTable from "../../components/pages/vendor/VendorTable";

function VendorDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
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

      <VendorTable />
    </div>
  );
}

export default VendorDashboard;
