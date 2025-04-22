import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";



 export const useAuthStore=((set)=>({
    authUser:false,
    isSignupLoading:false,
    
    signup: async (data)=>
    {
            try {
                set({isSignupLoading:true});
                const response=await axiosInstance("auth/signup",data);

            } catch (error) {
                
            }

    },
    checkAuth: async () => {
        try {
          const response = await axiosInstance("auth/check");
          set({ authUser: response.data });
        } catch (error) {
          console.error("Error in checkAuth method:", error);
          console.log(error.message);
          set({ authUser: null });
        } finally {
          set({ isCheckingAuth: false });
        }
      },
}))

