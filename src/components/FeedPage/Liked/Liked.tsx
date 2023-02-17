import { AnimatePresence, motion } from "framer-motion";
import { duration } from "moment";
import { Link } from "react-router-dom";

import { Picture } from "../../../types/Interfaces";
import styles from "./Liked.module.scss";
interface LikedProps {
  likedPictures: Picture[];
}

export default function Liked({ likedPictures }: LikedProps) {
  const likedPicturesMarkup = likedPictures ? (
    <motion.div
      className={styles.LikedPictures}
      initial={{ opacity: 1, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
    >
      {likedPictures.map((picture: Picture) => (
        <motion.div
          className={styles.LikedPicture}
          key={picture.date}
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
        >
          <Link to={`/feed/${picture.date}`}>
            <img src={picture.url} alt="Nasa Space Imagery"></img>
          </Link>
          <div className={styles.Text}>
            <Link to={`/feed/${picture.date}`}>
              <h5>{picture.title}</h5>
            </Link>
            <p>{picture.date}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  ) : null;

  const hasLikedPicturesMarkup =
    likedPictures.length === 0 ? (
      <motion.h2
        initial={{ opacity: 1, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
      >
        No picture liked
      </motion.h2>
    ) : (
      likedPicturesMarkup
    );

  return (
    <section className={styles.Liked}>
      <h4>Pictures you've liked</h4>
      <AnimatePresence>{hasLikedPicturesMarkup}</AnimatePresence>
    </section>
  );
}
