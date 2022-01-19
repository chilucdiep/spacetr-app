import usePictures from "../../../hooks/usePictures";
import styles from "./Feed.module.scss";

import { Picture } from "../../../types/Interfaces";
import Card from "./Card/Card";

interface FeedProps {
  likedPictures: Picture[];
  setLikedPictures: any;
}

function Feed({ likedPictures, setLikedPictures }: FeedProps) {
  const { pictures } = usePictures(8);

  return (
    <div className={styles.Feed}>
      {pictures?.map((picture: Picture, key: number) => (
        <Card
          picture={picture}
          likedPictures={likedPictures}
          setLikedPictures={setLikedPictures}
          key={key}
        />
      ))}
    </div>
  );
}

export default Feed;
