import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogService } from "../services/blogService";
import useAuthStore from "../store/useAuthStore";

const CreateBlog = () => {
  const navigate = useNavigate();

  const { user, isLoggedIn } = useAuthStore();

  const [publishing, setPublishing] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Teknologi");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return alert("Judul dan Konten wajib diisi!");

    setPublishing(true);
    try {
      const newPost = {
        title: title,
        content: content,
        author: user?.name || "Admin Telkom",
        category: category,
      };

      await blogService.createBlog(newPost);
      alert("Blog Berhasil Diterbitkan!");
      navigate("/blog");
    } catch (err: any) {
      alert("Gagal menyimpan: " + err.message);
    } finally {
      setPublishing(false);
    }
  };

  if (!isLoggedIn) return null;

  return (
    <div className="bg-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-gray-900 uppercase italic border-l-8 border-red-800 pl-6">
            Buat Artikel Baru
          </h1>
          <p className="text-gray-400 mt-2 font-bold uppercase tracking-widest text-[10px]">
            Menulis sebagai:{" "}
            <span className="text-red-800">
              {user?.name || "Authorized User"}
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
              Judul Artikel
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Masukkan judul..."
              className="w-full p-4 text-2xl font-black border-b-2 border-gray-100 focus:border-red-800 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
              Kategori
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full md:w-1/2 p-4 bg-gray-50 rounded-xl font-bold text-gray-700 outline-none"
            >
              <option value="Teknologi">Teknologi</option>
              <option value="Event">Event & Webinar</option>
              <option value="Kreatif">Industri Kreatif</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
              Isi Artikel
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tuliskan isi artikelmu..."
              className="w-full h-80 p-6 bg-gray-50 rounded-2xl border-none outline-none text-lg leading-relaxed shadow-inner"
            />
          </div>

          <button
            type="submit"
            disabled={publishing}
            className={`px-12 py-4 rounded-full font-black uppercase tracking-widest text-white transition-all ${
              publishing ? "bg-gray-300" : "bg-red-800 hover:bg-black"
            }`}
          >
            {publishing ? "Publishing..." : "Publish Artikel"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
