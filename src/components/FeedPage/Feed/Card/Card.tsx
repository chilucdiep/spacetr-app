import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

import { Picture } from "../../../../types/Interfaces";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@material-ui/core/Checkbox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface CardProps {
  picture: Picture;
  likedPictures: Picture[];
  setLikedPictures: any;
}

function Card({ picture, likedPictures, setLikedPictures }: CardProps) {
  const [checked, setChecked] = useState<boolean>(true);

  const cardMarkup = picture ? (
    <div className={styles.Card}>
      <div className={styles.Header}>
        <div className={styles.Information}>
          <h3>{picture.title}</h3>
          <p>
            {picture.date} |{" "}
            {picture.copyright ? picture.copyright : "No Copyright"}
          </p>
        </div>
        <div className={styles.Button}>
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorderIcon style={{ color: "white" }} />}
                checkedIcon={<FavoriteIcon />}
                name="checkedH"
                onClick={() => handleLikedPictures()}
                data-testid="like-button"
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
        <img src={picture.url} alt="Nasa Space Imagery"></img>
      </Link>
    </div>
  ) : null;

  return <>{cardMarkup}</>;

  function handleLikedPictures() {
    setChecked((checked) => !checked);
    if (checked) {
      setLikedPictures([...likedPictures, picture]);
    } else {
      const updatedLikedPictures = likedPictures.filter(
        (likedPicture) => likedPicture.date !== picture.date
      );
      setLikedPictures(updatedLikedPictures);
    }
  }
}

export default Card;
