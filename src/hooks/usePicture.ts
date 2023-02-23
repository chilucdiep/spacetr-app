import { useState, useEffect } from "react";
import axios from "axios";

import { Picture } from "../types/Interfaces";
import { APOD_URL, API_KEY } from "./utils";

export default function usePicture(date: string) {
  const [picture, setPicture] = useState<Picture | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const url = `${APOD_URL}?api_key=${API_KEY}&date=${date}`;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const response = await axios.get(url);
        setPicture(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { picture, loading, error };
}
