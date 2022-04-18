import { useState } from "react";
import { Link } from "react-router-dom";

import { FormControlLabel } from "@mui/material";
import Checkbox from "@material-ui/core/Checkbox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Picture } from "../../../../types/Interfaces";
import styles from "./Card.module.scss";
interface CardProps {
  picture: Picture;
  likedPictures: Picture[];
  setLikedPictures: any;
}

function Card({ picture, likedPictures, setLikedPictures }: CardProps) {
  const [checked, setChecked] = useState<boolean>(true);

  const mediaMarkup =
    picture.media_type === "image" ? (
      <img src={picture.url} alt="Nasa Space Imagery"></img>
    ) : (
      <iframe height="100%" src={picture.url} title={picture.title}></iframe>
    );

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
            data-testid="like-button"
            control={
              <Checkbox
                icon={<FavoriteBorderIcon style={{ color: "white" }} />}
                checkedIcon={<FavoriteIcon />}
                name="checkedH"
                onClick={handleLikedPictures}
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
        {mediaMarkup}
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
