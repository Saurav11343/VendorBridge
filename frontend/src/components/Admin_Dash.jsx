import React from 'react'

export default function 
Admin_Dash() {
  return (
    <div>
        <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-red-600">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Welcome Admin! You have full access.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          
          <div className="p-4 bg-red-100 rounded-lg">
            <h2 className="font-semibold">Users</h2>
            <p>Manage all users</p>
          </div>

          <div className="p-4 bg-red-100 rounded-lg">
            <h2 className="font-semibold">Vendors</h2>
            <p>Approve or block vendors</p>
          </div>

          <div className="p-4 bg-red-100 rounded-lg">
            <h2 className="font-semibold">Reports</h2>
            <p>View system reports</p>
          </div>

        </div>
      </div>
    </div>

    </div>
  )
}
