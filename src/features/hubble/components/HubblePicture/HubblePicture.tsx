import { motion } from "framer-motion";
import styles from "../../pages/HubbleDetailsPage.module.scss";
import { headerHello } from "../../utils/hubble-page-anim";

export default function HubblePicture({
  picture,
  error,
}: {
  picture: any;
  error: any;
}) {
  if (!picture || error) {
    return <p>Error fetching your hubble picture. Please refresh the page.</p>;
  }

  return (
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
  );
}
