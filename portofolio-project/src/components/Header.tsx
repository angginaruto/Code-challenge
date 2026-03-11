import logo from "../assets/logo.png";

export default function Header() {
  const li = "h-[46px] w-[137px] flex justify-center items-center text-white";
  const a =
    "h-[46px] w-[147px] flex justify-center items-center bg-white rounded-[30px] text-black font-bold text-[15px]";
  return (
    <>
      <header className="hidden lg:flex absolute top-0 left-0 flex w-full justify-between py-[15px] bg-transparent z-20 px-[50px]">
        <img src={logo} className="h-[50px]"></img>
        <div className=" flex font-montserrat items-center text-[17px] gap-[33px]">
          <nav>
            <ul className="flex gap-[5px]">
              <li className={li}>
                <a href="#home">Home</a>
              </li>
              <li className={li}>
                <a href="#about">About me</a>
              </li>
              <li className={li}>
                <a href="#skills">Skills</a>
              </li>
              <li className={li}>
                <a href="#portofolio">Portofolio</a>
              </li>
            </ul>
          </nav>
          <a href="#contact" className={a}>
            Contact Me
          </a>
        </div>
      </header>
    </>
  );
}
