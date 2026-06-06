import React, { useEffect, useState } from "react";

const VendorTable = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

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
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10">
        Loading Vendors...
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-2xl font-bold">
            Vendor List
          </h2>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Company</th>
              <th className="p-3 border">Contact Person</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">GST Number</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Rating</th>
              <th className="p-3 border">Address</th>
            </tr>
          </thead>

          <tbody>
            {vendors.length > 0 ? (
              vendors.map((vendor) => (
                <tr key={vendor._id}>
                  <td className="p-3 border">
                    {vendor.companyName}
                  </td>

                  <td className="p-3 border">
                    {vendor.contactPerson}
                  </td>

                  <td className="p-3 border">
                    {vendor.email}
                  </td>

                  <td className="p-3 border">
                    {vendor.phone}
                  </td>

                  <td className="p-3 border">
                    {vendor.gstNumber}
                  </td>

                  <td className="p-3 border">
                    {vendor.category}
                  </td>

                  <td className="p-3 border">
                    <span
                      className={`px-2 py-1 rounded text-white ${
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

                  <td className="p-3 border">
                    {vendor.rating}
                  </td>

                  <td className="p-3 border">
                    {vendor.address}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="9"
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