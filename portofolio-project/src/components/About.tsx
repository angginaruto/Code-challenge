import pembatas from "../assets/pembagi.png";

export default function About() {
  const style_h1 =
    "text-[18px] font-bold font-montserrat border-[4px] border-black mb-[15px] border-t-0 border-b-0 px-2";

  const content = [
    {
      title: "Brief Bio",
      desc: "I am a passionate web developer with a keen interest inbuilding interactive and efficient web applications. I enjoyexploring new technologies and have hands-on experience in developing both front-end and back-end solutions for real-world projects.",
    },
    {
      title: "Core Skills",
      desc: "JavaScript, React, Node.js, Express, Tailwind CSS, Python, Git, RESTful APIs.",
    },
    {
      title: "Key Values",
      desc: "I prioritize clear communication, timely delivery, and attention to detail in every project I work on. I value collaboration, continuous learning, and creating solutions that are both functional and user-friendly.",
    },
  ];

  return (
    <section id="about">
      <main className="hidden lg:flex min-h-screen bg-[#E5E5E5] flex-col items-center justify-evenly">
        <div className="h-24.25 w-75.75 border-[5px] border-black flex items-center justify-center">
          <p className="font-montserrat text-[25px] tracking-widest font-bold">
            ABOUT ME
          </p>
        </div>
        <div className="px-[100px] text-[#050505] flex flex-col text-center items-center justify-center gap-[70px]">
          <div className="flex gap-[100px] items-center justify-center">
            <div className="h-[104px] w-[431px]">
              <p className={style_h1}>Brief Bio</p>
              <p className="font-opensans text-[14px] font-light">
                {content[0].desc}
              </p>
            </div>
            <div className="h-[104px] w-[431px]">
              <p className={style_h1}>Core Skills</p>
              <p className="font-opensans text-[14px] font-light">
                {content[1].desc}
              </p>
            </div>
          </div>
          <img src={pembatas} className="h-[30px]" alt="divider" />
          <div className="h-[104px] w-[431px] flex-col items-center justify-center">
            <p className={style_h1}>Key Values</p>
            <p className="font-opensans text-[14px] font-light">
              {content[2].desc}
            </p>
          </div>
        </div>
      </main>

      <main className="flex lg:hidden min-h-screen bg-[#E5E5E5] flex-col items-center py-10 px-6 gap-8">
        <div className="border-[4px] border-black p-4 mb-4">
          <p className="font-montserrat text-[20px] font-bold tracking-tighter">
            ABOUT ME
          </p>
        </div>

        {content.map((item, index) => (
          <div
            key={index}
            className="w-full bg-white/50 p-6 border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                       active:scale-95 active:shadow-none transition-all duration-200"
          >
            <p className="text-[16px] font-bold font-montserrat border-l-4 border-black pl-3 mb-3">
              {item.title}
            </p>
            <p className="font-opensans text-[13px] leading-relaxed text-gray-800">
              {item.desc}
            </p>
          </div>
        ))}

        <img src={pembatas} className="h-[20px] opacity-50" alt="divider" />
      </main>
    </section>
  );
}
