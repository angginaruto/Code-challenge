import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Backendless from "../services/backendless";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await Backendless.Data.of("Blog").findById(id as string);
        setBlog(data);
      } catch (err) {
        console.error("Gagal ambil detail:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading)
    return (
      <div className="py-20 text-center font-bold uppercase tracking-widest text-gray-400">
        Loading Article...
      </div>
    );
  if (!blog)
    return (
      <div className="py-20 text-center font-bold text-red-800">
        ARTIKEL TIDAK DITEMUKAN.
      </div>
    );

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50 py-24 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            to="/blog"
            className="text-[10px] font-black uppercase tracking-[0.3em] text-red-800 mb-8 inline-block hover:text-black transition-all"
          >
            ← Kembali ke Blog
          </Link>
          <div className="flex justify-center gap-4 mb-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{new Date(blog.created).toLocaleDateString("id-ID")}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight uppercase italic italic-none tracking-tighter">
            {blog.title}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto py-20 px-6">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-[2.2rem] text-lg whitespace-pre-line font-serif">
            {blog.content}
          </p>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-100 flex justify-between items-center">
          <div className="bg-red-800 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
            {blog.category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
