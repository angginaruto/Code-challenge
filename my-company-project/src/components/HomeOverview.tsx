import { Users, Target, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeOverview = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-100 rounded-full opacity-50 z-0"></div>
            <img
              src="https://inspirensis.id/data/media/2025/06/Gedung-Bangkit-Telkom-University-Bandung-810-1200x800.jpg"
              alt="Kampus Telkom University"
              className="relative z-10 rounded-[3rem] shadow-2xl w-full h-125 object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#991b1b] text-white p-8 rounded-4xl shadow-xl hidden md:block z-20">
              <p className="text-4xl font-black italic">#1</p>
              <p className="text-xs font-bold uppercase tracking-widest">
                PTS Terbaik di Indonesia
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-[#991b1b] font-bold uppercase tracking-[0.2em] text-sm mb-3">
                Company Overview
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Membangun Masa Depan Melalui Inovasi & Inklusivitas
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              Berdiri sejak tahun 1990 sebagai STT Telkom, kami telah
              bertransformasi menjadi institusi pendidikan unggul yang berfokus
              pada teknologi informasi. Dengan semangat{" "}
              <strong>Creating the Future</strong>, kami berkomitmen untuk
              mencetak lulusan yang siap menghadapi tantangan global melalui
              riset dan kewirausahaan berbasis <strong>SAFE AI</strong>.
            </p>

            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#991b1b]">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">
                    Tim Pimpinan Visioner
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Dikelola oleh para pakar dan praktisi pendidikan kelas dunia
                    yang berfokus pada transformasi digital dan standar
                    internasional.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#991b1b]">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">
                    Budaya Inklusif
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Merangkul keberagaman dari 35 provinsi di Indonesia,
                    menciptakan lingkungan belajar yang toleran, kreatif, dan
                    kolaboratif.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#991b1b]">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">
                    Fokus Masa Depan
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Mengintegrasikan SAFE AI dalam kurikulum untuk mencetak
                    lulusan yang mampu berkontribusi pada pembangunan
                    berkelanjutan (SDGs).
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                className="bg-[#991b1b] text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-900 transition-all shadow-lg hover:shadow-red-200"
                onClick={() => navigate("/about")}
              >
                Pelajari Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOverview;
