import { useState, useEffect } from "react";
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

  // interface Picture {
  //   hdurl: string;
  //   title: string;
  //   date: string;
  //   explanation: string;
  //   copyright: string;
  // }

  // const [picture, setPicture] = useState<Picture>({
  //   hdurl: "",
  //   title: "",
  //   date: "",
  //   explanation: "",
  //   copyright: "",
  // });

  // const { pictures } = usePictures(
  //   `${APOD_URL}?api_key=${API_KEY}&date=${String(window.location.href)
  //     .split("/")
  //     .pop()}`
  // );
  const { pictures } = usePictures(
    `https://api.nasa.gov/planetary/apod?api_key=9guRyYAY594OtPx1YP6IlfWME4lFznqFN2hEQWMA&date=2011-05-11`
  );

  console.log(pictures);

  // const getPictureRequest = async () => {
  //   const url = `${APOD_URL}?api_key=${API_KEY}&date=${String(
  //     window.location.href
  //   )
  //     .split("/")
  //     .pop()}`;
  //   const response = await fetch(url);
  //   const responseJson = await response.json();

  //   if (responseJson) {
  //     setPicture(responseJson);
  //   } else {
  //     console.log("error");
  //   }
  // };

  // useEffect(() => {
  //   getPictureRequest();
  // }, []);

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      <Link to="/feed">
        <div className={styles.BackButton}>
          <ArrowBackIosNewIcon fontSize="small" />
          <h3>Feed</h3>
        </div>
      </Link>
      {/* <div className={styles.PictureDetailsPage}>
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
      </div> */}
    </>
  );
};

export default PictureDetailsPage;
