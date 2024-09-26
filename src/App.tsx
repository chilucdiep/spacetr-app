import { Routes, Route, BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import HubbleDetailsPage from "./features/hubble/pages/HubbleDetailsPage";
import LandingPage from "./features/home/pages/LandingPage";
import FeedPage from "./features/feed/pages/FeedPage";
import PictureDetailsPage from "./features/picture-details/pages/PictureDetailsPage";
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className={styles.Container}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/feed/:id" element={<PictureDetailsPage />} />
            <Route path="/hubble/:id" element={<HubbleDetailsPage />} />
            <Route path="*" element={<div>404 Page Not Found</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
