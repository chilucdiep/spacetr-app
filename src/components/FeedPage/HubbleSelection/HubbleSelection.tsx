// import useHubblePicture from "../../../hooks/useHubblePicture";

import globals from "../../../App.module.scss";
import styles from "./HubbleSelection.module.scss";
import moment from "moment";
import { useState } from "react";
import { SelectOption } from "../../../types/Interfaces";
import { Select } from "../../Select/Select";

export default function HubbleSelection() {
  // const { picture } = useHubblePicture("January 1 2019");
  //   console.log(picture);

  // const testMarkup = picture ? (
  //   <div>
  //     <p>{picture.Name}</p>
  //     <img
  //       src={`https://imagine.gsfc.nasa.gov/hst_bday/images/${picture.Image}`}
  //       alt="Hubble pic"
  //     />
  //   </div>
  // ) : null;

  const monthsOptions = moment
    .months()
    .map((month, idx) => ({ label: month, value: idx + 1 }));

  const [selectedMonth, setSelectedMonth] = useState<
    SelectOption | undefined
  >();

  const daysOptions = getDaysinMonths();
  const [selectedDay, setSelectedDay] = useState<SelectOption | undefined>();

  const monthSelectComponentMarkup = (
    <Select
      onChange={(option: SelectOption | undefined) => setSelectedMonth(option)}
      options={monthsOptions}
      placeholder="Select Month"
      selectedOption={selectedMonth}
    />
  );

  const daySelectComponentMarkup = (
    <Select
      onChange={(option: SelectOption | undefined) => setSelectedDay(option)}
      options={daysOptions}
      placeholder="Select Day"
      selectedOption={selectedDay}
    />
  );

  return (
    <section>
      <h3 className={globals.SectionTitle}>
        What Did Hubble See on Your Birthday?
      </h3>
      <div className={styles.SelectContainer}>
        {monthSelectComponentMarkup}
        {daySelectComponentMarkup}
      </div>
    </section>
  );

  function getDaysinMonths() {
    if (selectedMonth) {
      const numDays = moment(`${selectedMonth.value}`, "M").daysInMonth();
      return Array.from({ length: numDays }, (_, idx) => ({
        label: (idx + 1).toString(),
        value: idx + 1,
      }));
    }
    return [];
  }
}
