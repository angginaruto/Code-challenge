import foto_profil from "../assets/foto-profil.png";

export default function Hero() {
  return (
    <>
      <section id="home">
        <main className=" hidden lg:flex relative  bg-[#E5E5E5] min-h-[100vh] overflow-hidden shadow-lg">
          <div className="absolute z-2 h-[1373.99px] w-[1802.3px] bg-black -rotate-83 left-[420px] "></div>
          <div className="absolute z-3 h-[100%] w-[100%] px-[100px] flex items-center justify-between px-[150px]">
            <div className="h-[300px] w-[400px] flex justify-center flex-col">
              <p className="text-[30px] font-raleway font-bold mb-[30px]">
                Hello I am . . .
              </p>
              <p className="text-[50px] font-raleway font-bold">
                Anggita Zahra Kamila
              </p>
              <p className="text-[20px] font-raleway text-[#909090] font-extrabold mb-[50px]">
                Aspiring Software Engineer
              </p>
              <p className="font-raleway text-[#909090] mb-[30px]">
                Passionate about building scalable systems and continuously
                improving as a developer. Currently focused on mastering modern
                web technologies and real-world problem solving.
              </p>
              <div className="flex gap-[30px]">
                <a
                  href="#portofolio"
                  className="flex font-montserrat items-center text-[17px]"
                >
                  View Portfolio
                </a>
                <a
                  href="#contact"
                  className="h-[46px] w-[147px] flex justify-center items-center bg-black rounded-[30px] text-white font-bold text-[15px]"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div className="h-[400px] w-[400px] bg-green-100 overflow-hidden flex rounded-[200px]">
              <img
                src={foto_profil}
                className="h-full w-full object-cover object-left"
              />
            </div>
          </div>
        </main>
        {/* mobile */}
        <main className="flex lg:hidden bg-[#E5E5E5] flex-col items-center shadow-lg">
          <div className="h-[350px] w-[100%] bg-black flex mb-[20px] justify-evenly items-center">
            <img src={foto_profil} className="h-[300px] w-[300px]" />
          </div>
          <div className="flex-col flex-1 items-center p-[20px]">
            <p className="text-[20px] font-raleway object-cover font-bold mb-[30px] text-center">
              Hello I am . . .
            </p>
            <p className="text-[30px] font-raleway font-bold text-center">
              Anggita Zahra Kamila
            </p>
            <p className="text-[20px] font-raleway text-[#909090] font-extrabold mb-[50px] text-center">
              Aspiring Software Engineer
            </p>
            <p className="font-raleway text-[#909090] mb-[30px] text-center">
              Passionate about building scalable systems and continuously
              improving as a developer. Currently focused on mastering modern
              web technologies and real-world problem solving.
            </p>
            <div className="flex gap-[30px] justify-center">
              <a
                href="#portofolio"
                className="flex font-montserrat items-center text-[17px]"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="h-[46px] w-[147px] flex justify-center items-center bg-black rounded-[30px] text-white font-bold text-[15px]"
              >
                Contact Me
              </a>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
