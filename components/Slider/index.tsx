"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

import "./style.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image, { StaticImageData } from "next/image";

interface SliderProps {
  data: StaticImageData[];
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        className="swiperComponent"
      >
        {data.map((image, index) => (
          <SwiperSlide className="swiperSlide" key={index}>
            <Image src={image} alt="Images " />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
