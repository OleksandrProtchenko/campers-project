import { FaStar } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa6";
import css from "./CamperDetails.module.css";
import { Camper } from "@/api/campers";

interface CamperDetailsProps {
  camper: Camper;
}

export default function CamperDetails({ camper }: CamperDetailsProps) {
  return (
    <div className={css.camperDetailsWrapper}>
      <div>
        <div className={css.camperDetailsHeader}>
          <h2 className={css.camperDetailsTitle}>{camper.name}</h2>
          <div className={css.ratingLocation}>
            <div className={css.rating}>
              <FaStar className={css.iconStar} />
              <p>
                {camper.rating} {`(${camper.totalReviews} reviews)`}
              </p>
            </div>
            <div className={css.location}>
              <FaRegMap className={css.locationIcon} />
              <p>{camper.location}</p>
            </div>
          </div>
          <p className={css.price}>€{camper.price}</p>
          <p className={css.description}>
            {camper.description}
            ideal choice for solo travelers or couples seeking a compact and
            efficient way to explore the open roads. This no-frills yet reliable
            panel truck offers the essentials for a comfortable journey, making
            it the perfect companion for those who value simplicity and
            functionality.
          </p>
        </div>
        <div className={css.camperComplictations}>
          <h3 className={css.camperComplictationsTitle}>Vehicle details</h3>
          <ul className={css.camperComplictationsList}>
            {camper.amenities.length > 0 &&
              camper.amenities.map((amenity) => {
                return (
                  <li key={amenity} className={css.camperComplictationsItem}>
                    {amenity}
                  </li>
                );
              })}
          </ul>
          <table className={css.camperComplictationsTable}>
            <tbody>
              <tr>
                <td>Form</td>
                <td className={css.camperSecondColumn}>{camper.form}</td>
              </tr>
              <tr>
                <td>Length</td>
                <td className={css.camperSecondColumn}>{camper.length}</td>
              </tr>
              <tr>
                <td>Width</td>
                <td className={css.camperSecondColumn}>{camper.width}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td className={css.camperSecondColumn}>{camper.height}</td>
              </tr>
              <tr>
                <td>Tank</td>
                <td className={css.camperSecondColumn}>{camper.tank}</td>
              </tr>
              <tr>
                <td>Consumption</td>
                <td className={css.camperSecondColumn}>{camper.consumption}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
