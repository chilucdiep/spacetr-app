import styles from "./Button.module.scss";

interface ButtonProps {
  label: string;
  onClick?(e?: any): void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <div className={styles.Button} onClick={onClick}>
      {label}
    </div>
  );
}
