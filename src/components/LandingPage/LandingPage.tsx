import styles from "./LandingPage.module.scss";

const LandingPage = ({ pictures }: any) => {
  return (
    <div className={styles.LandingPage}>
      <div className={styles.Header}>
        <h1>
          Discover our <span>universe</span>
        </h1>
        <h2>
          with <strong>NASA's</strong> beautiful imagery
        </h2>
        <button>Explore</button>
      </div>
      <div className={styles.Bottom}>
        <div className={styles.Overlay}></div>
        <div className={styles.Images}>
          {pictures.map((picture: any) => (
            <img src={picture.url}></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
