import React, { useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { changePasswordSchema } from "../validations/changePasswordSchema";

const ChangePassword = ({ onClose }) => {
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

      const token =
        localStorage.getItem("token");

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

      onClose();
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
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Change Password
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div>
          <label className="block mb-1">
            Current Password
          </label>

          <input
            type="password"
            {...register("currentPassword")}
            className="input input-bordered w-full"
          />

          {errors.currentPassword && (
            <p className="text-error text-sm mt-1">
              {
                errors.currentPassword
                  .message
              }
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1">
            New Password
          </label>

          <input
            type="password"
            {...register("newPassword")}
            className="input input-bordered w-full"
          />

          {errors.newPassword && (
            <p className="text-error text-sm mt-1">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        <div className="flex gap-2 justify-end">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
          >
            {loading
              ? "Changing..."
              : "Change Password"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;