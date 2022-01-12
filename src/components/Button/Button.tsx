import styles from "./Button.module.scss";

interface ButtonProps {
    label: string;
    // icon?: any;
    onClick?(): void;
  }
  
  export default function Button({ label, onClick }: ButtonProps) {
    return (
      <a className={styles.Button} onClick={onClick}>
        {/* <span>{icon}</span> */}
        {label}
      </a>
    );
  }