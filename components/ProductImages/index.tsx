"use client";

import "./style.scss";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import Image, { StaticImageData } from "next/image";
import { Swiper as SwiperType } from "swiper/types";


interface ProductImagesProps {
  data: StaticImageData[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        style={{}}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="productImageComponent"
      >
        {data.map((image, index) => (
          <SwiperSlide className="swiperSlide" key={index}>
            <Image src={image} alt="Images " />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="productImageThumbComponent"
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

export default ProductImages;
