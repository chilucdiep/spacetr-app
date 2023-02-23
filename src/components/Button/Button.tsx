import styles from "./Button.module.scss";

interface ButtonProps {
  fullWidth?: boolean;
  label: string;
  onClick?(e?: any): void;
}

export default function Button({
  fullWidth = false,
  label,
  onClick,
}: ButtonProps) {
  const classes = `${styles.Button} ${fullWidth ? styles.FullWidth : null}`;

  return (
    <div className={classes} onClick={onClick}>
      {label}
    </div>
  );
}
