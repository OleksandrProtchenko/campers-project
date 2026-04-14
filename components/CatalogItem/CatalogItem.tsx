import Image from "next/image";
import css from "./CatalogItem.module.css";

export default function CatalogItem() {
  return (
    <li className={css.catalogItem}>
      <Image
        src="/Camper.png"
        alt="Mavericks"
        width={219}
        height={240}
        className={css.catalogItemImage}
      />
      <div className={css.catalogItemContent}>
        <div className={css.catalogItemHeader}>
          <h2 className={css.catalogItemTitle}>Mavericks</h2>
          <p className={css.catalogItemPrice}>€8000</p>
        </div>
        <div className={css.catalogItemInfo}>
          <div className={css.catalogItemRating}>
            <Image src="/Star.png" alt="Mavericks" width={16} height={16} />
            <p>{`4.4 (2 Reviews)`}</p>
          </div>
          <div className={css.catalogItemLocation}>
            <Image src="/Map.png" alt="Mavericks" width={16} height={16} />
            <p>Kyiv, Ukraine</p>
          </div>
        </div>
        <p className={css.catalogItemDescription}>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>
        <ul className={css.catalogItemListFeatures}>
          <li className={css.catalogItemListFeature}>
            <Image src="/Gas.png" alt="Gas" width={16} height={16} />
            <p>Petrol</p>
          </li>
          <li className={css.catalogItemListFeature}>
            <Image
              src="/Transmission.png"
              alt="Transmission"
              width={16}
              height={16}
            />
            <p>Automatic</p>
          </li>
          <li className={css.catalogItemListFeature}>
            <Image src="/Type.png" alt="Type" width={16} height={16} />
            <p>Alcove</p>
          </li>
        </ul>
        <button type="button" className={css.catalogItemButton}>
          Show more
        </button>
      </div>
    </li>
  );
}
