import styles from "./Button.module.scss";

interface Props {
    label: string;
    // icon?: any;
    onClick?(): void;
  }
  
  export default function Button({ label, onClick }: Props) {
    return (
      <a className={styles.Button} onClick={onClick}>
        {/* <span>{icon}</span> */}
        {label}
      </a>
    );
  }