import { Link } from "react-router-dom";
import styles from "./LandingPage.module.scss";

import Button from "../Button/Button";

const LandingPage = ({ pictures }: any) => {
  return (
    <div className={styles.LandingPage}>
      <div className={styles.Header}>
        <h1>
          Discover our <span>universe</span>
        </h1>
        <h2>
          with <strong>NASA's</strong> beautiful imagery
        </h2>
        <Link to='/feed' className={styles.Button}>
          <Button label="Explore" />
        </Link>
      </div>
      <div className={styles.Bottom}>
        <div className={styles.Overlay}></div>
        <div className={styles.Images}>
          {pictures.map((picture: any) => (
            <img src={picture.url}></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
