import { useState } from "react";
import styles from "./FeedPage.module.scss";

import Navbar from "../Navbar/Navbar";
import Liked from "./Liked/Liked";
import Feed from "./Feed/Feed";

import { Picture } from "../../types/Interfaces";
import useLocalStorage from "../../hooks/useLocalStorage";

interface FeedPageProps {
  lightTheme: boolean;
  setLightTheme: any;
}

function FeedPage({ lightTheme, setLightTheme }: FeedPageProps) {
  setLightTheme(false);

  const [likedPictures, setLikedPictures] = useLocalStorage('likedPictures', []);

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
}

export default FeedPage;
