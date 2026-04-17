"use client";
import Image from "next/image";
import css from "./CatalogItem.module.css";
import { Camper } from "@/api/campersApi";
import Link from "next/link";
import { FaGasPump } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import { FaRegMap, FaStar, FaVanShuttle } from "react-icons/fa6";
import { useState } from "react";

interface CatalogItemProps {
  camper: Camper;
}

export default function CatalogItem({ camper }: CatalogItemProps) {
  const [imgSrc, setImgSrc] = useState(
    camper.coverImage || "/placeholderCamper.png",
  );
  return (
    <li className={css.catalogItem}>
      <Image
        src={imgSrc}
        alt={camper.name}
        width={219}
        height={240}
        className={css.catalogItemImage}
        onError={() => setImgSrc("/placeholderCamper.png")}
        loading="eager"
      />

      <div className={css.catalogItemContent}>
        <div className={css.catalogItemHeader}>
          <h2 className={css.catalogItemTitle}>{camper.name}</h2>
          <p className={css.catalogItemPrice}>{`€${camper.price}`}</p>
        </div>
        <div className={css.catalogItemInfo}>
          <div className={css.catalogItemRating}>
            <FaStar className={css.iconStar} />
            <p>{`${camper.rating} (${camper.totalReviews} Reviews)`}</p>
          </div>
          <div className={css.catalogItemLocation}>
            <FaRegMap className={css.locationIcon} />
            <p>{camper.location}</p>
          </div>
        </div>
        <p className={css.catalogItemDescription}>{camper.description}</p>
        <ul className={css.catalogItemListFeatures}>
          <li className={css.catalogItemListFeature}>
            <FaGasPump className={css.catalogItemIcon} />
            <p>{camper.engine}</p>
          </li>
          <li className={css.catalogItemListFeature}>
            <TbManualGearbox className={css.catalogItemIcon} />
            <p>{camper.transmission}</p>
          </li>
          <li className={css.catalogItemListFeature}>
            <FaVanShuttle className={css.catalogItemIcon} />
            <p>{camper.form}</p>
          </li>
        </ul>
        <Link
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={css.buttonLink}
        >
          Show more
        </Link>
      </div>
    </li>
  );
}
