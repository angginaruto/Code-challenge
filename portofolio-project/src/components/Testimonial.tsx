export default function Testimonial() {
  const style_h1 = "text-[20px] font-bold font-montserrat mb-[30px]";
  return (
    <>
      {/* main CONTAINER:
        - py-[50px]: Memberi padding atas-bawah pada mobile.
        - lg:py-0: Menghapus padding tersebut di PC.
        - lg:justify-evenly: Mengembalikan penataan tengah di PC.
      */}
      <main className="min-h-[100vh] bg-[#E5E5E5] flex flex-col items-center justify-between py-[50px] lg:justify-evenly lg:py-0">
        {/*
          JUDUL "TESTIMONIAL":
          - text-[20px]: Ukuran mobile.
          - lg:text-[25px]: Ukuran PC.
          - w-[250px]: Lebar mobile.
          - lg:w-[303px]: Lebar PC.
        */}
        <div className="h-[97px] w-[250px] border-[5px] border-black flex items-center justify-center lg:w-[303px] mb-[40px] lg:mb-0">
          <p className="font-montserrat text-[20px] tracking-widest font-bold lg:text-[25px]">
            TESTIMONIAL
          </p>
        </div>

        {/* GRID/FLEX TESTIMONIAL:
          - flex flex-col: Tampilan satu kolom ke bawah untuk mobile (< 768px).
          - md:grid md:grid-cols-2: Tampilan 2 kolom untuk tablet (>= 768px).
          - lg:grid-cols-3: Tampilan 3 kolom untuk PC (>= 1024px).
          - px: Padding horizontal disesuaikan berdasarkan ukuran layar.
        */}
        <div className="flex flex-col w-full px-[20px] gap-[30px] md:grid md:grid-cols-2 md:px-[50px] lg:grid-cols-3 lg:gap-[40px] lg:px-[100px]">
          {/* Testimonial 1 */}
          <div className="border-4 border-black h-auto p-[30px] border-r-0 border-t-0 shadow-[8px_8px_0px_rgba(0,0,0,1)] lg:shadow-none">
            <p className={style_h1}>Anggi</p>
            <p className="font-opensans text-[14px] font-light text-left mb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              quas, numquam, quibusdam iste recusandae earum maiores repellat
              quisquam ipsum neque perferendis nostrum. Voluptate laborum iusto
              soluta incidunt alias reprehenderit perferendis.
            </p>
            <p className="text-[20px]">⭐⭐⭐</p>
          </div>

          {/* Testimonial 2 */}
          <div className="border-4 border-black h-auto p-[30px] border-r-0 border-t-0 shadow-[8px_8px_0px_rgba(0,0,0,1)] lg:shadow-none">
            <p className={style_h1}>Anggi</p>
            <p className="font-opensans text-[14px] font-light text-left mb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              quas, numquam, quibusdam iste recusandae earum maiores repellat
              quisquam ipsum neque perferendis nostrum. Voluptate laborum iusto
              soluta incidunt alias reprehenderit perferendis.
            </p>
            <p className="text-[20px]">⭐⭐⭐</p>
          </div>

          {/* Testimonial 3 */}
          <div className="border-4 border-black h-auto p-[30px] border-r-0 border-t-0 shadow-[8px_8px_0px_rgba(0,0,0,1)] lg:shadow-none">
            <p className={style_h1}>Anggi</p>
            <p className="font-opensans text-[14px] font-light text-left mb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              quas, numquam, quibusdam iste recusandae earum maiores repellat
              quisquam ipsum neque perferendis nostrum. Voluptate laborum iusto
              soluta incidunt alias reprehenderit perferendis.
            </p>
            <p className="text-[20px]">⭐⭐⭐</p>
          </div>
        </div>
      </main>
    </>
  );
}
