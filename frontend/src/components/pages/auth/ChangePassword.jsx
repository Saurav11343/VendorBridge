import React, { useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { changePasswordSchema } from "../validations/changePasswordSchema";

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await axios.put(
        "http://localhost:5000/api/auth/changePassword",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);

      reset();
    } catch (error) {
      alert(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">
        Change Password
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Current Password */}

        <div className="mb-4">
          <label className="block mb-1">
            Current Password
          </label>

          <input
            type="password"
            {...register("currentPassword")}
            className="w-full border p-2 rounded"
          />

          {errors.currentPassword && (
            <p className="text-red-500 text-sm">
              {errors.currentPassword.message}
            </p>
          )}
        </div>

        {/* New Password */}

        <div className="mb-4">
          <label className="block mb-1">
            New Password
          </label>

          <input
            type="password"
            {...register("newPassword")}
            className="w-full border p-2 rounded"
          />

          {errors.newPassword && (
            <p className="text-red-500 text-sm">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 border rounded"
        >
          {loading
            ? "Changing Password..."
            : "Change Password"}
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;