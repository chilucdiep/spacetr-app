import { useParams } from "react-router-dom";
import usePicture from "../../../../hooks/usePicture";
import styles from "../../pages/PictureDetailsPage.module.scss";
import { motion } from "framer-motion";
import { contentVariant } from "../../utils/picture-details-anim";

export default function PictureContent() {
  const { id: pictureDate } = useParams();
  const { picture, loading, error } = usePicture(pictureDate);

  if (loading) return <div>...Loading</div>;

  if (!picture || error) {
    return <p>Error fetching your picture. Please refresh the page.</p>;
  }

  const mediaMarkup =
    picture.media_type === "image" ? (
      <img src={picture.url} alt="Nasa Space Imagery"></img>
    ) : (
      <div className={styles.Video}>
        <iframe height="100%" src={picture.url} title={picture.title}></iframe>
      </div>
    );

  return (
    <section className={styles.PictureDetailsPage}>
      <motion.section
        className={styles.PictureDetailsContainer}
        variants={contentVariant}
        initial="hidden"
        animate="show"
      >
        {mediaMarkup}
        <div className={styles.Text}>
          <h2>{picture.title}</h2>
          <p>
            {picture.date} |{" "}
            {picture.copyright ? picture.copyright : "No Copyright"}
          </p>
          <div className={styles.Explanation}>
            <p>{picture.explanation}</p>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
