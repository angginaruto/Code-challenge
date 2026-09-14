import css from "../assets/CSS-icon.png";
import js from "../assets/JavaScript-logo.png";
import html from "../assets/HTML-icon.png";
import git from "../assets/Git-Icon.png";
import tail from "../assets/tailwind.png";
import react_logo from "../assets/React.png";
import expressjs from "../assets/ExpressJS.png";
import nodejs from "../assets/Nodejs.png";
import mysql from "../assets/my SQL.png";
import github from "../assets/github.png";
import npm from "../assets/npm.png";
import dbeaver from "../assets/dbeaver.png";

interface SkillItem {
  name: string;
  img: string;
  className?: string;
}

interface SkillCategoryProps {
  title: string;
  skills: SkillItem[];
}

export default function Skill() {
  // Ukuran logo lebih fleksibel: HP 60px, PC 100px
  const logo_style = "h-[60px] md:h-[80px] lg:h-[100px] object-contain";
  const name_logo = "flex flex-col items-center text-center gap-3 lg:gap-5";
  const p_name_logo =
    "text-sm md:text-base lg:text-[21px] font-montserrat font-medium";

  const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-[200px] flex flex-col gap-6 lg:gap-[30px]">
      <p className="font-montserrat text-lg lg:text-[27px] font-bold border-b-2 border-black lg:border-none pb-2 lg:pb-0">
        {title}
      </p>

     
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row lg:justify-evenly gap-y-10 lg:gap-y-0">
        {skills.map((skill: SkillItem, index: number) => (
          <div key={index} className={name_logo}>
            <img
              src={skill.img}
              className={skill.className || logo_style}
              alt={skill.name}
            />
            <p className={p_name_logo}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="bg-[#E5E5E5] py-12 lg:py-24">
      
      <main className="min-h-screen flex flex-col items-center px-4 lg:px-0 gap-12 lg:gap-24">
       
        <div className="h-[60px] w-[200px] lg:h-[97px] lg:w-[303px] border-[3px] lg:border-[5px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:shadow-none bg-white lg:bg-transparent">
          <p className="font-montserrat text-lg lg:text-[25px] tracking-widest font-bold">
            MY SKILLS
          </p>
        </div>

        <SkillCategory
          title="Front-End Skills :"
          skills={[
            { img: html, name: "HTML" },
            { img: css, name: "CSS" },
            { img: js, name: "JavaScript" },
            { img: tail, name: "Tailwind" },
            { img: react_logo, name: "React" },
          ]}
        />

        <SkillCategory
          title="Back-End Skills :"
          skills={[
            { img: expressjs, name: "ExpressJS" },
            { img: nodejs, name: "NodeJS" },
            { img: mysql, name: "MySQL" },
          ]}
        />

        <SkillCategory
          title="DevOps & Tools :"
          skills={[
            { img: git, name: "Git" },
            { img: github, name: "GitHub" },
            { img: npm, name: "npm" },
            {
              img: dbeaver,
              name: "DBeaver",
              className:
                "h-[60px] md:h-[80px] lg:h-[100px] rounded-full border-2 border-black",
            },
          ]}
        />
      </main>
    </section>
  );
}
