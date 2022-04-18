import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import { Picture } from "../types/Interfaces";
import { APOD_URL, API_KEY } from "./utils";

function usePictures(count: number) {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [countMore, setCountMore] = useState<number>(count);

  let startDate = moment().subtract(countMore, "days").format("YYYY-MM-DD");
  let url = `${APOD_URL}?api_key=${API_KEY}&start_date=${startDate}`;

  useEffect(() => {
    fetchMore();
  }, []);

  function fetchMore() {
    setLoading(true);
    
    setCountMore(countMore => countMore + count)
    startDate = moment().subtract(countMore, "days").format("YYYY-MM-DD");
    url = `${APOD_URL}?api_key=${API_KEY}&start_date=${startDate}`;

    axios
      .get(url)
      .then((response) => {
        setPictures(response.data);
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
