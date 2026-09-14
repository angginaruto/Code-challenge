import { useState } from "react";
import emailjs from "@emailjs/browser";
import img from "../assets/pembagi.png";

export default function Contact() {
  let [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    massage: "", // Tetap menggunakan massage sesuai kode awal
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_email: formData.email,
          message: formData.massage,
        },
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Pesan Berhasil Dikirim");
          setLoading(false);
          setFormData({ name: "", phone: "", email: "", massage: "" });
        },
        (error) => {
          console.log(error);
          alert("Terjadi Kesalahan");
          setLoading(false);
        },
      );
  };

  return (
    <>
      <section id="contact">
        <main className="min-h-screen bg-[#E5E5E5] flex flex-col items-center justify-center py-10 px-4">
          <div className="h-[80px] w-[260px] md:h-[97px] md:w-[303px] border-[5px] border-black flex items-center justify-center mb-6">
            <p className="font-montserrat text-[20px] md:text-[25px] tracking-widest font-bold">
              CONTACT ME
            </p>
          </div>

          <img src={img} className="h-[20px] md:h-[30px] mb-8" alt="divider" />

          <form onSubmit={handleSubmit} className="w-full max-w-[609px]">
            <div className="form-wrapper flex flex-col items-center justify-center lg:gap-[15px]">
              <div className="contact-wrapper border-4 border-black w-full h-[48px] pt-[10px] px-[14px] border-t-0 border-r-0 mb-[30px] md:mb-[43px]">
                <input
                  type="text"
                  placeholder="ENTER YOUR NAME*"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  className="bg-transparent outline-none w-full font-montserrat text-[14px] font-bold"
                />
              </div>

              <div className="contact-wrapper border-4 border-black w-full h-[48px] pt-[10px] px-[14px] border-t-0 border-r-0 mb-[30px] md:mb-[43px]">
                <input
                  type="text"
                  placeholder="PHONE NUMBER"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleChange}
                  className="bg-transparent outline-none w-full font-montserrat text-[14px] font-bold"
                />
              </div>

              <div className="contact-wrapper border-4 border-black w-full h-[48px] pt-[10px] px-[14px] border-t-0 border-r-0 mb-[30px] md:mb-[43px]">
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL*"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className="bg-transparent outline-none w-full font-montserrat text-[14px] font-bold"
                />
              </div>

              <div className="contact-wrapper border-4 border-black w-full h-[150px] md:h-[184px] pt-[10px] px-[14px] border-t-0 border-r-0 mb-[30px] md:mb-[43px]">
                <textarea
                  rows={5}
                  placeholder="MESSAGE"
                  name="massage"
                  value={formData.massage || ""}
                  onChange={handleChange}
                  className="bg-transparent outline-none w-full h-full font-montserrat text-[14px] font-bold resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="font-montserrat text-[16px] font-bold border-[3px] border-black w-[197px] h-[45px] border-t-0 border-b-0 hover:bg-black hover:text-white transition-all duration-300"
                disabled={loading}
              >
                {loading ? "SENDING..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </main>
      </section>
    </>
  );
}
