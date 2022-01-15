import { Link } from "react-router-dom";
import usePictures from "../../hooks/usePictures";
import styles from "./LandingPage.module.scss";

import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";

interface LandingPageProps {
  lightTheme: boolean;
  setLightTheme: any;
}

const LandingPage = ({ lightTheme, setLightTheme }: LandingPageProps) => {
  setLightTheme(false);
  const APOD_URL = "https://api.nasa.gov/planetary/apod";
  const API_KEY = "9guRyYAY594OtPx1YP6IlfWME4lFznqFN2hEQWMA";

  const { pictures } = usePictures(`${APOD_URL}?api_key=${API_KEY}&count=5`);

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
