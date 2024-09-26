import Navbar from "../../../components/Navbar/Navbar";

import styles from "./HubbleDetailsPage.module.scss";
import useHubblePicture from "../hooks/useHubblePicture";
import useAstrologicalSign from "../hooks/useAstrologicalSign";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { memo } from "react";
import HubbleSelection from "../../../components/HubbleSelection/HubbleSelection";
import {
  headerHello,
  headerTitle,
  headerCaption,
  messageBox,
} from "../utils/hubble-page-anim";
import PersonalizedMessage from "../components/PersonalizedMessage/PersonalizedMessage";
import { useTheme } from "../../../ThemeContext";
import HubblePicture from "../components/HubblePicture/HubblePicture";

const MemoizedPersonalizedMessage = memo(PersonalizedMessage);

export default function HubbleDetailsPage() {
  const { lightTheme, setLightTheme } = useTheme();
  setLightTheme(false);

  const { id } = useParams();
  const birthDate = id ? id.replaceAll("-", " ") : "";
  const { picture, loading, error } = useHubblePicture(birthDate);
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

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      {backToFeedLinkMarkup}
      {headerMarkup}
      <motion.section
        className={styles.PersonalizedMessage}
        variants={messageBox}
        initial="hidden"
        animate="show"
      >
        <div>
          <p className={styles.Caption}>
            <h2>Our personalized words to you</h2>
            <MemoizedPersonalizedMessage
              birthDate={birthDate}
              signName={signName}
              pictureName={picture?.Name}
              pictureCaption={picture?.Caption}
            />
          </p>
        </div>
      </motion.section>
      <HubblePicture picture={picture} error={error} />
    </>
  );
}
