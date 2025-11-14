import Image from "next/image";
import Carousel from "@/components/Carousel";
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Carousel />
      <div className="hidden md:absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex flex-row justify-center items-center bg-[var(--color-card)] opacity-80 p-5 rounded-2xl">
        <img src="logo.png" alt="Infadel Logo" width={250} className="p-6  border-r-black border-r-2 "/>
        <h1 className="text-3xl font-[delius] p-4 m-2">Happy Bellies <br></br> Happy Babies</h1>
        
      </div>
      <section>
        <div className="container mx-auto ">
        <div className="grid md:grid-cols-2 p-10 gap-5">
          <div className="flex flex-col justify-center ">
            <h2 className="text-3xl font-[delius] font-bold text-center my-5">Why you should choose Infadel?</h2>
            <p className=" font-[delius] pb-7 text-center text-pretty">
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
        
        </div>
        <div className="flex flex-col items-center p-10 bg-[var(--color-card)]">
          <h1 className="text-3xl font-[delius] font-bold pb-4">Explore Our Full Range of Products</h1>
          <p className="font-[delius] pb-8 text-center text-pretty">
            Discover our comprehensive selection of nutritional products designed
            to support the health and well-being of babies, mothers, teenagers,
            and children. Click the image below to explore our products.
          </p>
          <Link href="/products" className="hover:scale-105 hover:opacity-80 transition-transform">
            <img src="newProducts.png" alt="products" width={800} className="rounded-2xl " />
          </Link>
        </div> 

        <div className="container grid md:grid-cols-2 mx-auto  justify-center gap-5 p-10">

          <div className="flex flex-col justify-center gap-5">
            <h2 className="text-3xl font-[delius] font-bold text-center my-5">Our Commitment to Quality</h2>
          <p className="font-[delius] text-center text-pretty">
            At Infadel, we understand that every baby is unique, and so are their nutritional needs. That's why we are committed to providing the highest quality products, backed by scientific research and formulated with care. Our team of experts continuously monitors and improves our formulas to ensure they meet the evolving needs of infants and toddlers.
          </p>
          </div>
          <div className="flex justify-center ">
            <img src="stock3.jpg" alt="" width={400} className=" rounded-xl"/>
          </div>
        </div>

      <div className="flex flex-col items-center p-10 bg-[#FFCAD4]">

          <h1 className="text-3xl font-[delius] font-bold pb-2">Support Topics</h1>
          <p className="font-[delius] pb-8 text-center text-pretty">
            We are here to help you with any questions or concerns you may have about our products. Explore our support topics below by clicking the image.
          </p>
           <Link href="/support" className="hover:scale-105 hover:opacity-80 transition-transform">
            <img src="stock4.jpg" alt="products" width={800} className="rounded-2xl " />
          </Link>
      </div>


      </section>
    </main>
  );
}
