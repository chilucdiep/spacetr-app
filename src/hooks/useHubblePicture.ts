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
          () => csvToJson(text).filter((pic) => pic.Date === `${date} 2019`)[0]
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

  type ImageData = {
    [key: string]: string | number;
  };

  // Function written with the help of ChapGPT. Comments are added to make it easy to navigate and tweak if needed
  function csvToJson(csvString: string): ImageData[] {
    // Split the CSV string into an array of lines
    const lines = csvString.split("\n");
    // Initialize an empty array to store the resulting objects
    const result: ImageData[] = [];
    // Split the first line (header row) into an array of headers
    const headers = lines[0].split(",");

    // Loop through each line in the CSV string (except the header row)
    for (let i = 1; i < lines.length; i++) {
      // Initialize an empty object to store the values for this line
      const obj: ImageData = {} as ImageData;
      // Split the current line into an array of values
      const currentLine = lines[i].split(",");

      // Loop through each header in the header row
      for (let j = 0; j < headers.length; j++) {
        // Get the current value for this header (trimmed of whitespace)
        const value = currentLine[j]?.trim();

        // If the header is "Caption", check if the value has been split over multiple columns
        if (headers[j] === "Caption") {
          // Check if Caption has been split
          if (
            value?.startsWith('"') &&
            value?.endsWith('"') &&
            !value?.includes(',"')
          ) {
            // If the Caption is not split, add it to the object as is
            obj[headers[j]] = value?.replace(/\\"/g, '"').replace(/^"|"$/g, "");
          } else {
            // If the Caption is split, merge the split values
            let mergedValue = "";
            let k = j;
            while (k < currentLine.length && !currentLine[k].endsWith('"')) {
              // Keep adding values until the closing quote is found
              mergedValue += currentLine[k];
              k++;
            }
            // Add the final value (which includes the closing quote)
            mergedValue += currentLine[k];
            // Add the merged Caption value to the object
            obj[headers[j]] = mergedValue
              .replace(/\\"/g, '"')
              .replace(/^"|"$/g, "");
            // Skip over the merged fields in the outer loop
            j = k;
          }
          // If the header is "Year", parse the value as an integer and add it to the object
        } else if (headers[j] === "Year") {
          obj[headers[j]] = parseInt(value);
          // For all other headers, add the value to the object as is
        } else {
          obj[headers[j]] = value;
        }
      }

      // Add the completed object to the result array
      result.push(obj);
    }

    // Return the array of completed objects
    return result;
  }
}
