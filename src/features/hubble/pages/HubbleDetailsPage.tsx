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
} from "../utils/hubble-page-anim";
import PersonalizedMessage from "../components/PersonalizedMessage/PersonalizedMessage";
import { Theme } from "../../../types/Theme";

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
