import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import { Picture } from "../types/Interfaces";
import { APOD_URL, API_KEY } from "./utils";

function usePictures(count: number) {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const inversePictures: Picture[] = [];

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const [startCount, setStartCount] = useState<number>(count);
  const [endCount, setEndCount] = useState<number>(0);

  let startDate = moment().subtract(startCount, "days").format("YYYY-MM-DD");
  let endDate = moment().subtract(endCount, "days").format("YYYY-MM-DD");
  let url = `${APOD_URL}?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`;

  useEffect(() => {
    fetchMore();
  }, []);

  function fetchMore() {
    setLoading(true);

    setStartCount((startCount) => startCount + count);

    endCount === 0
      ? setEndCount((endCount) => endCount + count + 1)
      : setEndCount((endCount) => endCount + count);
      
    axios
      .get(url)
      .then((response) => {
        for (let i = response.data.length - 1; i >= 0; i--) {
          inversePictures.push(response.data[i]);
        }

        setPictures((pictures) => [...pictures, ...inversePictures]);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { pictures, loading, error, fetchMore };
}

export default usePictures;
