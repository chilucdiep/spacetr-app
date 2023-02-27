import Navbar from "../Navbar/Navbar";

import { Theme } from "../../types/Interfaces";
import styles from "./HubbleDetailsPage.module.scss";
import useHubblePicture from "../../hooks/useHubblePicture";
import useAstrologicalSign from "../../hooks/useAstrologicalSign";
import useHubbleAIPrompt from "../../hooks/useHubbleAIPrompt";

export default function HubbleDetailsPage({
  lightTheme,
  setLightTheme,
}: Theme) {
  setLightTheme(false);
  const pathParts = window.location.href.split("/").pop();
  const birthDate = `${pathParts}`.replaceAll("-", " ");
  const { picture } = useHubblePicture(birthDate);
  const { signName } = useAstrologicalSign(birthDate);
  const { personalizedText, loading } = useHubbleAIPrompt({
    birthDate: birthDate,
    signName: signName,
    pictureName: picture?.Name,
    pictureCaption: picture?.Caption,
  });

  const headerMarkup = (
    <section className={styles.Header}>
      <h5>Hello little {signName},</h5>
      <h1>Discover Your Birthday's Cosmic Connection!</h1>
      <h3>
        Hubble Space Telescope has been capturing awe-inspiring images of the
        cosmos since its launch in 1990. Our AI-generated message for you is
        personalized and full of fun references to astrology. So, get ready to
        blast off into the stars and explore Hubble's birthday photo on your
        special day!
      </h3>
      <h6>{signName === "Virgo" ? "Virgos are toxic btw" : ""}</h6>
    </section>
  );

  const personalizedMessage = (
    <section className={styles.PersonalizedMessage}>
      <h2>Our personalized words of the day to you</h2>
      <p className={styles.Caption}>
        {loading ? "ChatGPT is cooking, let him cook..." : personalizedText}
      </p>
    </section>
  );

  const pictureMarkup = picture ? (
    <section className={styles.Picture}>
      <div className={styles.Info}>
        <h1>{picture.Name}</h1>
        <p className={styles.Date}>{picture.Date}</p>
        <p className={styles.Caption}>{picture.Caption}</p>
      </div>
      <div className={styles.Overlay}></div>
      <img
        src={`https://imagine.gsfc.nasa.gov/hst_bday/images/${picture.Image}`}
        alt="Hubble pic"
      />
    </section>
  ) : null;

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      {headerMarkup}
      {personalizedMessage}
      {pictureMarkup}
    </>
  );
}
