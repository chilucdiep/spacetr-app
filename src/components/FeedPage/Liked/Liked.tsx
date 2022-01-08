import styles from "./Liked.module.scss";

const Liked = ({ likedPictures }: any) => {
  const lickedPicturesMarkup =
    likedPictures.length === 0 ? (
      <h2>No picture liked</h2>
    ) : (
      <div>
        {likedPictures.map((picture: any) => (
          <p>{picture.title}</p>
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
