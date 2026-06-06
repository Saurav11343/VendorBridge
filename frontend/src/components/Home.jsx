import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Home() {
     const navigate = useNavigate();
  return (
       <div>

      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-md px-6">
        <div className="flex-1">
          <a className="text-xl font-bold text-primary">
            VendorBridge
          </a>
        </div>

        <div className="flex-none space-x-2">
          <button
            onClick={() => navigate("/login")}
            className="btn btn-ghost"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="btn btn-primary"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">
              VendorBridge
            </h1>

            <p className="py-6 text-lg">
              Smart Vendor Management System to manage vendors, roles, and business workflow efficiently.
            </p>

            <div className="space-x-4">
              <button
                onClick={() => navigate("/signup")}
                className="btn btn-primary"
              >
                Start Free
              </button>

              <button
                onClick={() => navigate("/login")}
                className="btn btn-outline"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-primary">
                Role Based Access
              </h2>
              <p>Admin, Manager, Vendor access system.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-primary">
                Vendor Management
              </h2>
              <p>Add, update, and manage vendors easily.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-primary">
                Analytics
              </h2>
              <p>Track performance and business insights.</p>
            </div>
          </div>

        </div>
      </div>

      {/* How It Works */}
      <div className="bg-base-200 p-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          How It Works
        </h2>

        <ul className="steps steps-vertical md:steps-horizontal w-full">

          <li className="step step-primary">
            Register
          </li>

          <li className="step step-primary">
            Add Vendors
          </li>

          <li className="step step-primary">
            Manage Data
          </li>

          <li className="step step-primary">
            Track Reports
          </li>

        </ul>
      </div>

      {/* CTA */}
      <div className="hero bg-primary text-primary-content py-20">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-3xl font-bold">
              Start Using VendorBridge Today
            </h1>

            <p className="py-4">
              Simplify your vendor management system
            </p>

            <button
              onClick={() => navigate("/signup")}
              className="btn btn-secondary"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-6 bg-base-100 text-base-content">
        <p>© 2026 VendorBridge. All rights reserved.</p>
      </footer>

    </div>

  )
}
