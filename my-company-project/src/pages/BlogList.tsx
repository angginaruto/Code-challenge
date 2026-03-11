import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Backendless from "../services/backendless";
import useAuthStore from "../store/useAuthStore";

const BlogList = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [totalCount, setTotalCount] = useState(0);
  const { isLoggedIn } = useAuthStore();

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const limit = 3;
  const offset = (currentPage - 1) * limit;

  const categories = ["All", "Teknologi", "Event", "Kreatif"];

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const queryBuilder = Backendless.DataQueryBuilder.create();
        queryBuilder.setSortBy(["created DESC"]);

        queryBuilder.setPageSize(limit);
        queryBuilder.setOffset(offset);

        if (selectedCategory !== "All") {
          queryBuilder.setWhereClause(`category = '${selectedCategory}'`);
        }

        const data = await Backendless.Data.of("Blog").find(queryBuilder);

        const count =
          await Backendless.Data.of("Blog").getObjectCount(queryBuilder);

        setBlogs(data);
        setTotalCount(count);
      } catch (err) {
        console.error("Gagal ambil blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [selectedCategory, currentPage]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="bg-white min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-b-4 border-black pb-8">
          <h1 className="text-7xl font-black text-gray-900 uppercase italic tracking-tighter">
            The Blog
          </h1>

          <div className="flex flex-wrap justify-between items-center mt-8 gap-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSearchParams({ page: "1" });
                  }}
                  className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    selectedCategory === cat
                      ? "bg-red-800 text-white shadow-lg"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {isLoggedIn && (
              <Link
                to="/create-blog"
                className="bg-black text-white px-6 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-red-800 transition-all"
              >
                + New Post
              </Link>
            )}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20 font-black text-gray-300 uppercase tracking-[0.5em]">
            Filtering...
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {blogs.map((blog) => (
                <article key={blog.objectId} className="flex flex-col group">
                  <div className="aspect-video bg-gray-100 mb-4 rounded-2xl overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${blog.objectId}/800/450`}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-[9px] font-black text-red-800 uppercase tracking-[0.2em] mb-2">
                    {blog.category}
                  </span>
                  <h2 className="text-xl font-black uppercase leading-tight mb-3 group-hover:text-red-800 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                    {blog.content.substring(0, 100)}...
                  </p>
                  <Link
                    to={`/blog/${blog.objectId}`}
                    className="text-[10px] font-black uppercase border-b-2 border-black inline-block w-fit pb-1 hover:text-red-800 hover:border-red-800"
                  >
                    Detail →
                  </Link>
                </article>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-20 gap-2">
                {Array.from({ length: totalPages }).map((_, index) => {
                  const pageNum = index + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setSearchParams({ page: String(pageNum) })}
                      className={`w-10 h-10 rounded-lg font-black transition-all ${
                        currentPage === pageNum
                          ? "bg-black text-white scale-110"
                          : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
            )}
          </>
        )}

        {!loading && blogs.length === 0 && (
          <div className="text-center py-20 font-bold text-gray-400 uppercase tracking-widest bg-gray-50 rounded-3xl">
            Tidak ada artikel di kategori {selectedCategory}.
          </div>
        )}
      </div>
      <button
        disabled={currentPage === totalPages}
        onClick={() => setSearchParams({ page: String(currentPage + 1) })}
        className="px-4 py-2 font-black uppercase text-[10px] tracking-widest border-2 border-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-all"
      >
        Next →
      </button>
    </div>
  );
};

export default BlogList;
