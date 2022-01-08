import { Link } from "react-router-dom";
import styles from "./Feed.module.scss";

import { FormControlLabel } from "@mui/material";
import Checkbox from "@material-ui/core/Checkbox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Feed = ({ pictures }: any) => {
  return (
    <div className={styles.Feed}>
      {pictures.map((picture: any) => (
        <div className={styles.Image}>
          <div className={styles.Header}>
            <div className={styles.Information}>
              <h3>{picture.title}</h3>
              <p>
                {picture.date} |{" "}
                {(picture.copyright && picture.copyright) || "No Copyright"}
              </p>
            </div>
            <div className={styles.Button}>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorderIcon style={{ color: "white" }} />}
                    checkedIcon={<FavoriteIcon />}
                    name="checkedH"
                  />
                }
                label=""
              />
            </div>
          </div>
          <div className={styles.Overlay}></div>
          <Link
            to={`/feed/${picture.date}`}
            className={styles.LinkContainer}
          >
            <div className={styles.LinkOverlay}></div>
            <h2>Read more</h2>
            <img src={picture.url} alt="Nasa Space Imagery"></img>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Feed;
