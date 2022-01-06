import styles from "./LandingPage.module.scss";

const LandingPage = ({ pictures }: any) => {
  return (
    <div className={styles.LandingPage}>
      <h1>
        Discover our <span>universe</span>
      </h1>
      <div>
        {pictures.map((picture: any) => (
          <img src={picture.url} className={styles.Picture}></img>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
