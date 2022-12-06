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
              <Image
                src={image.image_link}
                alt={image.title}
                height={533}
                width={1200}
              /> 
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default GalleryCarousal;
