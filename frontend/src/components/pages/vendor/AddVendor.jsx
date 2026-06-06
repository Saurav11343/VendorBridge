import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../FromInput";

const AddVendor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    // API Call
    /*
    try {
      const response = await fetch("http://localhost:5000/api/vendors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    */
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Add Vendor
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <FormInput
            name="companyName"
            label="Company Name"
            placeholder="Enter Company Name"
            register={register}
            errors={errors}
          />

          <FormInput
            name="contactPerson"
            label="Contact Person"
            placeholder="Enter Contact Person"
            register={register}
            errors={errors}
          />

          <FormInput
            name="email"
            label="Email"
            type="email"
            placeholder="Enter Email"
            register={register}
            errors={errors}
          />

          <FormInput
            name="phone"
            label="Phone"
            placeholder="Enter Phone Number"
            register={register}
            errors={errors}
          />

          <FormInput
            name="gstNumber"
            label="GST Number"
            placeholder="Enter GST Number"
            register={register}
            errors={errors}
          />

          <div>
            <label className="block font-medium mb-1">
              Category
            </label>

            <select
              {...register("category")}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="IT Services">IT Services</option>
              <option value="Stationery">Stationery</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Status
            </label>

            <select
              {...register("status")}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Rating
            </label>

            <input
              type="number"
              min="0"
              max="5"
              {...register("rating")}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium mb-1">
              Address
            </label>

            <textarea
              rows="4"
              {...register("address")}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Enter Address"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Add Vendor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVendor;