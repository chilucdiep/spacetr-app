import { Link } from "react-router-dom";

import styles from "./LandingPage.module.scss";
import { motion } from "framer-motion";
import {
  containerVariant,
  listItemVariant,
  textVariant,
} from "../utils/landing-page-anim";
import Button from "../../../components/Button/Button";
import Navbar from "../../../components/Navbar/Navbar";
import { Picture } from "../../../types/Picture";
import usePictures from "../../../hooks/usePictures";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import { Theme } from "../../../types/Theme";

export default function LandingPage({ lightTheme, setLightTheme }: Theme) {
  setLightTheme(false);
  const { pictures, loading } = usePictures(5);

  const headerMarkup = (
    <section className={styles.Header}>
      <h1>
        Discover our{" "}
        <motion.span variants={textVariant} initial="hidden" animate="show">
          universe
        </motion.span>
      </h1>
      <h2>
        with <strong>NASA's</strong> beautiful imagery
      </h2>
      <Link to="/feed" className={styles.Button}>
        <Button label="Explore" />
      </Link>
    </section>
  );

  const bottomImagesMarkup = pictures ? (
    <motion.div
      className={styles.Images}
      variants={containerVariant}
      initial="hidden"
      animate="show"
    >
      {pictures.map((picture: Picture) => (
        <motion.div
          className={styles.Image}
          key={picture.date}
          variants={listItemVariant}
        >
          <Link to={`/feed/${picture.date}`}>
            <img src={picture.url} alt="Nasa Imagery"></img>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  ) : null;

  if (loading) return <LoadingPage />;

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      <section className={styles.LandingPage}>
        {headerMarkup}
        <section className={styles.Bottom}>
          <div className={styles.Overlay}></div>
          {bottomImagesMarkup}
        </section>
      </section>
    </>
  );
}
