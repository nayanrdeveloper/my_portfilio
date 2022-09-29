import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";

SwiperCore.use([EffectCoverflow, Pagination]);

function portfolio() {
  return (
    <div className="">
      <div className="mx-10 p-10 slider-background rounded-md">
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-6.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-7.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-8.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-9.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-10 flex flex-col gap-3">
            <h3 className="text-[#c4cfde] text-3xl">
              Mobile Application Landing Page Design.
            </h3>
          <p>
            Through a wide variety of mobile applications, we’ve developed a
            unique visual system and strategy that can be applied across the
            spectrum of available applications.
          </p>
          <button className='p-4 shadow_1 rounded-md text-[#ff014f] hover:slider-background hover:-translate-y-1 duration-300 w-40 hover:bg-[#18181a]'>View Project</button>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
