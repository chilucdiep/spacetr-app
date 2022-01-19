import { useState, useEffect } from "react";
import axios from "axios";

import { Picture } from "../Interfaces";
import { APOD_URL, API_KEY } from "./utils";

function usePictures(count: number) {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const url = `${APOD_URL}?api_key=${API_KEY}&count=${count}`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setPictures((pictures) => [...pictures, ...response.data]);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  function fetchMore() {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setPictures((pictures) => [...pictures, ...response.data]);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { pictures, loading, error, fetchMore };
};

export default usePictures;
