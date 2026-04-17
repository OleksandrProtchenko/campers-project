"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import css from "./CamperGallery.module.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
export default function CamperGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <div className={css.galleryWrapper}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`${css.mySwiper2} ${css.mbottomSwiper}`}
      >
        <SwiperSlide>
          <Image
            className={css.swiperSlideImage}
            src="https://swiperjs.com/demos/images/abstract-1.jpg"
            alt="Abstract 1"
            width={638}
            height={505}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={css.swiperSlideImage}
            src="https://swiperjs.com/demos/images/abstract-2.jpg"
            alt="Abstract 2"
            width={638}
            height={505}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={css.swiperSlideImage}
            src="https://swiperjs.com/demos/images/abstract-3.jpg"
            alt="Abstract 3"
            width={638}
            height={505}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={css.swiperSlideImage}
            src="https://swiperjs.com/demos/images/abstract-4.jpg"
            alt="Abstract 4"
            width={638}
            height={505}
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={32}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`${css.mySwiper} ${css.mbottomSwiper}`}
      >
        <SwiperSlide>
          <Image
            className={css.swiperSlideImage}
            src="https://swiperjs.com/demos/images/abstract-1.jpg"
            alt="Abstract 1"
            width={135}
            height={145}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={css.swiperSlideImage}
            src="https://swiperjs.com/demos/images/abstract-2.jpg"
            alt="Abstract 2"
            width={135}
            height={145}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={css.swiperSlideImage}
            src="https://swiperjs.com/demos/images/abstract-3.jpg"
            alt="Abstract 3"
            width={135}
            height={145}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={css.swiperSlideImage}
            src="https://swiperjs.com/demos/images/abstract-4.jpg"
            alt="Abstract 4"
            width={135}
            height={145}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
