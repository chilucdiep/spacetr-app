import { useEffect, useRef, useState } from "react";
import styles from "./Select.module.scss";
import { SelectOption } from "../../types/Interfaces";
import Button from "../Button/Button";

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
  const [highlightedIndex, sethighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      sethighlightedIndex(0);
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

  const optionsMarkup = options.map((option, index) => (
    <li
      key={option.value}
      className={`
        ${styles.Option}
        ${isOptionSelected(option) ? styles.Selected : ""}
        ${index === highlightedIndex ? styles.Highlighted : ""}
      `}
      onClick={() => {
        selectOption(option);
      }}
      onMouseEnter={() => sethighlightedIndex(index)}
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
    return option === selectedOption;
  }
}
