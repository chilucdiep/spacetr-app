import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import { Picture } from "../types/Interfaces";
import { APOD_URL } from "./utils";

export default function usePictures(count: number) {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const [startCount, setStartCount] = useState<number>(count);
  const [endCount, setEndCount] = useState<number>(0);

  useEffect(() => {
    async function fetchPictures() {
      setLoading(true);

      const startDate = moment()
        .subtract(startCount, "days")
        .format("YYYY-MM-DD");
      const endDate = moment().subtract(endCount, "days").format("YYYY-MM-DD");
      const url = `${APOD_URL}?api_key=${process.env.REACT_APP_API_KEY}&start_date=${startDate}&end_date=${endDate}`;

      try {
        const response = await axios.get(url);
        const inversePictures = response.data.reverse();
        setPictures((pictures) => [...pictures, ...inversePictures]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPictures();
  }, [count, startCount, endCount]);

  const fetchMore = () => {
    setStartCount((startCount) => startCount + count);

    endCount === 0
      ? setEndCount((endCount) => endCount + count + 1)
      : setEndCount((endCount) => endCount + count);
  };

  return { pictures, loading, error, fetchMore };
}
