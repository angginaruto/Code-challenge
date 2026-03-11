import { ArrowRight } from "lucide-react";

const faculties = [
  {
    name: "Teknik Elektro",
    abbr: "FTE",
    color: "bg-blue-600",
    desc: "Fokus pada sistem tenaga, telekomunikasi, dan teknik komputer berbasis teknologi masa depan.",
  },
  {
    name: "Rekayasa Industri",
    abbr: "FRI",
    color: "bg-green-600",
    desc: "Mengoptimalkan sistem kompleks dan manajemen operasional di berbagai sektor industri.",
  },
  {
    name: "Informatika",
    abbr: "FIF",
    color: "bg-yellow-600",
    desc: "Pusat keunggulan software engineering, data science, dan pengembangan SAFE AI.",
  },
  {
    name: "Ekonomi & Bisnis",
    abbr: "FEB",
    color: "bg-teal-600",
    desc: "Mencetak pemimpin bisnis dan akuntan profesional yang adaptif terhadap ekonomi digital.",
  },
  {
    name: "Komunikasi & Ilmu Sosial",
    abbr: "FKS",
    color: "bg-purple-600",
    desc: "Mempelajari dinamika komunikasi massa dan digital dalam konteks sosial global.",
  },
  {
    name: "Industri Kreatif",
    abbr: "FIK",
    color: "bg-orange-600",
    desc: "Wadah bagi desainer dan seniman untuk berinovasi di bidang kriya, desain produk, dan visual.",
  },
  {
    name: "Ilmu Terapan",
    abbr: "FIT",
    color: "bg-lime-600",
    desc: "Pendidikan vokasi yang berfokus pada keahlian praktis dan kesiapan kerja instan.",
  },
];

const FacultyPreview = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faculties.map((faculty, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
          >
            <div
              className={`${faculty.color} text-white text-xs font-black px-4 py-1 rounded-full w-fit mb-6`}
            >
              {faculty.abbr}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#991b1b] transition-colors">
              Fakultas {faculty.name}
            </h3>

            <p className="text-gray-500 leading-relaxed mb-8 grow">
              {faculty.desc}
            </p>

            <button className="flex items-center text-[#991b1b] font-bold gap-2 group/btn">
              Lihat Program Studi
              <ArrowRight
                size={18}
                className="group-hover/btn:translate-x-2 transition-transform"
              />
            </button>

            <div className="absolute bottom-0 left-0 h-1 bg-[#991b1b] w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyPreview;
