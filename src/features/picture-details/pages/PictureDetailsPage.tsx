import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./PictureDetailsPage.module.scss";
import Navbar from "../../../components/Navbar/Navbar";
import { useTheme } from "../../../ThemeContext";
import PictureContent from "../components/PictureContent/PictureContent";

export default function PictureDetailsPage() {
  const { lightTheme, setLightTheme } = useTheme();
  setLightTheme(true);

  const backToFeedLinkMarkup = (
    <Link to="/feed">
      <div className={styles.BackButton}>
        <ArrowBackIosNewIcon fontSize="small" />
        <h3>Feed</h3>
      </div>
    </Link>
  );

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      {backToFeedLinkMarkup}
      <PictureContent />
    </>
  );
}
