import { Link } from "react-router-dom";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import styles from "./PictureDetailsPage.module.scss";
import { motion } from "framer-motion";
import usePicture from "../../../hooks/usePicture";
import Navbar from "../../../components/Navbar/Navbar";
import { contentVariant } from "../utils/picture-details-anim";
import { Theme } from "../../../types/Theme";

export default function PictureDetailsPage({
  lightTheme,
  setLightTheme,
}: Theme) {
  setLightTheme(true);

  const currentDate = `${String(window.location.href).split("/").pop()}`;
  const { picture, error } = usePicture(currentDate);

  const backToFeedLinkMarkup = (
    <Link to="/feed">
      <div className={styles.BackButton}>
        <ArrowBackIosNewIcon fontSize="small" />
        <h3>Feed</h3>
      </div>
    </Link>
  );

  const mediaMarkup = picture ? (
    picture.media_type === "image" ? (
      <img src={picture.url} alt="Nasa Space Imagery"></img>
    ) : (
      <div className={styles.Video}>
        <iframe height="100%" src={picture.url} title={picture.title}></iframe>
      </div>
    )
  ) : null;

  const pictureContentMarkup = picture ? (
    <motion.section
      className={styles.PictureDetailsContainer}
      variants={contentVariant}
      initial="hidden"
      animate="show"
    >
      {mediaMarkup}
      <div className={styles.Text}>
        <h2>{picture.title}</h2>
        <p>
          {picture.date} |{" "}
          {picture.copyright ? picture.copyright : "No Copyright"}
        </p>
        <div className={styles.Explanation}>
          <p>{picture.explanation}</p>
        </div>
      </div>
    </motion.section>
  ) : null;

  const picturePageMarkup = error ? (
    <p>Error fetching your picture. Please refresh the page.</p>
  ) : (
    <section className={styles.PictureDetailsPage}>
      {pictureContentMarkup}
    </section>
  );

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      {backToFeedLinkMarkup}
      {picturePageMarkup}
    </>
  );
}
