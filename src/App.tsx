import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import usePictures from "./hooks/usePictures";
import styles from "./App.module.scss";

import LandingPage from "./components/LandingPage/LandingPage";
import FeedPage from "./components/FeedPage/FeedPage";
import PictureDetailsPage from "./components/PictureDetailsPage/PictureDetailsPage";

function App() {
  const [lightTheme, setLightTheme] = useState<boolean>(false);
  // const [pictures, setPictures] = useState<any[]>([]);
  // const [loaded, setLoaded] = useState<boolean>(false);

  const root = document.documentElement;
  root.style.setProperty(
    "--background-color",
    lightTheme ? "white" : "#050505"
  );
  root.style.setProperty("--text-color", lightTheme ? "black" : "white");

  const APOD_URL = "https://api.nasa.gov/planetary/apod";
  const API_KEY = "9guRyYAY594OtPx1YP6IlfWME4lFznqFN2hEQWMA";

  const { pictures, loading, error, fetchMore } = usePictures(
    `${APOD_URL}?api_key=${API_KEY}&count=9`
  );

  // const getPicturesRequest = useCallback(async () => {
  //   const url = `${APOD_URL}?api_key=${API_KEY}&count=9`;
  //   const response = await fetch(url);
  //   const responseJson = await response.json();

  //   if (responseJson) {
  //     setPictures((pictures) => [...pictures, ...responseJson]);
  //     setLoaded(true);
  //   } else {
  //     console.log("error");
  //   }
  // }, []);

  // useEffect(() => {
  //   getPicturesRequest();
  // }, [getPicturesRequest]);

  console.log(pictures);

  return (
    <HashRouter>
      <div className={styles.Container}>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                lightTheme={lightTheme}
                setLightTheme={setLightTheme}
              />
            }
          />
          <Route
            path="/feed"
            element={
              <FeedPage lightTheme={lightTheme} setLightTheme={setLightTheme} />
            }
          />
          <Route
            path="/feed/:id"
            element={
              <PictureDetailsPage
                lightTheme={lightTheme}
                setLightTheme={setLightTheme}
                APOD_URL={APOD_URL}
                API_KEY={API_KEY}
              />
            }
          />
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
