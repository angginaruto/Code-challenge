import { create } from "zustand";

interface User {
  name: string;
  role: string;
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (userData) => set({ user: userData, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));

export default useAuthStore;
