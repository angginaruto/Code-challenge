import heroVideo from "../assets/hero-telkom.mp4";
const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full h-auto min-h-full max-w-none"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute z-10 w-full h-full bg-black/40"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-widest leading-none mb-2">
          TELKOM UNIVERSITY
        </h1>

        <p className="text-xl md:text-2xl font-bold uppercase tracking-wide text-yellow-400 mb-5">
          BEST PRIVATE UNIVERSITY
        </p>

        <p className="text-base md:text-xl font-medium tracking-tight max-w-3xl leading-relaxed">
          National Excellence In Entrepreneurial University
        </p>
      </div>

      <div className="absolute bottom-0 z-30 h-1 bg-[#991b1b] w-full"></div>
    </div>
  );
};

export default Hero;
