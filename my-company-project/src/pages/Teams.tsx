import { useEffect, useState } from "react";
import axios from "axios";

const leaders = [
  {
    name: "Prof. Dr. Suyanto",
    role: "Rektor",
    email: "suyanto@telkomuniversity.ac.id",
  },
  {
    name: "Parman Sukarno, Ph.D.",
    role: "Wakil Rektor Bidang Akademik",
    email: "psukarno@telkomuniversity.ac.id",
  },
  {
    name: "Nurwijayadi, S.T., M.M.",
    role: "Wakil Rektor Bidang Sumber Daya",
    email: "nurwid@telkomuniversity.ac.id",
  },
  {
    name: "Prof. Dr. Ratri Wahyuningtyas",
    role: "Wakil Rektor Bidang Admisi, Kemahasiswaan dan Alumni",
    email: "ratriwahyu@telkomuniversity.ac.id",
  },
  {
    name: "Angga Rusdinar, Ph.D.",
    role: "Wakil Rektor Bidang Riset, Inovasi dan Kerja Sama",
    email: "anggarusdinar@telkomuniversity.ac.id",
  },
];

const shortBios = [
  "Pakar di bidang transformasi digital dan optimasi sistem informasi.",
  "Fokus pada pengembangan kurikulum berbasis industri dan teknologi SAFE AI.",
  "Peneliti aktif dalam bidang keberlanjutan energi dan inovasi teknologi.",
  "Berpengalaman dalam membimbing mahasiswa untuk kompetisi internasional.",
  "Spesialis dalam manajemen strategis dan pengembangan kewirausahaan.",
  "Dedikasi tinggi pada metode pengajaran interaktif dan aplikatif.",
  "Ahli dalam komunikasi digital dan dinamika sosial masyarakat modern.",
  "Berfokus pada integrasi teknologi informasi dalam dunia kreatif.",
];

interface Staff {
  name: { first: string; last: string };
  email: string;
  picture: { large: string };
  location: { city: string };
}

const Teams = () => {
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=12&nat=id")
      .then((res) => {
        setStaffList(res.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto pt-10 px-4">
        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl rounded-[40px] overflow-hidden shadow-2xl border-b-10 border-red-800">
            <img
              src="https://ypt.or.id/wp-content/uploads/2024/12/Tel-U-Kukuhkan-Enam-Guru-Besar-Baru-Wujudkan-Komitmen-dalam-Akademik-dan-Riset-1200x600-1.webp"
              alt="Leadership Banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-16 mb-12">
        <h2 className="text-red-800 font-bold text-sm tracking-[0.3em] uppercase mb-2">
          Pimpinan
        </h2>
        <h1 className="text-4xl font-extrabold text-gray-900 uppercase">
          Rektorat
        </h1>
        <div className="h-1 w-20 bg-red-800 mx-auto mt-4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-red-800 hover:shadow-xl transition-all duration-300 group"
            >
              <p className="text-red-700 font-bold text-xs uppercase mb-1 tracking-wider">
                {leader.role}
              </p>
              <h3 className="text-xl font-black text-gray-900 group-hover:text-red-800 transition-colors">
                {leader.name}
              </h3>
              <div className="mt-4 flex items-center text-gray-500 text-sm italic">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {leader.email}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-red-800 font-bold text-sm tracking-[0.3em] uppercase mb-2">
              Academic Staff
            </h2>
            <h1 className="text-4xl font-extrabold text-gray-900 uppercase">
              Staf Pengajar
            </h1>
            <div className="h-1 w-20 bg-red-800 mt-4"></div>
          </div>

          {loading ? (
            <div className="text-center py-10 text-gray-400 font-bold italic">
              Memuat data staf...
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {staffList.map((staff, index) => {
                const randomBio = shortBios[index % shortBios.length];

                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group flex flex-col h-full"
                  >
                    <div className="h-60 overflow-hidden">
                      <img
                        src={staff.picture.large}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="p-6 grow flex flex-col">
                      <h4 className="font-bold text-gray-900 capitalize">
                        {staff.name.first} {staff.name.last}
                      </h4>
                      <p className="text-red-800 text-[10px] font-bold uppercase mb-3">
                        Dosen Pengajar
                      </p>

                      <p className="text-gray-600 text-xs italic mb-4 grow border-l-2 border-red-100 pl-3">
                        "{randomBio}"
                      </p>

                      <div className="text-[10px] text-gray-400 border-t pt-4">
                        {staff.email}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teams;
