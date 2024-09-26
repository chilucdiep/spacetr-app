import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import { Picture } from "../types/Picture";
import { APOD_URL } from "./utils";

export default function usePictures(count: number) {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const [startCount, setStartCount] = useState(count);
  const [endCount, setEndCount] = useState(0);

  useEffect(() => {
    async function fetchPictures() {
      setLoading(true);

      const startDate = formatDate(startCount);
      const endDate = formatDate(endCount);

      try {
        const fetchedPictures = await fetchPicturesFromAPI(startDate, endDate);
        setPictures((pictures) => [...pictures, ...fetchedPictures]);
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
    setEndCount((endCount) =>
      endCount === 0 ? endCount + count + 1 : endCount + count
    );
  };

  return { pictures, loading, error, fetchMore };
}

const formatDate = (days: number) => {
  return moment().subtract(days, "days").format("YYYY-MM-DD");
};

const fetchPicturesFromAPI = async (startDate: string, endDate: string) => {
  const url = `${APOD_URL}?api_key=${process.env.REACT_APP_API_KEY}&start_date=${startDate}&end_date=${endDate}`;
  const response = await axios.get(url);
  return response.data.reverse(); // Reverse to maintain chronological order
};
