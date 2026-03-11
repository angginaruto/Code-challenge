import background from "../assets/background.png";

export default function Portofolio() {
  const h1_style =
    "text-[18px] lg:text-[20px] text-[#FFFBFB] font-bold font-montserrat border-[5px] border-[#FFFBFB] mb-[25px] lg:mb-[30px] border-t-0 border-b-0 px-[20px] lg:px-[30px] text-center";
  const p_style =
    "text-[#FFFBFB] font-opensans font-light text-[13px] lg:text-[14px]";

  return (
    <>
      <section id="portofolio">
        {/* === TAMPILAN DESKTOP (KODE ASLI KAMU) === */}
        <main className="hidden lg:flex min-h-[100vh] w-[100%] bg-[#1A1A1A] flex flex-col items-center relative shadow-2xl">
          <img src={background} className="z-0 absolute" />
          <div className="h-[97px] w-[303px] border-[5px] border-black flex items-center justify-center relative z-10 m-[80px]">
            <p className="font-montserrat text-[25px] tracking-widest font-bold">
              PORTOFOLIO
            </p>
          </div>
          <div className="flex justify-evenly flex-col">
            <div className="flex">
              <div className="flex flex-col w-[300px] m-[40px]">
                <p className={h1_style}>Describe the Project Briefly</p>
                <p className={p_style}>
                  A modern single-page web application built with React and Vite
                  to demonstrate component-based architecture and efficient
                  frontend development workflow. The project focuses on reusable
                  UI components, clean code organization, and fast build
                  performance using modern JavaScript (ES6+).
                </p>
              </div>
              <div className="flex flex-col w-[300px] m-[40px]">
                <p className={h1_style}>Situation</p>
                <p className={p_style}>
                  As part of strengthening my frontend development fundamentals,
                  I built a simple web application using React and Vite to gain
                  hands-on experience with modern development workflows and
                  component-based architecture. This project served as practical
                  training to deepen my understanding of React project
                  structure, modular component design, and the efficiency
                  benefits of modern build tools.
                </p>
              </div>
              <div className="flex flex-col w-[300px] m-[40px]">
                <p className={h1_style}>Task</p>
                <p className={p_style}>
                  My responsibility was to design and implement a
                  well-structured application architecture with reusable
                  components while setting up a lightweight and efficient
                  development environment. I aimed to ensure that the project
                  maintained a clean folder structure and was scalable for
                  future feature expansion or deployment.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col w-[300px] m-[40px]">
                <p className={h1_style}>Action</p>
                <p className={p_style}>
                  I initialized the project using Vite to leverage its fast
                  development server and optimized build process, then
                  structured the application using a modular component-based
                  approach in React. I organized the project with a clean folder
                  structure, implemented reusable UI components, and managed the
                  codebase using GitHub for version control.
                </p>
              </div>
              <div className="flex flex-col w-[300px] m-[40px]">
                <p className={h1_style}>Result</p>
                <p className={p_style}>
                  The final outcome was a functional React application with a
                  clear and maintainable code structure and an efficient
                  development workflow. This project strengthened my
                  understanding of reusable component architecture, modern
                  frontend tooling, and professional code organization
                  practices.
                </p>
              </div>
              <div className="flex flex-col w-[300px] m-[40px]">
                <p className={h1_style}>Technology Used and Link</p>
                <p className={p_style}>
                  Technologies Used React, Vite, JavaScript / JSX, CSS, Git /
                  GitHub
                </p>
                <a
                  className="h-[46px] w-[147px] flex justify-center items-center bg-white rounded-[30px] text-black font-bold text-[15px] mt-[20px]"
                  href="https://github.com/angginaruto/React-Vite"
                  target="_blank"
                >
                  Link Project
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* === TAMPILAN MOBILE (SETENGAH GAMBAR, SETENGAH HITAM) === */}
        <main className="flex lg:hidden min-h-screen w-full flex-col bg-[#1A1A1A]">
          {/* Bagian Atas: Gambar (Setengah Layar) */}
          <div className="h-[40vh] w-full relative">
            <img src={background} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white border-[4px] border-black px-6 py-3">
                <p className="font-montserrat text-[20px] font-bold tracking-widest text-black">
                  PORTOFOLIO
                </p>
              </div>
            </div>
          </div>

          {/* Bagian Bawah: Konten Hitam (Scrollable) */}
          <div className="flex-1 bg-[#1A1A1A] p-8 flex flex-col gap-12">
            <div className="flex flex-col items-center text-center">
              <p className={h1_style}>Project Brief</p>
              <p className={p_style}>
                A modern single-page web application built with React and Vite
                to demonstrate component-based architecture and efficient
                frontend development workflow. The project focuses on reusable
                UI components, clean code organization, and fast build
                performance using modern JavaScript (ES6+).
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <p className={h1_style}>Situation</p>
              <p className={p_style}>
                As part of strengthening my frontend development fundamentals, I
                built a simple web application using React and Vite to gain
                hands-on experience with modern development workflows and
                component-based architecture. This project served as practical
                training to deepen my understanding of React project structure,
                modular component design, and the efficiency benefits of modern
                build tools.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <p className={h1_style}>Task</p>
              <p className={p_style}>
                My responsibility was to design and implement a well-structured
                application architecture with reusable components while setting
                up a lightweight and efficient development environment. I aimed
                to ensure that the project maintained a clean folder structure
                and was scalable for future feature expansion or deployment.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <p className={h1_style}>Action</p>
              <p className={p_style}>
                I initialized the project using Vite to leverage its fast
                development server and optimized build process, then structured
                the application using a modular component-based approach in
                React. I organized the project with a clean folder structure,
                implemented reusable UI components, and managed the codebase
                using GitHub for version control.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <p className={h1_style}>Result</p>
              <p className={p_style}>
                The final outcome was a functional React application with a
                clear and maintainable code structure and an efficient
                development workflow. This project strengthened my understanding
                of reusable component architecture, modern frontend tooling, and
                professional code organization practices.
              </p>
            </div>

            <div className="flex flex-col items-center text-center pb-10">
              <p className={h1_style}>Links</p>
              <a
                className="h-[46px] w-[147px] flex justify-center items-center bg-white rounded-[30px] text-black font-bold text-[15px]"
                href="https://github.com/angginaruto/React-Vite"
                target="_blank"
              >
                Link Project
              </a>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
