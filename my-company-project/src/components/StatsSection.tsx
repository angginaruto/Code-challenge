const StatsSection = () => {
  const stats = [
    { label: "Provinsi di Indonesia", value: "35+" },
    { label: "Mahasiswa Aktif", value: "30rb+" },
    { label: "Akreditasi", value: "Unggul" },
    { label: "Tahun Berdiri", value: "1990" },
  ];

  return (
    <div className="bg-[#991b1b] py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <h3 className="text-4xl font-black text-white mb-1">
              {stat.value}
            </h3>
            <p className="text-white text-sm font-semibold uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
