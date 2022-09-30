import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";

function GalleryCarousal({ images }) {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative">
              <Image
                src={image.image_link}
                alt={image.title}
                height={540}
                width={1200}
              />
              <h3 className="absolute left-4 bottom-5 p-3 bg-[rgba(33, 36, 40, 0.8)] rounded-md text-[#ff014f]">{image.title}</h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default GalleryCarousal;
