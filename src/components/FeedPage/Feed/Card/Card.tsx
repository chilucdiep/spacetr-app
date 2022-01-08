import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

import { FormControlLabel } from "@mui/material";
import Checkbox from "@material-ui/core/Checkbox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Card = ({ picture, likedPictures, setLikedPictures }: any) => {
  const [checked, setChecked] = useState<boolean>(true);

  const handleLikedPictures = (picture: any) => {
    setChecked((checked) => !checked);
    if (checked) {
      setLikedPictures([...likedPictures, picture]);
    } else {
      const updatedLikedPictures = likedPictures.filter(
        (likedPicture: any) => likedPicture.date !== picture.date
      );
      setLikedPictures(updatedLikedPictures);
    }
  };
  return (
    <div className={styles.Card}>
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
                onClick={() => handleLikedPictures(picture)}
              />
            }
            label=""
          />
        </div>
      </div>
      <div className={styles.Overlay}></div>
      <Link to={`/feed/${picture.date}`} className={styles.LinkContainer}>
        <div className={styles.LinkOverlay}></div>
        <h2>Read more</h2>
        <img src={picture.hdurl} alt="Nasa Space Imagery"></img>
      </Link>
    </div>
  );
};

export default Card;
