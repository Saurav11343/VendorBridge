import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import { toast } from "sonner";
export const useAuthStore = create((set) => ({
  user: null,

  isAuthenticated: false,

  isCheckingAuth: false,

  isLoggingIn: false,

  isSigningUp: false,

  login: async (data) => {
    try {
      set({ isLoggingIn: true });

      const response = await axiosInstance.post("/auth/login", data);

      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoggingIn: false,
      });

      toast.success(response.data.message || "Login successful");

      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || "something went wrong";

      set({ isLoggingIn: false });

      toast.error(message);

      return (
        error.response?.data || {
          success: false,
          message,
        }
      );
    }
  },
}));
