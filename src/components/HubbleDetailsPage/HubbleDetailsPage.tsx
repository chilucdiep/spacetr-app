import Navbar from "../Navbar/Navbar";

import { Theme } from "../../types/Interfaces";
import styles from "./PictureDetailsPage.module.scss";
import useHubblePicture from "../../hooks/useHubblePicture";

export default function HubbleDetailsPage({
  lightTheme,
  setLightTheme,
}: Theme) {
  setLightTheme(true);
  const pathParts = window.location.href.split("/").pop();

  const birthDate = `${pathParts}`.replaceAll("-", " ");
  console.log(birthDate);
  const { picture } = useHubblePicture(birthDate);

  const testMarkup = picture ? (
    <div>
      <p>{picture.Date}</p>
      <h3>{picture.Name}</h3>
      <p>{picture.Caption}</p>
      <img
        src={`https://imagine.gsfc.nasa.gov/hst_bday/images/${picture.Image}`}
        alt="Hubble pic"
      />
    </div>
  ) : null;

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      <p>{testMarkup}</p>
    </>
  );
}
