"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CarouselSlide from "./CarouselSlide";

const slides = Array.from(Array(4).keys());

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
          img={`/carousel/${index + 1}.jpg`}
          // sm="100"
          // xs="75"
        />
      ))}
    </Splide>
  );
}
