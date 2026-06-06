import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import { toast } from "sonner";
export const useAuthStore = create((set) => ({
  user: null,

  isAuthenticated: false,

  isCheckingAuth: false,

  isLoggingIn: false,

  isSigningUp: false,
  checkAuth: async () => {
    try {
      const response = await axiosInstance.get("/auth/me");

      set({
        user: response.data.user,
        isAuthenticated: true,
      });
    } catch (error) {
      set({
        user: null,
        isAuthenticated: false,
      });
    } finally {
      set({
        isCheckingAuth: false,
      });
    }
  },

  login: async (data) => {
    try {
      set({ isLoggingIn: true });

      const response = await axiosInstance.post("/auth/login", data);

      set({
        user: response.data.user,
        isAuthenticated: true,
      });

      toast.success(response.data.message);

      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";

      toast.error(message);

      return (
        error.response?.data || {
          success: false,
          message,
        }
      );
    } finally {
      set({ isLoggingIn: false });
    }
  },

  signup: async (data) => {
    try {
      set({ isSigningUp: true });

      const response = await axiosInstance.post("/auth/signup", data);

      toast.success(response.data.message || "Account created successfully123");

      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";

      toast.error(message);

      return (
        error.response?.data || {
          success: false,
          message,
        }
      );
    } finally {
      set({ isSigningUp: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");

      set({
        user: null,
        isAuthenticated: false,
      });

      toast.success("Logged out successfully");
    } catch (error) {
      const message = error.response?.data?.message || "Logout failed";
      toast.error(message);
    }
  },
}));
