import { useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { TailSpin } from "react-loader-spinner";
import usePictures from "../../../hooks/usePictures";
import styles from "./Feed.module.scss";

import { Picture } from "../../../types/Interfaces";
import Card from "./Card/Card";

interface FeedProps {
  likedPictures: Picture[];
  setLikedPictures: any;
}

function Feed({ likedPictures, setLikedPictures }: FeedProps) {
  const { pictures, loading, error, fetchMore } = usePictures(8);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      fetchMore();
    }
  }, [inView]);

  return (
    <div className={styles.Feed}>
      <div className={styles.Pictures}>
        {pictures?.map((picture: Picture, index: number) =>
          pictures.length === index + 1 ? (
            <div ref={ref}>
              <Card
                picture={picture}
                likedPictures={likedPictures}
                setLikedPictures={setLikedPictures}
                key={picture.date}
              />
            </div>
          ) : (
            <Card
              picture={picture}
              likedPictures={likedPictures}
              setLikedPictures={setLikedPictures}
              key={picture.date}
            />
          )
        )}
      </div>
      <div className={styles.NoData}>
        {loading && <TailSpin color="#357cf2" height={30} width={30} />}
        {error && <p>Error fetching the pictures. Please refresh the page.</p>}
      </div>
    </div>
  );
}

export default Feed;
