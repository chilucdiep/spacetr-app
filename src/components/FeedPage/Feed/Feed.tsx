import usePictures from "../../../hooks/usePictures";
import styles from "./Feed.module.scss";

import Card from "./Card/Card";

interface FeedProps {
  likedPictures: any;
  setLikedPictures: any;
}

const Feed = ({ likedPictures, setLikedPictures }: FeedProps) => {
  const APOD_URL = "https://api.nasa.gov/planetary/apod";
  const API_KEY = "9guRyYAY594OtPx1YP6IlfWME4lFznqFN2hEQWMA";

  const { pictures } = usePictures(`${APOD_URL}?api_key=${API_KEY}&count=8`);
  return (
    <div className={styles.Feed}>
      {pictures.map((picture: any) => (
        <Card
          picture={picture}
          likedPictures={likedPictures}
          setLikedPictures={setLikedPictures}
        />
      ))}
    </div>
  );
};

export default Feed;
