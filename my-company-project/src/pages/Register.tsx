import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Backendless from "../services/backendless";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const user = new Backendless.User();
    user.email = email;
    user.password = password;
    (user as any).name = name;

    try {
      await Backendless.UserService.register(user);
      alert("Pendaftaran Berhasil! Silakan Login.");
      navigate("/login");
    } catch (err: any) {
      alert("Gagal Daftar: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
            Buat Akun Admin
          </h1>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">
            Daftar untuk mulai menulis Blog
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-red-800 transition-all"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-red-800 transition-all"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password Baru"
            className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-red-800 transition-all"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-800 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg disabled:bg-gray-300"
          >
            {loading ? "Mendaftarkan..." : "Daftar Sekarang"}
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-500 font-medium">
          Sudah punya akun?{" "}
          <Link
            to="/login"
            className="text-red-800 font-black border-b-2 border-red-800"
          >
            Login di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
