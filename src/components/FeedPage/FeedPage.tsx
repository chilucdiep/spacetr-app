import Navbar from "../Navbar/Navbar";
import Liked from "./Liked/Liked";
import Feed from "./Feed/Feed";

import useLocalStorage from "../../hooks/useLocalStorage";
import { Theme } from "../../types/Interfaces";
import styles from "./FeedPage.module.scss";

export default function FeedPage({ lightTheme, setLightTheme }: Theme) {
  setLightTheme(false);

  const [likedPictures, setLikedPictures] = useLocalStorage(
    "likedPictures",
    []
  );

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      <section className={styles.FeedPage}>
        <Liked
          likedPictures={likedPictures}
          setLikedPictures={setLikedPictures}
        />
        <Feed
          likedPictures={likedPictures}
          setLikedPictures={setLikedPictures}
        />
      </section>
    </>
  );
}
