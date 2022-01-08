import { useState, useEffect } from "react";
import styles from "./PictureDetail.module.scss";

interface Picture {
  hdurl: string;
  title: string;
  date: string;
  explanation: string;
}

const PictureDetail = ({
  pictures,
  lightTheme,
  setLightTheme,
  APOD_URL,
  API_KEY,
}: any) => {
  setLightTheme(true);
  console.log(lightTheme);

  const [picture, setPicture] = useState<Picture>({
    hdurl: "",
    title: "",
    date: "",
    explanation: "",
  });

  console.log(String(window.location.href).split("/").pop());

  const getPictureRequest = async () => {
    const url = `${APOD_URL}?api_key=${API_KEY}&date=${String(
      window.location.href
    )
      .split("/")
      .pop()}`;
    console.log(url);
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
  });

  console.log(picture);

  return (
    <div className={styles.PictureDetail}>
      <img src={picture.hdurl} alt="Nasa Imagery"></img>
      <h1>{picture.title}</h1>
      <p>{picture.date}</p>
      <p>{picture.explanation}</p>
    </div>
  );
};

export default PictureDetail;
