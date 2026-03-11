import HistorySection from "../components/HistorySection";
import DiversitySection from "../components/DivercitySection";
import VisionMission from "../components/VissionMission";

const About = () => {
  const leaders = [
    { name: "Prof. Dr. Suyanto", role: "Rektor" },
    { name: "Parman Sukarno, Ph.D.", role: "Wakil Rektor Akademik" },
    { name: "Nurwijayadi, S.T., M.M.", role: "Wakil Rektor Sumber Daya" },
    {
      name: "Prof. Dr. Ratri Wahyuningtyas",
      role: "Wakil Rektor Kemahasiswaan",
    },
    { name: "Angga Rusdinar, Ph.D.", role: "Wakil Rektor Riset & Inovasi" },
  ];

  return (
    <div className="bg-white">
      <HistorySection />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase border-b-4 border-red-800 inline-block pb-2">
              Pimpinan Kami
            </h2>
          </div>

          <div className="flex justify-center mb-20">
            <div className="bg-white p-4 md:p-8 rounded-[30px] border-gray-100 max-w-6xl w-full">
              <img
                src="https://b856188.smushcdn.com/856188/wp-content/uploads/2025/12/SOTK-ID-scaled.png?lossy=2&strip=1&webp=1"
                alt="Struktur Organisasi Telkom University"
                className="w-full h-auto object-contain rounded-xl"
              />
              <p className="text-center text-gray-500 text-sm mt-4 italic">
                Bagan Struktur Organisasi Telkom University
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-red-700"
              >
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden border-2 border-red-800">
                    <img
                      // src="https://play-lh.googleusercontent.com/7umsqwK51mKv749Q2NTf52QDRMwiF_aZiUGyf6ADVylp2_BIN7AvZCt5-Crk6ovvAg"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZz7GHfjLXk7AjmdsrT-cxvAcYn2I3cRLdA&s"
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-sm leading-tight mb-2">
                  {leader.name}
                </h3>
                <p className="text-xs text-red-700 uppercase font-semibold">
                  {leader.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiversitySection />
      <VisionMission />
    </div>
  );
};

export default About;
