import usePicture from "../../hooks/usePicture";
import { Link } from "react-router-dom";
import styles from "./PictureDetailsPage.module.scss";

import Navbar from "../Navbar/Navbar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface PictureDetailsPageProps {
  lightTheme: boolean;
  setLightTheme: any;
}

function PictureDetailsPage({
  lightTheme,
  setLightTheme,
}: PictureDetailsPageProps) {
  setLightTheme(true);

  const { picture, error } = usePicture(
    `${String(window.location.href).split("/").pop()}`
  );

  const mediaMarkup = picture ? (
    picture.media_type === "image" ? (
      <img src={picture.url} alt="Nasa Space Imagery"></img>
    ) : (
      <div className={styles.Video}>
        <iframe
          height="100%"
          src={picture.url}
          title={picture.title}
        ></iframe>
      </div>
    )
  ) : null;

  const pictureContentMarkup = picture ? (
    <div className={styles.PictureDetailsContainer}>
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
    </div>
  ) : null;

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      <Link to="/feed">
        <div className={styles.BackButton}>
          <ArrowBackIosNewIcon fontSize="small" />
          <h3>Feed</h3>
        </div>
      </Link>
      <div className={styles.PictureDetailsPage}>{pictureContentMarkup}</div>
      {error && <p>Error fetching your picture. Please refresh the page.</p>}
    </>
  );
}

export default PictureDetailsPage;
