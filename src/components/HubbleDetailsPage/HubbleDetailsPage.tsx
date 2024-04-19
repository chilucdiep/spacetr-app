import Navbar from "../Navbar/Navbar";

import { Theme } from "../../types/Interfaces";
import styles from "./HubbleDetailsPage.module.scss";
import useHubblePicture from "../../hooks/useHubblePicture";
import useAstrologicalSign from "../../hooks/useAstrologicalSign";
import useHubbleAIPrompt from "../../hooks/useHubbleAIPrompt";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import HubbleSelection from "../FeedPage/HubbleSelection/HubbleSelection";
import { memo } from "react";

const headerHello = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const headerTitle = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
};

const headerCaption = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.4,
    },
  },
};

const messageBox = {
  hidden: { x: 120, y: 120, scale: 0.3, opacity: 0 },
  show: {
    scale: 1,
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 1,
    },
  },
};

const MemoizedPersonalizedMessage = memo(PersonalizedMessage);

export default function HubbleDetailsPage({
  lightTheme,
  setLightTheme,
}: Theme) {
  setLightTheme(false);
  const { id } = useParams();
  console.log(id);
  const pathParts = window.location.href.split("/").pop();
  const birthDate = `${pathParts}`.replaceAll("-", " ");
  const { picture, loading } = useHubblePicture(birthDate);
  const { signName } = useAstrologicalSign(birthDate);

  if (loading) return <div>...Loading</div>;

  const backToFeedLinkMarkup = (
    <Link to="/feed">
      <div className={styles.BackButton}>
        <ArrowBackIosNewIcon fontSize="small" />
        <h3>Feed</h3>
      </div>
    </Link>
  );

  const headerMarkup = (
    <section className={styles.Hero}>
      <section className={styles.Header}>
        <motion.h5 variants={headerHello} initial="hidden" animate="show">
          Hello little {signName},
        </motion.h5>
        <motion.h1 variants={headerTitle} initial="hidden" animate="show">
          Discover Your Birthday's{" "}
          <span className={styles.MagicText}>Cosmic</span> Connection!
        </motion.h1>
        <motion.h3 variants={headerCaption} initial="hidden" animate="show">
          Hubble Space Telescope has been capturing awe-inspiring images of the
          cosmos since its launch in 1990. Our AI-generated message for you is
          personalized and full of fun references to astrology. So get ready to
          blast off into the stars and explore Hubble's birthday photo on your
          special day!
        </motion.h3>
      </section>
      <HubbleSelection />
    </section>
  );

  const pictureMarkup = picture ? (
    <motion.section
      className={styles.Picture}
      variants={headerHello}
      initial="hidden"
      animate="show"
    >
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
    </motion.section>
  ) : null;

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      {backToFeedLinkMarkup}
      {headerMarkup}
      <MemoizedPersonalizedMessage
        birthDate={birthDate}
        signName={signName}
        pictureName={picture?.Name}
        pictureCaption={picture?.Caption}
      />
      {pictureMarkup}
    </>
  );
}

function PersonalizedMessage({
  birthDate,
  signName,
  pictureName,
  pictureCaption,
}: any) {
  const { personalizedText, loading } = useHubbleAIPrompt({
    birthDate,
    signName,
    pictureName,
    pictureCaption,
  });
  return (
    <motion.section
      className={styles.PersonalizedMessage}
      variants={messageBox}
      initial="hidden"
      animate="show"
    >
      <h2>Our personalized words of the day to you</h2>
      <div>
        <p className={styles.Caption}>
          {loading ? (
            <Typewriter
              options={{
                strings: ["", "Loading...", "Let him cook."],
                autoStart: true,
                cursor: "",
                loop: true,
                delay: 20,
                deleteSpeed: 20,
              }}
            />
          ) : (
            <Typewriter
              options={{
                strings: personalizedText,
                autoStart: true,
                cursor: "",
                delay: 20,
              }}
            />
          )}
        </p>
      </div>
    </motion.section>
  );
}
