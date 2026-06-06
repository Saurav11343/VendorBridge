import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "sonner";

export const useVendorStore = create((set) => ({
  vendors: [],

  isCreatingVendor: false,
  isFetchingVendors: false,
  isDeletingVendor: false,

  createVendor: async (data) => {
    try {
      set({ isCreatingVendor: true });

      const response = await axiosInstance.post("/vendor/createVendor", data);

      set((state) => ({
        vendors: [...state.vendors, response.data.vendor],
      }));

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
      set({ isFetchingVendors: true });

      const response = await axiosInstance.get("/vendor/getAllVendors");

      set({
        vendors: response.data.vendors,
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch vendors");
    } finally {
      set({ isFetchingVendors: false });
    }
  },

  deleteVendor: async (id) => {
    try {
      set({ isDeletingVendor: true });

      const response = await axiosInstance.delete(`/vendor/deleteVendor/${id}`);

      set((state) => ({
        vendors: state.vendors.filter((vendor) => vendor._id !== id),
      }));

      toast.success(response.data.message || "Vendor deleted successfully");

      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to delete vendor";

      toast.error(message);

      return {
        success: false,
        message,
      };
    } finally {
      set({ isDeletingVendor: false });
    }
  },
}));
