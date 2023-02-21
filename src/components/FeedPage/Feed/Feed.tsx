import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TailSpin } from "react-loader-spinner";

import Card from "./Card/Card";

import usePictures from "../../../hooks/usePictures";
import { Picture } from "../../../types/Interfaces";
import styles from "./Feed.module.scss";
import usePicture from "../../../hooks/usePicture";
import moment from "moment";
interface FeedProps {
  likedPictures: Picture[];
  setLikedPictures: any;
}

export default function Feed({ likedPictures, setLikedPictures }: FeedProps) {
  const { pictures, loading, error, fetchMore } = usePictures(8);

  const currentDate = moment().format("YYYY-MM-DD");
  const { picture } = usePicture(currentDate);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      fetchMore();
    }
  }, [inView]);

  const picturesMarkup = pictures ? (
    <>
      <div className={styles.OftheDay}>
        {picture ? (
          <>
            <h3 className={styles.Title}>Astronomy picture of the day</h3>
            <Card
              picture={picture}
              likedPictures={likedPictures}
              setLikedPictures={setLikedPictures}
            />
          </>
        ) : null}
      </div>
      <h3 className={styles.Title}>Our previous pictures</h3>
      <div className={styles.Pictures}>
        {pictures.slice(1).map((picture: Picture, index: number) =>
          pictures.length === index + 2 ? (
            <div ref={ref} key={picture.date}>
              <Card
                picture={picture}
                likedPictures={likedPictures}
                setLikedPictures={setLikedPictures}
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
    </>
  ) : null;

  const noDataMarkup = (
    <div className={styles.NoData}>
      {loading && <TailSpin color="#357cf2" height={30} width={30} />}
      {error && <p>Error fetching the pictures. Please refresh the page.</p>}
    </div>
  );

  return (
    <section className={styles.Feed}>
      {picturesMarkup}
      {noDataMarkup}
    </section>
  );
}
