import { useState } from "react";
import styles from "./FeedPage.module.scss";

import Navbar from "../Navbar/Navbar";
import Liked from "./Liked/Liked";
import Feed from "./Feed/Feed";

const FeedPage = ({ pictures, setLightTheme }: any) => {
  const [likedPictures, setLikedPictures] = useState<any[]>([]);
  setLightTheme(false);

  return (
    <>
      <Navbar />
      <div className={styles.FeedPage}>
        <Liked likedPictures={likedPictures} />
        <Feed
          pictures={pictures}
          likedPictures={likedPictures}
          setLikedPictures={setLikedPictures}
        />
      </div>
    </>
  );
};

export default FeedPage;
