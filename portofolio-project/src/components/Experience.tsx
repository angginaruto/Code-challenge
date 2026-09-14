import pembatas from "../assets/pembagi.png";

export default function Experience() {
  // Kembali ke desain asli untuk PC (border 5px, mb 30px)
  const style_h1 =
    "text-[20px] font-bold font-montserrat border-[5px] border-black mb-[20px] lg:mb-[30px] border-t-0 border-b-0";

  return (
    <>
      <main className="flex min-h-[100vh] bg-[#E5E5E5] flex flex-col items-center justify-center lg:justify-evenly py-10 lg:py-0">
        <div className="h-[90px] w-[280px] lg:h-[97px] lg:w-[303px] border-[5px] border-black flex items-center justify-center mb-8 lg:mb-0">
          <p className="font-montserrat text-[22px] lg:text-[25px] tracking-widest font-bold">
            EXPERIENCE
          </p>
        </div>

        <div className="px-6 lg:px-[100px] text-[#050505] flex flex-col text-center items-center justify-center gap-6 lg:gap-[70px]">
         
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[300px]">
            
            <div className="w-full max-w-[431px] lg:h-[104px] lg:w-[431px]">
              <p className={style_h1}>NYC TLC Trip Data Analysis (2024)</p>
              <ul className="font-opensans text-[14px] font-light text-center">
                <li>• Performed exploratory data analysis (EDA)</li>
                <li>• Cleaned and preprocessed data</li>
                <li>• Conducted statistical analysis using Pandas & NumPy</li>
                <li>• Built data visualizations with Matplotlib & Seaborn</li>
                <li>• Extracted insights from raw transportation data</li>
              </ul>
            </div>
            <div className="w-full max-w-[431px] lg:h-[104px] lg:w-[431px]">
              <p className={style_h1}>React Vite Web Application (2025)</p>
              <ul className="font-opensans text-[14px] font-light text-center">
                <li>• Built component-based UI using React</li>
                <li>• Structured frontend architecture</li>
                <li>• Implemented responsive layout using CSS</li>
                <li>• Managed development workflow with Vite</li>
                <li>• Used Git & GitHub for version control</li>
              </ul>
            </div>
          </div>

          <img
            src={pembatas}
            className="h-[20px] lg:h-[30px] my-2 lg-my-[80px]"
          />

          <div className="w-full max-w-[431px] lg:h-[104px] lg:w-[431px] flex flex-col items-center justify-center">
            <p className={style_h1}>Independent Software Development Study</p>
            <p className="font-opensans text-[14px] font-light">
              Practiced backend development using Node.js, Express.js, and MySQL
              Built REST APIs and implemented CRUD operations Managed version
              control workflows using Git and GitHub Structured frontend
              applications using React
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
