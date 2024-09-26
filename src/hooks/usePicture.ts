import { useState, useEffect } from "react";
import axios from "axios";

import { Picture } from "../types/Picture";
import { APOD_URL } from "./utils";

export default function usePicture(date: string | undefined) {
  const [picture, setPicture] = useState<Picture | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!date) return;

    async function fetchData() {
      setLoading(true);

      try {
        const url = `${APOD_URL}?api_key=${process.env.REACT_APP_API_KEY}&date=${date}`;
        const response = await axios.get(url);
        setPicture(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [date]);

  return { picture, loading, error };
}
