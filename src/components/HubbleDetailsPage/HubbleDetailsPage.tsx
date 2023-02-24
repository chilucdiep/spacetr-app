import Navbar from "../Navbar/Navbar";

import { Theme } from "../../types/Interfaces";
import styles from "./HubbleDetailsPage.module.scss";
import useHubblePicture from "../../hooks/useHubblePicture";
import useHubbleAIPrompt from "../../hooks/useHubbleAIPrompt";
import { useEffect, useState } from "react";
import useAstrologicalSign from "../../hooks/useAstrologicalSign";

export default function HubbleDetailsPage({
  lightTheme,
  setLightTheme,
}: Theme) {
  setLightTheme(true);
  // const [sign, setSign] = useState<string | undefined>(undefined);
  const pathParts = window.location.href.split("/").pop();
  const birthDate = `${pathParts}`.replaceAll("-", " ");
  const { picture } = useHubblePicture(birthDate);
  const { signName } = useAstrologicalSign(birthDate);

  const { personalizedText, loading } = useHubbleAIPrompt(
    birthDate,
    signName,
    picture?.Name,
    picture?.Caption
  );

  const testMarkup = picture ? (
    <section>
      <p>{picture.Date}</p>
      <h3>{picture.Name}</h3>
      <p>{picture.Caption}</p>
      <h4>
        {/* {loading ? "ChatGPT is cooking, let him cook..." : personalizedText} */}
      </h4>
      <img
        src={`https://imagine.gsfc.nasa.gov/hst_bday/images/${picture.Image}`}
        alt="Hubble pic"
      />
    </section>
  ) : null;

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      <section className={styles.Header}>
        <h1>Hey {signName}, Discover Your Birthday's Cosmic Connection!</h1>
        <h3>
          Explore the cosmos on your special day with Hubble's birthday photos!
          Our AI-generated content is personalized and full of fun references to
          astrology. Discover your cosmic connection with OpenAI and get ready
          to blast off into the stars!
        </h3>
        <h6>{signName === "Virgo" ? "Virgos are toxic js" : ""}</h6>
      </section>
      {testMarkup}
    </>
  );
}
