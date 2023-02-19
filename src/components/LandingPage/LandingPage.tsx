import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";

import usePictures from "../../hooks/usePictures";
import { Picture, Theme } from "../../types/Interfaces";
import styles from "./LandingPage.module.scss";
import { motion } from "framer-motion";
import LoadingPage from "../LoadingPage/LoadingPage";

export default function LandingPage({ lightTheme, setLightTheme }: Theme) {
  setLightTheme(false);
  const { pictures, loading } = usePictures(5);

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariant = {
    hidden: { y: 250, opacity: 0 },
    show: {
      y: 10,
      opacity: 1,
      transition: {
        duration: 0.9,
      },
    },
  };

  const textVariant = {
    hidden: { y: 20, x: 10, opacity: 0 },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Navbar lightTheme={lightTheme} />
          <section className={styles.LandingPage}>
            <section className={styles.Header}>
              <h1>
                Discover our{" "}
                <motion.span
                  variants={textVariant}
                  initial="hidden"
                  animate="show"
                >
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
            <section className={styles.Bottom}>
              <div className={styles.Overlay}></div>
              {pictures && (
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
                        <img src={picture.hdurl} alt="Nasa Imagery"></img>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </section>
          </section>
        </>
      )}
    </>
  );
}
