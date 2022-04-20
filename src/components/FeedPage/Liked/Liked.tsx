import { Link } from "react-router-dom";

import { Picture } from "../../../types/Interfaces";
import styles from "./Liked.module.scss";
interface LikedProps {
  likedPictures: Picture[];
}

export default function Liked({ likedPictures }: LikedProps) {
  const likedPicturesMarkup = likedPictures ? (
    <div className={styles.LikedPictures}>
      {likedPictures.map((picture: Picture) => (
        <div className={styles.LikedPicture} key={picture.date}>
          <Link to={`/feed/${picture.date}`}>
            <img src={picture.url} alt="Nasa Space Imagery"></img>
          </Link>
          <div className={styles.Text}>
            <Link to={`/feed/${picture.date}`}>
              <h5>{picture.title}</h5>
            </Link>
            <p>{picture.date}</p>
          </div>
        </div>
      ))}
    </div>
  ) : null;

  const hasLikedPicturesMarkup =
    likedPictures.length === 0 ? (
      <h2>No picture liked</h2>
    ) : (
      likedPicturesMarkup
    );

  return (
    <section className={styles.Liked}>
      <h4>Pictures you've liked</h4>
      {hasLikedPicturesMarkup}
    </section>
  );
}
