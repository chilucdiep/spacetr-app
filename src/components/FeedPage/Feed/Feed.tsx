import styles from "./Feed.module.scss";

import Card from "./Card/Card";

interface FeedProps {
  pictures: any;
  likedPictures: any
  setLikedPictures: any;
}

const Feed = ({
  pictures,
  likedPictures,
  setLikedPictures,
}: FeedProps) => {
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
