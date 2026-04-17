"use client";
import Image from "next/image";
import css from "./CatalogItem.module.css";
import { Camper } from "@/api/campers";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import Link from "next/link";

interface CatalogItemProps {
  camper: Camper;
}

export default function CatalogItem({ camper }: CatalogItemProps) {
  return (
    <li className={css.catalogItem}>
      <Image
        src={camper.coverImage}
        alt={camper.name}
        width={219}
        height={240}
        className={css.catalogItemImage}
      />
      <div className={css.catalogItemContent}>
        <div className={css.catalogItemHeader}>
          <h2 className={css.catalogItemTitle}>{camper.name}</h2>
          <p className={css.catalogItemPrice}>{`€${camper.price}`}</p>
        </div>
        <div className={css.catalogItemInfo}>
          <div className={css.catalogItemRating}>
            <Image src="/Star.png" alt="Mavericks" width={16} height={16} />
            <p>{`${camper.rating} (${camper.totalReviews} Reviews)`}</p>
          </div>
          <div className={css.catalogItemLocation}>
            <Image src="/Map.png" alt="Location" width={16} height={16} />
            <p>{camper.location}</p>
          </div>
        </div>
        <p className={css.catalogItemDescription}>{camper.description}</p>
        <ul className={css.catalogItemListFeatures}>
          <li className={css.catalogItemListFeature}>
            <Image src="/Gas.png" alt="Gas" width={16} height={16} />
            <p>{camper.engine}</p>
          </li>
          <li className={css.catalogItemListFeature}>
            <Image
              src="/Transmission.png"
              alt="Transmission"
              width={16}
              height={16}
            />
            <p>{camper.transmission}</p>
          </li>
          <li className={css.catalogItemListFeature}>
            <Image src="/Type.png" alt="Type" width={16} height={16} />
            <p>{camper.form}</p>
          </li>
        </ul>
        <Link
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button type="button" text="Show more" />
        </Link>
      </div>
    </li>
  );
}
