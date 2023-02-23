import Navbar from "../Navbar/Navbar";
import Liked from "./Liked/Liked";
import Feed from "./Feed/Feed";

import useLocalStorage from "../../hooks/useLocalStorage";
import { Picture, Theme } from "../../types/Interfaces";
import styles from "./FeedPage.module.scss";
import { createContext, Dispatch, SetStateAction } from "react";
// import HubbleSelection from "./HubbleSelection/HubbleSelection";

export const LikedPictureContext = createContext<
  [Picture[], Dispatch<SetStateAction<Picture[]>>]
>([[], () => {}]);

export default function FeedPage({ lightTheme, setLightTheme }: Theme) {
  setLightTheme(false);

  return (
    <LikedPictureContext.Provider value={useLocalStorage("likedPictures", [])}>
      <Navbar lightTheme={lightTheme} />
      <section className={styles.FeedPage}>
        <section>
          {/* <HubbleSelection /> */}
          <Liked />
        </section>
        <Feed />
      </section>
    </LikedPictureContext.Provider>
  );
}
