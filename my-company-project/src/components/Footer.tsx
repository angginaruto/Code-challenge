import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#991b1b] text-white py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-xl font-bold uppercase tracking-wider">Kontak</h3>
          <div className="flex items-center gap-4">
            <img
              src="https://b856188.smushcdn.com/856188/wp-content/uploads/2025/07/Kampus-Berdampak_.png?lossy=2&strip=1&webp=1&size=358x0"
              alt="Telkom Logo"
              className="h-12 bg-transparent p-1 rounded"
            />
          </div>

          <div className="flex gap-4 text-xl">
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
            <FaYoutube className="cursor-pointer hover:text-gray-300" />
            <FaLinkedin className="cursor-pointer hover:text-gray-300" />
            <FaTiktok className="cursor-pointer hover:text-gray-300" />
            <FaFacebook className="cursor-pointer hover:text-gray-300" />
            <FaTwitter className="cursor-pointer hover:text-gray-300" />
          </div>

          <div className="text-sm space-y-4 leading-relaxed opacity-90">
            <p className="flex gap-3">
              <span className="shrink-0">📍</span>
              Gedung Bangkit Telkom University Jl. Telekomunikasi Terusan Buah
              Batu Indonesia 40257, Bandung, Indonesia
            </p>
            <p className="flex gap-3">
              <span className="shrink-0">📞</span> (022) 7566456
            </p>
            <p className="flex gap-3">
              <span className="shrink-0">✉️</span> info@telkomuniversity.ac.id
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
              Kerjasama
            </h3>
            <ul className="text-sm space-y-2 opacity-90">
              <li className="hover:underline cursor-pointer">
                Bagian Kerjasama
              </li>
              <li className="hover:underline cursor-pointer">
                Bagian Karier dan Alumni
              </li>
              <li className="hover:underline cursor-pointer">
                Bagian Kantor Internasional
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
              Riset dan Inovasi
            </h3>
            <ul className="text-sm space-y-2 opacity-90">
              <li className="hover:underline cursor-pointer">
                Bagian Penelitian dan Pengabdian Masyarakat
              </li>
              <li className="hover:underline cursor-pointer">
                Bandung Techno Park
              </li>
              <li className="hover:underline cursor-pointer">SDG's Center</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
            Lainnya
          </h3>
          <ul className="text-sm space-y-2 opacity-90">
            <li className="hover:underline cursor-pointer">Berita Terkini</li>
            <li className="hover:underline cursor-pointer">Unduh</li>
            <li className="hover:underline cursor-pointer">Buletin</li>
            <li className="hover:underline cursor-pointer">Direktori</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
            Akademik
          </h3>
          <ul className="text-sm space-y-2 opacity-90">
            <li className="hover:underline cursor-pointer">
              Bagian Standar Layanan Akademik
            </li>
            <li className="hover:underline cursor-pointer">Open Library</li>
            <li className="hover:underline cursor-pointer">iGracias</li>
            <li className="hover:underline cursor-pointer">
              Learn Management System
            </li>
            <li className="hover:underline cursor-pointer">Pusat Bahasa</li>
            <li className="hover:underline cursor-pointer">Open CourseWare</li>
            <li className="hover:underline cursor-pointer">Kampus Berdampak</li>
            <li className="hover:underline cursor-pointer">Akreditasi</li>
            <li className="hover:underline cursor-pointer">myTelU Mobile</li>
            <li className="hover:underline cursor-pointer">Wisuda</li>
          </ul>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 flex flex-col gap-2">
        <button className="bg-white text-[#991b1b] p-3 rounded-full shadow-lg">
          <FaTwitter />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
