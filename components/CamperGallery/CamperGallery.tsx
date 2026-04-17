"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { Camper } from "@/api/campersApi";

import css from "./CamperGallery.module.css";

interface CamperGalleryProps {
  camper: Camper;
}

export default function CamperGallery({ camper }: CamperGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (id: string) => {
    setFailedImages((prev) => new Set(prev).add(id));
  };

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
        {camper.gallery &&
          camper.gallery.length > 0 &&
          camper.gallery.map((image, index) => {
            return (
              <SwiperSlide key={image.id}>
                <Image
                  className={css.swiperSlideImage}
                  src={
                    failedImages.has(image.id)
                      ? "/placeholderCamper.png"
                      : image.original
                  }
                  onError={() => handleImageError(image.id)}
                  alt={camper.name}
                  width={638}
                  height={505}
                  priority={index === 0}
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
        {camper.gallery &&
          camper.gallery.length > 0 &&
          camper.gallery.map((image) => {
            return (
              <SwiperSlide key={image.id}>
                <Image
                  className={css.swiperSlideImage}
                  src={
                    failedImages.has(image.id)
                      ? "/placeholderCamper.png"
                      : image.thumb
                  }
                  onError={() => handleImageError(image.id)}
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
