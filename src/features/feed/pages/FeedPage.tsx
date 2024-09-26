import styles from "./FeedPage.module.scss";
import { createContext, Dispatch, SetStateAction } from "react";
import { Picture } from "../../../types/Picture";
import useLocalStorage from "../../../hooks/useLocalStorage";
import Navbar from "../../../components/Navbar/Navbar";
import Liked from "../components/LikedSection/LikedSection";
import Feed from "../components/Feed/Feed";
import HubbleSelection from "../../../components/HubbleSelection/HubbleSelection";
import { useTheme } from "../../../ThemeContext";

export const LikedPictureContext = createContext<
  [Picture[], Dispatch<SetStateAction<Picture[]>>]
>([[], () => {}]);

export default function FeedPage() {
  const { lightTheme, setLightTheme } = useTheme();
  setLightTheme(false);

  return (
    <LikedPictureContext.Provider
      value={useLocalStorage<Picture[]>("likedPictures", [])}
    >
      <Navbar lightTheme={lightTheme} />
      <section className={styles.FeedPage}>
        <section className={styles.FeedPageLeft}>
          <HubbleSelection />
          <Liked />
        </section>
        <Feed />
      </section>
    </LikedPictureContext.Provider>
  );
}
