import { useState, useEffect } from "react";
import { HUBBLE_URL } from "./utils";

export default function useHubblePicture(date: string) {
  const [picture, setPicture] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    fetch(HUBBLE_URL)
      .then((res) => res.text())
      .then((text) =>
        setPicture(
          csvToJson(text).filter((pic) => pic.Date === `${date} 2019`)[0]
        )
      )
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [date]);

  return { picture, loading, error };

  function csvToJson(csv: string) {
    var lines = csv.split("\n");

    var result = [];

    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
      var obj: any = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    return result;
  }
}
