const Testimonials = () => {
  const reviews = [
    {
      name: "Andi Pratama",
      role: "Alumni Teknik Elektro",
      text: "Kurikulum yang adaptif terhadap teknologi AI sangat membantu karir saya di industri teknologi global saat ini.",
    },
    {
      name: "Siti Sarah",
      role: "Mahasiswi Informatika",
      text: "Lingkungan inklusif membuat saya yang berasal dari pelosok daerah merasa sangat diterima dan didukung penuh.",
    },
    {
      name: "Budi Santoso",
      role: "Alumni Rekayasa Industri",
      text: "Fasilitas laboratorium yang lengkap dan dosen yang berpengalaman memberikan bekal praktis yang sangat berharga.",
    },
    {
      name: "Rina Wijaya",
      role: "Mahasiswi Desain Komunikasi Visual",
      text: "Ekosistem kreatif di kampus ini benar-benar memicu inovasi. Saya merasa siap menghadapi tantangan industri kreatif.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-black text-gray-900 mb-16 uppercase">
          Apa Kata Mereka?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-8 bg-gray-50 rounded-[2.5rem] relative hover:bg-red-50 transition-colors duration-300 border border-gray-100"
            >
              <span className="text-6xl text-red-200 absolute top-4 left-6 font-serif select-none">
                “
              </span>

              <div className="relative z-10">
                <p className="text-gray-700 italic mb-8 leading-relaxed text-lg">
                  {r.text}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 leading-none mb-1">
                      {r.name}
                    </h4>
                    <p className="text-xs text-red-800 font-bold uppercase tracking-wider">
                      {r.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
