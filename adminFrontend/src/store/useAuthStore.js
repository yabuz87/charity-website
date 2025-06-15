import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";

export const useAuthStore = create(
  persist(
    (set) => ({
      authUser: null,
      isSigningUp: false,
      isLoggingIn: false,
      isUpdatingProfile: false,
      isLoggingOut: false,
      isCheckingAuth: true,

      // Signup
      signup: async (data) => {
        try {
          set({ isSigningUp: true });
          const response = await axiosInstance.post("admin/signup", data);
          toast.success("Account created successfully! 🎉");
          set({ authUser: response.data });
        } catch (error) {
          console.error("Error in signup method:", error?.response || error);
          const errorMessage =
            error.response?.data?.message || "Signup failed. Please try again.";
          toast.error(errorMessage);
        } finally {
          set({ isSigningUp: false });
        }
      },

      // Check auth
      checkAuth: async () => {
        try {
          const response = await axiosInstance.get("admin/check");
          set({ authUser: response.data });
        } catch (error) {
          console.error("Error in checkAuth method:", error?.response || error);
          const errorMessage =
            error.response?.data?.message || "Failed to verify authentication.";
          toast.error(errorMessage);
          set({ authUser: null });
        } finally {
          set({ isCheckingAuth: false });
        }
      },

      // Login
      login: async (data) => {
        try {
          set({ isLoggingIn: true });
          const response = await axiosInstance.post("admin/login", data);
          set({ authUser: response.data });
          toast.success("You logged in successfully! 🎉", { id: "login-success" });
        } catch (error) {
          console.error("Error in login method:", error?.response || error);
          const errorMessage =
            error.response?.data?.message || "Login failed. Please check your credentials.";
          toast.error(errorMessage, { id: "login-error" });
        } finally {
          set({ isLoggingIn: false });
        }
      },

      // Logout
      logout: async () => {
        try {
          set({ isLoggingOut: true });
          await axiosInstance.post("/admin/logout");
          set({ authUser: null });
          toast.success("Logged out successfully! 🎉", { id: "logout-success" });
        } catch (error) {
          console.error("Logout error:", error?.response || error);
          const errorMessage =
            error.response?.data?.message || "Logout failed! Please try again.";
          toast.error(errorMessage, { id: "logout-error" });
        } finally {
          set({ isLoggingOut: false });
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        authUser: state.authUser, // ✅ Only persist what matters
      }),
    }
  )
);
