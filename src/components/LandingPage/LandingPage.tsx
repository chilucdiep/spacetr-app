import { Link } from "react-router-dom";
import usePictures from "../../hooks/usePictures";
import styles from "./LandingPage.module.scss";

import { Picture } from "../../Interfaces";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";

interface LandingPageProps {
  lightTheme: boolean;
  setLightTheme: any;
}

const LandingPage = ({ lightTheme, setLightTheme }: LandingPageProps) => {
  setLightTheme(false);

  const { pictures } = usePictures(5);

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
            {pictures?.map((picture: Picture, key: number) => (
              <img src={picture.hdurl} alt="Nasa Imagery" key={key}></img>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
