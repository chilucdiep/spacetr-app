import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import HubbleDetailsPage from "./features/hubble/pages/HubbleDetailsPage";
import LandingPage from "./features/home/pages/LandingPage";
import FeedPage from "./features/feed/pages/FeedPage";
import PictureDetailsPage from "./features/picture-details/pages/PictureDetailsPage";

export default function App() {
  const [lightTheme, setLightTheme] = useState<boolean>(false);

  const root = document.documentElement;
  root.style.setProperty(
    "--background-color",
    lightTheme ? "white" : "#050505"
  );
  root.style.setProperty("--text-color", lightTheme ? "black" : "white");

  const landingPage = (
    <LandingPage lightTheme={lightTheme} setLightTheme={setLightTheme} />
  );
  const feedPage = (
    <FeedPage lightTheme={lightTheme} setLightTheme={setLightTheme} />
  );
  const pictureDetailsPage = (
    <PictureDetailsPage lightTheme={lightTheme} setLightTheme={setLightTheme} />
  );
  const hubbleDetailsPage = (
    <HubbleDetailsPage lightTheme={lightTheme} setLightTheme={setLightTheme} />
  );

  return (
    <BrowserRouter>
      <div className={styles.Container}>
        <Routes>
          <Route path="/" element={landingPage} />
          <Route path="/feed" element={feedPage} />
          <Route path="/feed/:id" element={pictureDetailsPage} />
          <Route path="/hubble/:id" element={hubbleDetailsPage} />
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
