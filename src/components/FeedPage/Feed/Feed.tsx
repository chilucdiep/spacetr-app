import styles from "./Feed.module.scss";

import Card from "./Card/Card";

const Feed = ({
  pictures,
  likedPictures,
  setLikedPictures,
}: any) => {
  return (
    <div className={styles.Feed}>
      {pictures.map((picture: any) => (
        <Card
          picture={picture}
          likedPictures={likedPictures}
          setLikedPictures={setLikedPictures}
        />
      ))}
    </div>
  );
};

export default Feed;
