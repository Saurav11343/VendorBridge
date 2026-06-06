import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VendorTable = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchVendors = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vendor/getAllVendors"
      );

      const data = await response.json();

      if (data.success) {
        setVendors(data.vendors);
      }
    } catch (error) {
      console.log("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-vendor/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this vendor?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/vendor/deleteVendor/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        setVendors(
          vendors.filter((vendor) => vendor._id !== id)
        );

        alert("Vendor deleted successfully");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Delete Error:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading Vendors...
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
        <div className="p-4 border-b">
          <h2 className="text-2xl font-bold">
            Vendor Management
          </h2>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3">Company Name</th>
              <th className="border p-3">Contact Person</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Phone</th>
              <th className="border p-3">GST Number</th>
              <th className="border p-3">Category</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Rating</th>
              <th className="border p-3">Address</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {vendors.length > 0 ? (
              vendors.map((vendor) => (
                <tr
                  key={vendor._id}
                  className="hover:bg-gray-50"
                >
                  <td className="border p-3">
                    {vendor.companyName}
                  </td>

                  <td className="border p-3">
                    {vendor.contactPerson}
                  </td>

                  <td className="border p-3">
                    {vendor.email}
                  </td>

                  <td className="border p-3">
                    {vendor.phone}
                  </td>

                  <td className="border p-3">
                    {vendor.gstNumber}
                  </td>

                  <td className="border p-3">
                    {vendor.category}
                  </td>

                  <td className="border p-3">
                    <span
                      className={`px-3 py-1 rounded text-white text-sm ${
                        vendor.status === "active"
                          ? "bg-green-500"
                          : vendor.status === "inactive"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {vendor.status}
                    </span>
                  </td>

                  <td className="border p-3">
                    {vendor.rating}
                  </td>

                  <td className="border p-3">
                    {vendor.address}
                  </td>

                  <td className="border p-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          handleEdit(vendor._id)
                        }
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(vendor._id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="10"
                  className="text-center p-4"
                >
                  No Vendors Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorTable;