import { FaStar } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa6";
import css from "./CamperDetails.module.css";

export default function CamperDetails() {
  return (
    <div className={css.camperDetailsWrapper}>
      <div>
        <div className={css.camperDetailsHeader}>
          <h2 className={css.camperDetailsTitle}>Mavericks</h2>
          <div className={css.ratingLocation}>
            <div className={css.rating}>
              <FaStar className={css.iconStar} />
              <p>4.4 {`(2 reviews)`}</p>
            </div>
            <div className={css.location}>
              <FaRegMap className={css.locationIcon} />
              <p>Kyiv, Ukraine</p>
            </div>
          </div>
          <p className={css.price}>€8000</p>
          <p className={css.description}>
            Embrace simplicity and freedom with the Mavericks panel truck, an
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
            <li className={css.camperComplictationsItem}>Automatic</li>
            <li className={css.camperComplictationsItem}>AC</li>
            <li className={css.camperComplictationsItem}>Petrol</li>
            <li className={css.camperComplictationsItem}>Kitchen</li>
            <li className={css.camperComplictationsItem}>Radio</li>
            <li className={css.camperComplictationsItem}>Alcove</li>
          </ul>
          <table className={css.camperComplictationsTable}>
            <tbody>
              <tr>
                <td>Form</td>
                <td className={css.camperSecondColumn}>Panel truck</td>
              </tr>
              <tr>
                <td>Length</td>
                <td className={css.camperSecondColumn}>5.4 m</td>
              </tr>
              <tr>
                <td>Width</td>
                <td className={css.camperSecondColumn}>2.01 m</td>
              </tr>
              <tr>
                <td>Height</td>
                <td className={css.camperSecondColumn}>2.05 m</td>
              </tr>
              <tr>
                <td>Tank</td>
                <td className={css.camperSecondColumn}>132 I</td>
              </tr>
              <tr>
                <td>Consumption</td>
                <td className={css.camperSecondColumn}>12.4l/100km</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
