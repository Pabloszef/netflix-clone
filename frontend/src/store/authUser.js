import {create} from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    user: null,
    isSigningUp: false,
    isCheckingAuth: true,
    isLoggingOut: false,
    isLoggingIn: false,


    signup: async (credentials) => {
        set({isSigningUp: true})
        try {
            const response = await axios.post("/api/v1/auth/signup", credentials)
            set({user: response.data.user})
            toast.success("Account created successfully")
        } catch (error) {
            set({isSigningUp: false, user: null})
            toast.error(error.response.data.message || "Something went wrong")
        } finally {
            set({isSigningUp: false})
        }
    },
    login: async (credentials) => {
        set({isLoggingIn: true})
        try {
            const response = await axios.post("/api/v1/auth/login", credentials)
            set({user: response.data.user})
        } catch (error) {
            set({isLoggingIn: false, user: null})
            toast.error(error.response.data.message || "Something went wrong")
        } finally {
            set({isLoggingIn: false})
        }
    },
    logout: async () => {
        set({isLoggingOut: true})
        try {
            await axios.post("/api/v1/auth/logout")
            toast.success("Logged out successfully")
            set({user: null, isLoggingOut: false})
        } catch (error) {
            set({isLoggingOut: false})
            toast.error(error.response.data.message || "Something went wrong")
        }
    },
    authCheck: async () => {
        set({ isCheckingAuth: true })
        try {
            const response = await axios.get("/api/v1/auth/authCheck")
            set({user: response.data.user})
        } catch (error) {
            set({user: null, isCheckingAuth: false})
        } finally {
            set({ isCheckingAuth: false })
        }
    },
}))