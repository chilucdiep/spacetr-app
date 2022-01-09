import { Link } from "react-router-dom";
import styles from "./Liked.module.scss";

const Liked = ({ likedPictures }: any) => {
  const lickedPicturesMarkup =
    likedPictures.length === 0 ? (
      <h2>No picture liked</h2>
    ) : (
      <div className={styles.LikedPictures}>
        {likedPictures.map((picture: any) => (
          <div className={styles.LikedPicture}>
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
    );
  return (
    <div className={styles.Liked}>
      <h4>Pictures you've liked</h4>
      {lickedPicturesMarkup}
    </div>
  );
};

export default Liked;