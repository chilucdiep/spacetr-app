import { useState } from "react";
import styles from "./FeedPage.module.scss";

import Liked from "./Liked/Liked";
import Feed from "./Feed/Feed";

const FeedPage = ({ pictures, lightTheme, setLightTheme }: any) => {
  const [likedPictures, setLikedPictures] = useState<any[]>([]);

  const handleAddLikedPictures = (picture: any) => {
    setLikedPictures([...likedPictures, picture]);
  };

  return (
    <div className={styles.FeedPage}>
      <Liked />
      <Feed
        pictures={pictures}
        onLikeClick={handleAddLikedPictures}
        likedPictures={likedPictures}
      />
    </div>
  );
};

export default FeedPage;
