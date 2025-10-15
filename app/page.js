import Image from "next/image";
import Carousel from "@/components/Carousel";
export default function Home() {
  return (
    <main>
      <Carousel />
      <section className="container mx-auto ">
        <div className="grid md:grid-cols-2 p-10 ">
          <div className="flex flex-col justify-center gap-5">
            <h2 className="text-3xl font-[delius] font-bold my-5">Why you should choose Infadel?</h2>
            <p className=" font-[delius]">
              Our babies’ health and happiness are the highest priority for every
              parent. Proper and reliable nutrition from day one is the cornerstone
              of healthy development. This is where Infadel Formula and Follow-On
              Milk, with their carefully formulated ingredients, come into play.
              Infadel’s specially developed formulas provide a balanced supply of
              essential vitamins, minerals, and nutrients, ensuring your baby’s
              growth and development are supported safely and consistently, every
              step of the way.
            </p>
          </div>
          <div className="flex justify-center ">
            <img src="stock1.jpg" alt="" width={400} className=" rounded-xl"/>
          </div>

        </div>


      </section>
    </main>
  );
}
