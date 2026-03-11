const DiversitySection = () => {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-[#991b1b] font-extrabold text-4xl md:text-5xl mb-8 tracking-tight">
            Keanekaragaman dan Inklusivitas
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-center">
            <p>
              Telkom University menjadi salah satu universitas swasta yang
              memiliki Mahasiswa/i, Dosen hingga staf akademik yang berasal
              hampir dari seluruh pelosok negeri. Lingkungan yang inklusif dan
              berbagai keberagaman membuat Telkom University menjadi sorotan
              publik, mulai dari orang tua, siswa, hingga dosen yang ingin
              mendaftarkan diri maupun anaknya untuk bergabung dengan Telkom
              University.
            </p>
            <p>
              Dosen dan Mahasiswa/i berasal dari berbagai pulau, suku dan juga
              budaya yang berbeda-beda mulai dari pulau Aceh hingga Papua yang
              kini menjadi satu kesatuan yaitu keluarga besar Telkom University.
              Mahasiswa Telkom University berasal dari 35 provinsi yang ada di
              Indonesia.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-20">
          <div className="relative w-full max-w-6xl">
            <img
              src="https://b856188.smushcdn.com/856188/wp-content/uploads/2024/07/MAP-PNG-1536x845.png?lossy=2&strip=1&webp=1"
              alt="Peta Keanekaragaman"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          <div className="border-l-4 border-[#991b1b] pl-6">
            <h3 className="text-[#991b1b] text-3xl font-bold mb-4 uppercase">
              UKM Daerah
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              Keberagaman budaya Indonesia terlihat melalui berbagai kebudayaan
              daerah yang berkembang di masyarakat. Ragam asal daerah mahasiswa
              memberikan motivasi untuk membuat komunitas atau unit kegiatan
              mahasiswa demi menyatukan kembali mahasiswa satu daerah di Telkom
              University.
            </p>
          </div>

          <div className="border-l-4 border-[#991b1b] pl-6">
            <h3 className="text-[#991b1b] text-3xl font-bold mb-4 uppercase">
              Fasilitas Disabilitas
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              Tak luput dari perhatian kampus, teman-teman yang memiliki
              keterbatasan fisik juga telah diberikan fasilitas khusus seperti
              akses kursi roda ke gedung perkuliahan, masjid, hingga parkir dan
              toilet khusus. Dukungan sistem juga mencakup Komunitas 'Buddy',
              Layanan Konseling, hingga Peta Akses Disabilitas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiversitySection;
