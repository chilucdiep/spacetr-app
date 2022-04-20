import { Link } from "react-router-dom";

import LogoDark from "../../images/LogoDark.svg";
import LogoLight from "../../images/LogoLight.svg";

import styles from "./Navbar.module.scss";
interface NavbarProps {
  lightTheme: boolean;
}

export default function Navbar({ lightTheme }: NavbarProps) {
  const logoMarkup = (
    <img
      src={lightTheme ? LogoLight : LogoDark}
      alt="Logo"
      className={styles.Logo}
    ></img>
  );

  return (
    <nav className={styles.Navbar}>
      <Link to="/">{logoMarkup}</Link>
      <div className={styles.NavLinks}>
        <ul>
          <li>
            <a
              href="https://github.com/chilucdiep/Spacestagram"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/file/dkV2MEJPPmGWdl1vvfaPs4/Spacestagram?node-id=0%3A1"
              target="_blank"
              rel="noreferrer"
            >
              Design
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
