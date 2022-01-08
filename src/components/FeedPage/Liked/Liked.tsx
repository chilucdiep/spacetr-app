import styles from "./Liked.module.scss";

const Liked = ({ likedPictures }: any) => {
  const lickedPicturesMarkup =
    likedPictures.length === 0 ? (
      <h2>No picture liked</h2>
    ) : (
      <div className={styles.LikedPictures}>
        {likedPictures.map((picture: any) => (
          <div className={styles.LikedPicture}>
            <img src={picture.url} alt="Nasa Space Imagery"></img>
            <div className={styles.Text}>
              <h5>{picture.title}</h5>
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
