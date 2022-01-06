import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './App.module.scss'

import Navbar from "./components/Navbar/Navbar"
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className={styles.Container}>
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
