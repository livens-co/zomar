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
import Image from "next/image";
import { Billboard } from "@/types";

interface SliderProps {
  data: Billboard[];
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
        {data.map((billboard) => (
          <SwiperSlide className="swiperSlide" key={billboard._id}>
            <Image src={billboard.image} alt="Images " width={800} height={300} />
            <h1>{billboard.title}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
