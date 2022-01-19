import usePicture from "../../hooks/usePicture";
import usePictures from "../../hooks/usePictures";
import { Link } from "react-router-dom";
import styles from "./PictureDetailsPage.module.scss";

import Navbar from "../Navbar/Navbar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface PictureDetailsPageProps {
  lightTheme: boolean;
  setLightTheme: any;
  APOD_URL: string;
  API_KEY: string;
}

const PictureDetailsPage = ({
  lightTheme,
  setLightTheme,
  APOD_URL,
  API_KEY,
}: PictureDetailsPageProps) => {
  setLightTheme(true);

  const { picture } = usePicture(
    `${APOD_URL}?api_key=${API_KEY}&date=${String(window.location.href)
      .split("/")
      .pop()}`
  );

  const pictureContentMarkup = picture ? (
    <div className={styles.PictureDetailsContainer}>
      <img src={picture.hdurl} alt="Nasa Imagery"></img>
      <div className={styles.Text}>
        <h2>{picture.title}</h2>
        <p>
          {picture.date} |{" "}
          {(picture.copyright && picture.copyright) || "No Copyright"}
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
    </>
  );
};

export default PictureDetailsPage;
