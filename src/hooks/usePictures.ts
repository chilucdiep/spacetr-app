import { useState, useEffect, useCallback } from "react";
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
        setPictures([...pictures, ...response.data]);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
};

export default usePictures;
