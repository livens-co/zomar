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

import Image from "next/image";
import { Swiper as SwiperType } from "swiper/types";


interface ProductImagesProps {
  data: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
        {/* {data?.map((image, index) => (
          <SwiperSlide className="swiperSlide" key={index}>
            <Image src={image} alt="Images " width={600} height={400}/>
          </SwiperSlide>
        ))} */}
         {data.map((image, index) => (
          <SwiperSlide className="swiperSlide" key={index}>
            <Image
              src={image}
              alt="Image"
              width={600}
              height={400}
              onClick={() => openModal(index)}
              className="clickableImage"
            />
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
            <Image src={image} alt="Images " width={600} height={400}/>
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <Swiper
              initialSlide={activeIndex}
              loop={true}
              spaceBetween={10}
              navigation={true}
              modules={[FreeMode, Navigation]}
              className="fullScreenSwiper"
            >
              {data.map((image, index) => (
                <SwiperSlide className="swiperSlide" key={index}>
                  <Image src={image} alt="Image" layout="fill" objectFit="contain" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductImages;
