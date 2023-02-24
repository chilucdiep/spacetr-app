import Navbar from "../Navbar/Navbar";

import { Theme } from "../../types/Interfaces";
import styles from "./HubbleDetailsPage.module.scss";
import useHubblePicture from "../../hooks/useHubblePicture";
import useHubbleAIPrompt from "../../hooks/useHubbleAIPrompt";

export default function HubbleDetailsPage({
  lightTheme,
  setLightTheme,
}: Theme) {
  setLightTheme(true);
  const pathParts = window.location.href.split("/").pop();
  const birthDate = `${pathParts}`.replaceAll("-", " ");
  const { picture } = useHubblePicture(birthDate);

  const { personalizedText, loading } = useHubbleAIPrompt(
    birthDate,
    picture?.Name,
    picture?.Caption
  );

  const testMarkup = picture ? (
    <div>
      <p>{picture.Date}</p>
      <h3>{picture.Name}</h3>
      <p>{picture.Caption}</p>
      <h4>
        {loading ? "ChatGPT is cooking, let him cook..." : personalizedText}
      </h4>
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
