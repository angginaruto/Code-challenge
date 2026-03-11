const services = [
  {
    title: "School of Computing (Informatika)",
    desc: "Pendidikan kelas dunia di bidang AI, Data Science, dan Software Engineering.",
    price: "Mulai Rp 10.000.000 / Semester",
    testimony:
      "Kurikulumnya sangat *up-to-date* dengan kebutuhan industri teknologi saat ini.",
  },
  {
    title: "School of Electrical Engineering",
    desc: "Fokus pada teknologi telekomunikasi, sistem tenaga, dan robotika berbasis IoT.",
    price: "Mulai Rp 12.000.000 / Semester",
    testimony:
      "Laboratoriumnya sangat lengkap dan mendukung riset tingkat internasional.",
  },
  {
    title: "School of Creative Industries",
    desc: "Wadah bagi para kreator di bidang Desain Produk, Kriya, dan Seni Rupa.",
    price: "Mulai Rp 11.500.000 / Semester",
    testimony:
      "Lingkungan kampusnya sangat artistik dan memicu kreativitas tanpa batas.",
  },
];

const facultyGrid = [
  {
    name: "Fakultas Teknik Elektro",
    sub: "School of Electrical Engineering",
    color: "bg-blue-600",
    img: "https://b856188.smushcdn.com/856188/wp-content/uploads/2024/07/DSC_0659-1-2.png?lossy=2&strip=1&webp=1",
  },
  {
    name: "Fakultas Rekayasa Industri",
    sub: "School of Industrial Engineering",
    color: "bg-green-700",
    img: "https://b856188.smushcdn.com/856188/wp-content/uploads/2024/07/DSC_0659-1-3.png?lossy=2&strip=1&webp=1&size=634x0",
  },
  {
    name: "Fakultas Informatika",
    sub: "School of Computing",
    color: "bg-yellow-600",
    img: "https://b856188.smushcdn.com/856188/wp-content/uploads/2024/07/Rectangle-186-6.png?lossy=2&strip=1&webp=1&size=634x0",
  },
  {
    name: "Fakultas Ekonomi & Bisnis",
    sub: "School of Economic & Business",
    color: "bg-cyan-600",
    img: "https://b856188.smushcdn.com/856188/wp-content/uploads/2024/07/Rectangle-186-1.png?lossy=2&strip=1&webp=1&size=634x0",
  },
  {
    name: "Fakultas Komunikasi & Ilmu Sosial",
    sub: "School of Communication & Social Sciences",
    color: "bg-purple-500",
    img: "https://b856188.smushcdn.com/856188/wp-content/uploads/2024/07/Rectangle-186-8.png?lossy=2&strip=1&webp=1&size=634x0",
  },
  {
    name: "Fakultas Industri Kreatif",
    sub: "School of Creative Industries",
    color: "bg-orange-500",
    img: "https://b856188.smushcdn.com/856188/wp-content/uploads/2024/07/Rectangle-186-9.png?lossy=2&strip=1&webp=1&size=634x0",
  },
  {
    name: "Fakultas Ilmu Terapan",
    sub: "School of Applied Science",
    color: "bg-green-500",
    img: "https://b856188.smushcdn.com/856188/wp-content/uploads/2024/07/Rectangle-186-4.png?lossy=2&strip=1&webp=1&size=634x0",
  },
];

const Services = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-4">
      <div className="text-center mb-16 px-4">
        <div className="text-center mb-20 px-4">
          <p className="text-[#991b1b] font-bold uppercase tracking-[0.4em] text-xs mb-4">
            Explore Our Campus
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">
            Fakultas
          </h1>
          <div className="h-2 w-32 bg-[#991b1b] mx-auto mt-8 mb-6"></div>
          <p className="text-sm md:text-xl font-bold text-gray-400 uppercase tracking-[0.3em]">
            Schools of Telkom University
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facultyGrid.map((f, i) => (
              <div
                key={i}
                className={`${f.color} rounded-4xl overflow-hidden flex items-center justify-between text-white shadow-lg hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="p-8 md:p-10 flex-1">
                  <h2 className="text-3xl md:text-4xl font-black leading-tight uppercase mb-2">
                    {f.name}
                  </h2>
                  <p className="text-sm md:text-lg font-medium opacity-90 italic">
                    {f.sub}
                  </p>
                </div>
                <div className="w-1/3 h-full min-h-45">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-full h-full object-cover rounded-l-[3rem] border-l-4 border-white/20"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#991b1b] font-bold uppercase tracking-widest text-sm">
              Layanan Akademik
            </h2>
            <h1 className="text-4xl md:text-4xl font-black text-gray-900 mt-2 uppercase">
              Program Pendidikan
            </h1>
            <div className="h-1 w-20 bg-red-800 mx-auto mt-4"></div>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              Kami menawarkan berbagai pilihan studi berkualitas tinggi dengan
              standar internasional untuk membangun masa depanmu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((item, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed grow">
                  {item.desc}
                </p>

                <div className="bg-red-50 p-4 rounded-2xl mb-6">
                  <p className="text-xs text-red-800 font-bold uppercase tracking-widest">
                    Estimasi Biaya
                  </p>
                  <p className="text-xl font-black text-red-700">
                    {item.price}
                  </p>
                </div>

                <div className="italic text-gray-500 text-sm border-l-2 border-gray-200 pl-4 mb-8">
                  "{item.testimony}"
                </div>

                <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-[#991b1b] transition-colors">
                  Detail Program
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-24 px-4 overflow-hidden relative rounded-2xl">
        <span className="absolute top-0 left-10 text-[20rem] text-white/5 font-serif leading-none select-none">
          “
        </span>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-red-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">
              Success Stories
            </h2>
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase">
              Apa Kata Alumni & Mahasiswa?
            </h1>
            <div className="h-1.5 w-24 bg-red-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-sm">
              <p className="text-gray-300 text-lg italic leading-relaxed mb-8">
                "Fasilitas laboratorium di Telkom University sangat menunjang
                riset saya di bidang IoT. Dosen-dosennya pun sangat terbuka
                untuk diskusi proyek luar kampus."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center font-bold text-white text-xl">
                  A
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase">
                    Aditya Pratama
                  </h4>
                  <p className="text-red-500 text-xs font-bold uppercase tracking-widest">
                    Alumni Teknik Elektro
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-sm">
              <p className="text-gray-300 text-lg italic leading-relaxed mb-8">
                "Belajar di School of Computing memberikan saya logika
                pemrograman yang kuat. Sekarang saya bekerja sebagai Senior
                Developer berkat kurikulum yang industri-sentris."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center font-bold text-white text-xl">
                  S
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase">Siti Sarah</h4>
                  <p className="text-red-500 text-xs font-bold uppercase tracking-widest">
                    Mahasiswa Informatika
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
