import { Link } from "react-router-dom";
import styles from "./LandingPage.module.scss";

import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";

interface LandingPageProps {
  pictures: any;
  lightTheme: boolean
  setLightTheme: any;
}

const LandingPage = ({ pictures, lightTheme, setLightTheme }: LandingPageProps) => {
  setLightTheme(false);

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      <div className={styles.LandingPage}>
        <div className={styles.Header}>
          <h1>
            Discover our <span>universe</span>
          </h1>
          <h2>
            with <strong>NASA's</strong> beautiful imagery
          </h2>
          <Link to="/feed" className={styles.Button}>
            <Button label="Explore" />
          </Link>
        </div>
        <div className={styles.Bottom}>
          <div className={styles.Overlay}></div>
          <div className={styles.Images}>
            {pictures.map((picture: any) => (
              <img src={picture.hdurl} alt="Nasa Imagery"></img>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
