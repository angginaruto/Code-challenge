import React, { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import { useNavigate, Link } from "react-router-dom";
import Backendless from "../services/backendless";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = await Backendless.UserService.login(email, password, true);
      login({
        name: (user as any).name || "Admin",
        role: "admin",
      });
      alert(`Selamat Datang Kembali, ${(user as any).name || "Admin"}!`);
      navigate("/create-blog");
    } catch (err: any) {
      alert("Login Gagal: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-red-800 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-red-200">
            <span className="text-white font-black text-2xl">T</span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tighter leading-none">
            Member Login
          </h1>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-3">
            Access to Telkom Blog System
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-4">
              Email
            </label>
            <input
              type="email"
              placeholder="admin@telkom.id"
              className="w-full p-4 mt-1 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-red-800 transition-all font-medium"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-4">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-4 mt-1 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-red-800 transition-all font-medium"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-800 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-red-100 disabled:bg-gray-300"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 font-medium">
            Belum punya akses? <br />
            <Link
              to="/register"
              className="text-red-800 font-black border-b-2 border-red-800 hover:text-black hover:border-black transition-all"
            >
              Daftar Akun Baru
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
