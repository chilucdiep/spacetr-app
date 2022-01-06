import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

import Logo from "../../images/Logo.svg";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={styles.Logo}></img>
      </Link>
      <div className={styles.NavLinks}>
        <ul>
          <li>
            <a
              href="https://github.com/chilucdiep/Spacestagram"
              target="_blank"
            >
              Code
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/file/dkV2MEJPPmGWdl1vvfaPs4/Spacestagram?node-id=0%3A1"
              target="_blank"
            >
              Design
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
