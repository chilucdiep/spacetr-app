import styles from "./FeedPage.module.scss";

import HeartIcon from "../../images/HeartIcon";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@material-ui/core/Checkbox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FeedPage = ({ pictures }: any) => {
  return (
    <div className={styles.FeedPage}>
      <div className={styles.Liked}>
        <h4>Posts you've liked</h4>
        <h2>No picture liked</h2>
      </div>
      <div className={styles.Feed}>
        {pictures.map((picture: any) => (
          <div className={styles.Image}>
            <div className={styles.Header}>
              <div className={styles.Information}>
                <h3>{picture.title}</h3>
                <p>{picture.date}</p>
              </div>
              <div className={styles.Button}>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorderIcon style={{ color: 'white' }} />}
                      checkedIcon={<FavoriteIcon />}
                      name="checkedH"
                    />
                  }
                  label=""
                />
              </div>
            </div>
            <div className={styles.Overlay}></div>
            <img src={picture.url}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
