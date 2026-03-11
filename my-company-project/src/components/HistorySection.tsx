const HistorySection = () => {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-xl border-b-8 border-red-700">
            <img
              src="https://b856188.smushcdn.com/856188/wp-content/uploads/2025/07/Group-1171275922-1.png?lossy=2&strip=1&webp=1"
              alt="Sejarah Telkom University"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "1990",
            "1994",
            "2004",
            "2007",
            "2008",
            "2010",
            "2013",
            "2023",
            "2024",
          ].map((year) => (
            <div key={year} className="flex flex-col items-center">
              <span className="text-red-700 font-bold text-lg">{year}</span>
              <div className="h-3 w-3 bg-red-700 rounded-full mt-1"></div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-gray-700 text-lg leading-relaxed space-y-6 text-justify md:text-left">
          <p>
            Telkom University terus melakukan transformasi untuk memperkuat
            posisinya sebagai lembaga pendidikan unggulan melalui Telkom
            University National Campus (TUNC). Program ini bertujuan untuk
            menyatukan berbagai perguruan tinggi swasta di bawah naungan YPT
            menjadi satu entitas pendidikan yang lebih kuat dan terpadu.
          </p>
          <p>
            Pelaksanaan Kick-off Telkom University National Campus (TUNC)
            dilaksanakan pada 25 Januari 2022. Dimulai dengan Kick-off penyatuan
            IT Telkom Jakarta pada 10 Juni 2022, dan resmi menjadi Telkom
            University Jakarta (TUJ) pada 25 Januari 2023. Langkah ini
            dilanjutkan dengan penyatuan kampus-kampus lainnya di Surabaya dan
            Purwokerto hingga tahun 2024.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
