import { useEffect, useRef, useState } from "react";
import styles from "./Select.module.scss";
import { SelectOption } from "../../types/SelectOption";

type SelectPropsBase = {
  placeholder: string;
  options: SelectOption[];
};

interface SingleSelectProps extends SelectPropsBase {
  selectedOption?: SelectOption;
  onChange: (selectedOption?: SelectOption) => void;
}

export function Select({
  onChange,
  options,
  placeholder,
  selectedOption,
}: SingleSelectProps) {
  const [isOpen, setisOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const valueMarkup = (
    <span className={styles.Value}>
      {selectedOption ? selectedOption.label : placeholder}
    </span>
  );

  const clearButtonMarkup = (
    <button
      onClick={(e) => {
        handleClearValue(e);
      }}
    >
      &times;
    </button>
  );

  const optionsMarkup = options.map((option) => (
    <li
      key={option.value}
      className={`
        ${styles.Option}
        ${isOptionSelected(option) ? styles.Selected : ""}
      `}
      onClick={() => {
        selectOption(option);
      }}
    >
      {option.label}
    </li>
  ));

  return (
    <div
      className={styles.Container}
      onBlur={() => setisOpen(false)}
      onClick={() => setisOpen((prev) => !prev)}
      ref={containerRef}
      tabIndex={0}
    >
      {valueMarkup}
      {clearButtonMarkup}
      <span className={styles.Divider}></span>
      <span className={styles.Caret}></span>
      <ul
        className={`${styles.OptionsList} ${isOpen ? styles.ShowOptions : ""}`}
      >
        {optionsMarkup}
      </ul>
    </div>
  );

  function handleClearValue(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (option !== selectedOption) onChange(option);
  }

  function isOptionSelected(option: SelectOption) {
    return option.value === selectedOption?.value;
  }
}
