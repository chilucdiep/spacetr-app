import { useState, useEffect } from "react";
import axios from "axios";

const usePictures = (url: any) => {
  const [pictures, setPictures] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setPictures(pictures => [...pictures, ...response.data]);
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
        setPictures(pictures => [...pictures, ...response.data]);
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
