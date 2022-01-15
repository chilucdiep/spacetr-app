import { useState } from "react";
import styles from "./FeedPage.module.scss";

import Navbar from "../Navbar/Navbar";
import Liked from "./Liked/Liked";
import Feed from "./Feed/Feed";

interface FeedPageProps {
  lightTheme: boolean;
  setLightTheme: any;
}

const FeedPage = ({ lightTheme, setLightTheme }: FeedPageProps) => {
  const [likedPictures, setLikedPictures] = useState<any[]>([]);
  setLightTheme(false);

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      <div className={styles.FeedPage}>
        <Liked likedPictures={likedPictures} />
        <Feed
          likedPictures={likedPictures}
          setLikedPictures={setLikedPictures}
        />
      </div>
    </>
  );
};

export default FeedPage;
