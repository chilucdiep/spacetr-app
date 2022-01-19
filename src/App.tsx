import { useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import styles from "./App.module.scss";

import LandingPage from "./components/LandingPage/LandingPage";
import FeedPage from "./components/FeedPage/FeedPage";
import PictureDetailsPage from "./components/PictureDetailsPage/PictureDetailsPage";

function App() {
  const [lightTheme, setLightTheme] = useState<boolean>(false);

  const root = document.documentElement;
  root.style.setProperty(
    "--background-color",
    lightTheme ? "white" : "#050505"
  );
  root.style.setProperty("--text-color", lightTheme ? "black" : "white");

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
