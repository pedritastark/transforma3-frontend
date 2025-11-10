import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authAPI } from '../services/api';

// Define the shape of the user object
interface User {
  id: string;
  email: string;
  userType: 'company' | 'provider' | 'admin';
  companyName?: string;
  fullName?: string;
}

// Define the shape of the store's state and actions
interface AuthState {
  token: string | null;
  user: User | null;
  isLoading: boolean;
  error: string | null;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: {
    email: string;
    password: string;
    user_type: string;
    company_name?: string;
    full_name: string;
    city: string;
    sector?: string;
    phone?: string;
  }) => Promise<void>;
  clearError: () => void;
}

// Create the store
export const useAuthStore = create<AuthState>()(
  // The persist middleware automatically saves the store's state to localStorage
  persist(
    (set, get) => ({
      token: null,
      user: null,
      isLoading: false,
      error: null,
      
      setAuth: (token, user) => {
        localStorage.setItem('token', token);
        set({ token, user, error: null });
      },
      
      logout: () => {
        localStorage.removeItem('token');
        set({ token: null, user: null, error: null });
      },
      
      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const response = await authAPI.login({ email, password });
          get().setAuth(response.token, response.user);
        } catch (error: any) {
          set({ error: error.message });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },
      
      register: async (userData) => {
        set({ isLoading: true, error: null });
        try {
          await authAPI.register(userData);
          // After successful registration, automatically log in
          await get().login(userData.email, userData.password);
        } catch (error: any) {
          set({ error: error.message });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },
      
      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage', // The key to use for storing the data in localStorage
    }
  )
);
