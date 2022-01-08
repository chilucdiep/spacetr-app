import { useState } from "react";
import styles from "./FeedPage.module.scss";

import Navbar from "../Navbar/Navbar";
import Liked from "./Liked/Liked";
import Feed from "./Feed/Feed";

const FeedPage = ({ pictures, setLightTheme }: any) => {
  const [likedPictures, setLikedPictures] = useState<any[]>([]);
  setLightTheme(false);

  const handleAddLikedPictures = (picture: any) => {
    setLikedPictures([...likedPictures, picture]);
  };

  return (
    <>
      <Navbar />
      <div className={styles.FeedPage}>
        <Liked />
        <Feed
          pictures={pictures}
          onLikeClick={handleAddLikedPictures}
          likedPictures={likedPictures}
        />
      </div>
    </>
  );
};

export default FeedPage;
