import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import FeedPage from "./components/FeedPage/FeedPage";
import PictureDetail from "./components/PictureDetail/PictureDetail";

function App() {
  const [lightTheme, setLightTheme] = useState<boolean>(false);
  const [pictures, setPictures] = useState<any[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  const APOD_URL = "https://api.nasa.gov/planetary/apod";
  const API_KEY = "6A0tZQBiVWL7Tgahg0FxdeTB6DSUf6cMcy5QxMRy";

  // const {pictures, loading, fetchMore} = usePictures();

  const getPicturesRequest = useCallback(async () => {
    const url = `${APOD_URL}?api_key=${API_KEY}&count=5`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      setPictures((pictures) => [...pictures, ...responseJson]);
      setLoaded(true);
    } else {
      console.log("error");
    }
  }, []);

  useEffect(() => {
    getPicturesRequest();
  }, [getPicturesRequest]);

  console.log(pictures);

  return (
    <BrowserRouter>
      <div className={styles.Container}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage pictures={pictures} />} />
          <Route path="/feed" element={<FeedPage pictures={pictures} />} />
          <Route
            path="/feed/:id"
            element={
              <PictureDetail
                pictures={pictures}
                lightTheme={lightTheme}
                setLightTheme={setLightTheme}
                APOD_URL={APOD_URL}
                API_KEY={API_KEY}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
