import React from 'react'

export default function Manager_Dash() {
  return (
    <div>
         <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600">
          Manager Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Welcome Manager! You can manage vendors and tasks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

          <div className="p-4 bg-blue-100 rounded-lg">
            <h2 className="font-semibold">Vendors</h2>
            <p>View and manage vendors</p>
          </div>

          <div className="p-4 bg-blue-100 rounded-lg">
            <h2 className="font-semibold">Tasks</h2>
            <p>Assign and track tasks</p>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}
