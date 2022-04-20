import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";

import usePictures from "../../hooks/usePictures";
import { Picture, Theme } from "../../types/Interfaces";
import styles from "./LandingPage.module.scss";

export default function LandingPage({ lightTheme, setLightTheme }: Theme) {
  setLightTheme(false);

  const { pictures } = usePictures(5);

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      <section className={styles.LandingPage}>
        <section className={styles.Header}>
          <h1>
            Discover our <span>universe</span>
          </h1>
          <h2>
            with <strong>NASA's</strong> beautiful imagery
          </h2>
          <Link to="/feed" className={styles.Button}>
            <Button label="Explore" />
          </Link>
        </section>
        <section className={styles.Bottom}>
          <div className={styles.Overlay}></div>
          <div className={styles.Images}>
            {pictures?.map((picture: Picture) => (
              <img
                src={picture.hdurl}
                alt="Nasa Imagery"
                key={picture.date}
              ></img>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
