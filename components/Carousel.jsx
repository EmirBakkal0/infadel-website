"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CarouselSlide from "./CarouselSlide";

const slides = Array.from(Array(5).keys());

export default function Carousel() {
  return (
    <Splide
      options={{
        rewind: true,
        autoplay: true,
        gap: "1rem",
        lazyLoad: "nearby",
        type: "loop",
      }}
    >
      {slides.map((index) => (
        <CarouselSlide
          key={index}
          img={`/carousel/${index + 1}.webp`}
          // sm="100"
          // xs="75"
        />
      ))}
      
    </Splide>
  );
}
