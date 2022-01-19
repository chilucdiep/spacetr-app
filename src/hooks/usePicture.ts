import { useState, useEffect } from "react";
import axios from "axios";

import { Picture } from '../Interfaces'

function usePicture(url: any) {
  const [picture, setPicture] = useState<Picture|null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setPicture(response.data);
        console.log(response.data)
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { picture, loading, error };
};

export default usePicture;
