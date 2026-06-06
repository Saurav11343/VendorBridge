import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useVendorStore } from "../../../store/vendor.store";

const VendorTable = () => {
  const navigate = useNavigate();

  const { vendors, getVendors, deleteVendor, isFetchingVendors } =
    useVendorStore();

  useEffect(() => {
    getVendors();
  }, [getVendors]);

  const handleEdit = (id) => {
    navigate(`/edit-vendor/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this vendor?",
    );

    if (!confirmDelete) return;

    await deleteVendor(id);
  };

  if (isFetchingVendors) {
    return (
      <div className="flex h-60 items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-box bg-base-100 shadow">
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact Person</th>
            <th>Email</th>
            <th>Phone</th>
            <th>GST</th>
            <th>Category</th>
            <th>Status</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {vendors.length > 0 ? (
            vendors.map((vendor) => (
              <tr key={vendor._id}>
                <td>{vendor.companyName}</td>

                <td>{vendor.contactPerson}</td>

                <td>{vendor.email}</td>

                <td>{vendor.phone}</td>

                <td>{vendor.gstNumber}</td>

                <td>{vendor.category}</td>

                <td>
                  <span
                    className={`badge ${
                      vendor.status === "active"
                        ? "badge-success"
                        : vendor.status === "inactive"
                          ? "badge-warning"
                          : "badge-error"
                    }`}
                  >
                    {vendor.status}
                  </span>
                </td>

                <td>{vendor.rating ?? "-"}</td>

                <td>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(vendor._id)}
                      className="btn btn-sm btn-info"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(vendor._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="text-center py-8">
                No Vendors Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VendorTable;
