const VisionMission = () => {
  const missions = [
    "Menyelenggarakan dan mengembangkan pendidikan berbasis SAFE AI berkelas dunia, dan berwawasan kewirausahaan.",
    "Mengakselerasi transformasi digital berbasis SAFE AI dalam mengembangkan dan menyebarluaskan pengetahuan baru dan produk intelektual di bidang teknologi, sains, dan seni yang berkontribusi pada pemenuhan tujuan pembangunan berkelanjutan (sustainable development goals).",
    "Berkolaborasi dengan industri dan pemangku kepentingan lain dalam pengembangan inovasi berbasis SAFE AI yang berkontribusi pada pertumbuhan ekonomi bangsa.",
  ];

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h4 className="text-gray-900 text-xl font-bold tracking-widest uppercase mb-2">
            BEST PRIVATE UNIVERSITY
          </h4>
          <h1 className="text-[#991b1b] text-5xl md:text-7xl font-black mb-12">
            Creating the Future
          </h1>

          <div className="w-24 h-1 bg-gray-300 mx-auto mb-12"></div>

          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto italic mb-16">
            "Mengakselerasi transformasi digital berbasis SAFE AI dalam ilmu
            pengetahuan dan teknologi"
          </p>

          <div className="bg-gray-50 p-10 rounded-[3rem] shadow-sm inline-block w-full">
            <h2 className="text-[#991b1b] text-4xl font-extrabold uppercase mb-6 tracking-wider">
              Visi
            </h2>
            <p className="text-gray-800 text-xl md:text-2xl leading-relaxed max-w-5xl mx-auto font-medium">
              Menjadi National Excellence Entrepreneurial University berbasis
              SAFE AI pada tahun 2028, yang berkontribusi pada pemenuhan tujuan
              pembangunan berkelanjutan (sustainable development goals).
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-[#991b1b] text-4xl font-extrabold uppercase text-center mb-16 tracking-wider">
            Misi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {missions.map((misi, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50 10C30 10 10 30 10 50C10 70 30 90 50 90C70 90 90 70 90 50C90 30 70 10 50 10ZM50 75C36.2 75 25 63.8 25 50C25 36.2 36.2 25 50 25C63.8 25 75 36.2 75 50C75 63.8 63.8 75 50 75Z"
                      fill="#991b1b"
                    />
                    <path
                      d="M50 35C41.7 35 35 41.7 35 50C35 58.3 41.7 65 50 65C58.3 65 65 58.3 65 50C65 41.7 58.3 35 50 35Z"
                      fill="#991b1b"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{misi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
