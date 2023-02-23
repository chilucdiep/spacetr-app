import { AnimatePresence, motion } from "framer-motion";
import Delete from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

import { Picture, SelectOption } from "../../../types/Interfaces";
import styles from "./Liked.module.scss";
import { useContext } from "react";
import { LikedPictureContext } from "../FeedPage";
import { Select } from "../../Select/Select";

export default function Liked() {
  const [likedPictures, setLikedPictures] = useContext(LikedPictureContext);

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
          <div className={styles.Left}>
            <Link to={`/feed/${picture.date}`} className={styles.LeftImg}>
              <img src={picture.url} alt="Nasa Space Imagery"></img>
            </Link>
            <div className={styles.Text}>
              <Link to={`/feed/${picture.date}`}>
                <h5>{picture.title}</h5>
              </Link>
              <p>{picture.date}</p>
            </div>
          </div>
          <button onClick={() => removeLikedPictures(picture)}>
            <Delete />
          </button>
        </motion.div>
      ))}
    </motion.div>
  ) : null;

  const hasLikedPicturesMarkup =
    likedPictures.length === 0 ? (
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, y: 15, transition: { duration: 0.3 } }}
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

  function removeLikedPictures(picture: Picture) {
    const updatedLikedPictures = likedPictures.filter(
      (likedPicture: Picture) => likedPicture.date !== picture.date
    );

    setLikedPictures(updatedLikedPictures);
  }
}
