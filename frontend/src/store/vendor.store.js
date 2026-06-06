import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "sonner";

export const useVendorStore = create((set) => ({
  vendors: [],

  isCreatingVendor: false,

  createVendor: async (data) => {
    try {
      set({ isCreatingVendor: true });

      const response = await axiosInstance.post("/vendor/createVendor", data);

      toast.success("Vendor created successfully");

      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to create vendor";

      toast.error(message);

      return (
        error.response?.data || {
          success: false,
          message,
        }
      );
    } finally {
      set({ isCreatingVendor: false });
    }
  },

  getVendors: async () => {
    try {
      const response = await axiosInstance.get("/vendor");

      set({
        vendors: response.data.vendors,
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch vendors");
    }
  },
}));
