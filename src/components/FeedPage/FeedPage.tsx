import Navbar from "../Navbar/Navbar";

import useLocalStorage from "../../hooks/useLocalStorage";
import { Picture } from "../../types/Picture";
import styles from "./FeedPage.module.scss";
import { createContext, Dispatch, SetStateAction } from "react";
import HubbleSelection from "../HubbleSelection/HubbleSelection";
import Feed from "../../features/feed/components/Feed/Feed";
import LikedSection from "../../features/feed/components/LikedSection/LikedSection";
import { Theme } from "../../types/Theme";

export const LikedPictureContext = createContext<
  [Picture[], Dispatch<SetStateAction<Picture[]>>]
>([[], () => {}]);

export default function FeedPage({ lightTheme, setLightTheme }: Theme) {
  setLightTheme(false);

  return (
    <LikedPictureContext.Provider
      value={useLocalStorage<Picture[]>("likedPictures", [])}
    >
      <Navbar lightTheme={lightTheme} />
      <section className={styles.FeedPage}>
        <section className={styles.FeedPageLeft}>
          <HubbleSelection />
          <LikedSection />
        </section>
        <Feed />
      </section>
    </LikedPictureContext.Provider>
  );
}
