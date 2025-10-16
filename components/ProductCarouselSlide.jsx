import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function ProductCarouselSlide(props) {
  // const xs_height = `min-h-[${props.xs}svh]`;
  // const sm_height = `sm:min-h-[${props.sm}svh]`;

  return (
    <SplideSlide className={`flex`}>
      <img src={props.img} alt=""  className="rounded-2xl" />
    </SplideSlide>
  );
}

export default ProductCarouselSlide;
