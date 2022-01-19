import { useState, useEffect } from "react";
import axios from "axios";

import { Picture } from '../types/Interfaces'
import { APOD_URL, API_KEY} from './utils'

function usePicture(date: string) {
  const [picture, setPicture] = useState<Picture|null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const url = `${APOD_URL}?api_key=${API_KEY}&date=${date}`

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
