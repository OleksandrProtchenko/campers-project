"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { Camper } from "@/api/campers";

import css from "./CamperGallery.module.css";

interface CamperGalleryProps {
  camper: Camper;
}

export default function CamperGallery({ camper }: CamperGalleryProps) {
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
        {camper.gallery.length > 0 &&
          camper.gallery.map((image) => {
            return (
              <SwiperSlide key={image.id}>
                <Image
                  className={css.swiperSlideImage}
                  src={image.original}
                  alt={camper.name}
                  width={638}
                  height={505}
                />
              </SwiperSlide>
            );
          })}
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
        {camper.gallery.length > 0 &&
          camper.gallery.map((image) => {
            return (
              <SwiperSlide key={image.id}>
                <Image
                  className={css.swiperSlideImage}
                  src={image.thumb}
                  alt={camper.name}
                  width={135}
                  height={145}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
