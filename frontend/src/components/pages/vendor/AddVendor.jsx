import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../../FromInput";
import { vendorSchema } from "../../../../../backend/src/validator/vendor.validator";
import { useVendorStore } from "../../../store/vendor.store";

const AddVendor = () => {
  const { createVendor, isCreatingVendor } = useVendorStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(vendorSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      gstNumber: "",
      category: "",
      address: "",
      rating: 0,
      status: "active",
    },
  });

  const onSubmit = async (data) => {
    const result = await createVendor(data);

    if (!result?.success) return;

    reset({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      gstNumber: "",
      category: "",
      address: "",
      rating: 0,
      status: "active",
    });

    document.getElementById("add_vendor_modal").close();
  };

  return (
    <dialog id="add_vendor_modal" className="modal">
      <div className="modal-box max-w-4xl">
        <h3 className="mb-6 text-2xl font-bold">Add Vendor</h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {/* Company Name */}
          <FormInput
            name="companyName"
            label="Company Name"
            placeholder="Enter Company Name"
            register={register}
            errors={errors}
          />

          {/* Contact Person */}
          <FormInput
            name="contactPerson"
            label="Contact Person"
            placeholder="Enter Contact Person"
            register={register}
            errors={errors}
          />

          {/* Email */}
          <FormInput
            name="email"
            label="Email"
            type="email"
            placeholder="Enter Email"
            register={register}
            errors={errors}
          />

          {/* Phone */}
          <FormInput
            name="phone"
            label="Phone Number"
            placeholder="Enter Phone Number"
            register={register}
            errors={errors}
          />

          {/* GST Number */}
          <FormInput
            name="gstNumber"
            label="GST Number"
            placeholder="Enter GST Number"
            register={register}
            errors={errors}
          />

          {/* Category */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Category</span>
            </label>

            <select
              {...register("category")}
              className={`select select-bordered w-full ${
                errors.category ? "select-error" : ""
              }`}
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="IT Services">IT Services</option>
              <option value="Stationery">Stationery</option>
            </select>

            {errors.category && (
              <p className="mt-1 text-sm text-error">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Status</span>
            </label>

            <select
              {...register("status")}
              className={`select select-bordered w-full ${
                errors.status ? "select-error" : ""
              }`}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="blocked">Blocked</option>
            </select>

            {errors.status && (
              <p className="mt-1 text-sm text-error">{errors.status.message}</p>
            )}
          </div>

          {/* Rating */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Rating</span>
            </label>

            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              {...register("rating", { valueAsNumber: true })}
              className={`input input-bordered w-full ${
                errors.rating ? "input-error" : ""
              }`}
            />

            {errors.rating && (
              <p className="mt-1 text-sm text-error">{errors.rating.message}</p>
            )}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text font-medium">Address</span>
            </label>

            <textarea
              rows="4"
              {...register("address")}
              placeholder="Enter Address"
              className={`textarea textarea-bordered w-full ${
                errors.address ? "textarea-error" : ""
              }`}
            />

            {errors.address && (
              <p className="mt-1 text-sm text-error">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-3">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                reset();
                document.getElementById("add_vendor_modal").close();
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isCreatingVendor}
              className="btn btn-primary"
            >
              {isCreatingVendor ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Creating...
                </>
              ) : (
                "Add Vendor"
              )}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddVendor;
