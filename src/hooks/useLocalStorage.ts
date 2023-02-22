import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Picture } from "../types/Interfaces";

export default function useLocalStorage(
  key: string,
  defaultValue: Picture[]
): [Picture[], Dispatch<SetStateAction<Picture[]>>] {
  const [value, setValue] = useState<Picture[]>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue !== null) return JSON.parse(jsonValue);
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
