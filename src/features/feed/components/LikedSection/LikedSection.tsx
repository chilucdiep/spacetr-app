import { AnimatePresence, motion } from "framer-motion";
import Delete from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

import globals from "../../../../App.module.scss";
import styles from "./LikedSection.module.scss";
import { useContext } from "react";
import { LikedPictureContext } from "../../pages/FeedPage";
import { Picture } from "../../../../types/Picture";

export default function LikedSection() {
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
        Save your favorite pictures
      </motion.h2>
    ) : (
      likedPicturesMarkup
    );

  return (
    <section>
      <h3 className={globals.SectionTitle}>Pictures you've liked</h3>
      <section className={styles.Liked}>
        <AnimatePresence>{hasLikedPicturesMarkup}</AnimatePresence>
      </section>
    </section>
  );

  function removeLikedPictures(picture: Picture) {
    const updatedLikedPictures = likedPictures.filter(
      (likedPicture: Picture) => likedPicture.date !== picture.date
    );

    setLikedPictures(updatedLikedPictures);
  }
}
