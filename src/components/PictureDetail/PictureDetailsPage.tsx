import { useState, useEffect } from "react";
import styles from "./PictureDetailsPage.module.scss";

import Navbar from "../Navbar/Navbar";
interface Picture {
  hdurl: string;
  title: string;
  date: string;
  explanation: string;
  copyright: string;
}

const PictureDetailsPage = ({
  lightTheme,
  setLightTheme,
  APOD_URL,
  API_KEY,
}: any) => {
  setLightTheme(true);

  const [picture, setPicture] = useState<Picture>({
    hdurl: "",
    title: "",
    date: "",
    explanation: "",
    copyright: "",
  });

  const getPictureRequest = async () => {
    const url = `${APOD_URL}?api_key=${API_KEY}&date=${String(
      window.location.href
    )
      .split("/")
      .pop()}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      setPicture(responseJson);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    getPictureRequest();
  }, []);

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      <div className={styles.PictureDetailsPage}>
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
      </div>
    </>
  );
};

export default PictureDetailsPage;
