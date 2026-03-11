import HeroSection from "../components/Hero";
import StatsSection from "../components/StatsSection";
import FacultyPreview from "../components/FacultyPreview";
import Testimonials from "../components/Testimonials";
import HomeOverview from "../components/HomeOverview";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <HomeOverview />
      <StatsSection />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 uppercase">
            Fakultas Kami
          </h2>
          <p className="text-gray-600 mt-4">
            Pilih bidang keahlianmu dan bangun masa depan bersama kami.
          </p>
        </div>
        <FacultyPreview />
      </section>
      <Testimonials />
      <section className="py-16 bg-[#991b1b] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Siap Menjadi Bagian dari Keluarga Besar Kami?
        </h2>
      </section>
    </div>
  );
};

export default Home;
