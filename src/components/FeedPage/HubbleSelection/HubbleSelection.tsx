// import useHubblePicture from "../../../hooks/useHubblePicture";

import globals from "../../../App.module.scss";
import styles from "./HubbleSelection.module.scss";
import moment from "moment";
import { useState } from "react";
import { SelectOption } from "../../../types/Interfaces";
import { Select } from "../../Select/Select";
import Button from "../../Button/Button";
import { DaySelect } from "./DaySelect";

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

  const monthSelectComponentMarkup = (
    <Select
      onChange={(option: SelectOption | undefined) => setSelectedMonth(option)}
      options={monthsOptions}
      placeholder="Select Month"
      selectedOption={selectedMonth}
    />
  );

  const daySelectComponentMarkup = <DaySelect selectedMonth={selectedMonth} />;

  return (
    <section className={styles.HubbleContainer}>
      <h3 className={globals.SectionTitle}>
        What Did Hubble See on Your Birthday?
      </h3>
      <div className={styles.SelectContainer}>
        {monthSelectComponentMarkup}
        {daySelectComponentMarkup}
      </div>
      <Button label="Submit" fullWidth />
    </section>
  );
}
