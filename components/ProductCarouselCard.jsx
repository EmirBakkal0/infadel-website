"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProductCarouselSlide from "./ProductCarouselSlide";


export default function ProductCardCarousel(props) {
    const slides = Array.from(Array(props.length).keys());
  return (
    <div className="flex flex-col  items-center py-10 p-3 opacity-90 bg-[#FFCAD4] rounded-2xl font-[delius]">
      <Splide
      className="w-[300px] "
        options={{
          rewind: true,
          autoplay: true,
          gap: "1rem",
          lazyLoad: "nearby",
          type: "loop",
        }}
      >
        {slides.map((index) => (
          <ProductCarouselSlide
            key={index}
            img={`/${props.imgfolder}/${index + 1}.jpg`}
            
          />
        ))}
      </Splide>

      <h1 className='text-center text-3xl text-bold p-2 pt-9'>{props.header}</h1>
        <p className='p-2'>
            {props.p}
        </p>
    </div>
  );
}
