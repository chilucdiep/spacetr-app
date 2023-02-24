import globals from "../../../App.module.scss";
import styles from "./HubbleSelection.module.scss";
import moment from "moment";
import { useState } from "react";
import { SelectOption } from "../../../types/Interfaces";
import { Select } from "../../Select/Select";
import Button from "../../Button/Button";
import { DaySelect } from "./DaySelect";
import { useNavigate } from "react-router-dom";

export default function HubbleSelection() {
  const navigate = useNavigate();

  const monthsOptions = moment
    .months()
    .map((month, idx) => ({ label: month, value: idx + 1 }));

  const [selectedMonth, setSelectedMonth] = useState<
    SelectOption | undefined
  >();
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
    <DaySelect
      selectedMonth={selectedMonth}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
    />
  );

  return (
    <section className={styles.HubbleContainer}>
      <h3 className={globals.SectionTitle}>
        What Did Hubble See on Your Birthday?
      </h3>
      <div className={styles.SelectContainer}>
        {monthSelectComponentMarkup}
        {daySelectComponentMarkup}
      </div>
      <Button label="Submit" fullWidth onClick={navigateToHubblePicturePage} />
    </section>
  );

  function navigateToHubblePicturePage() {
    if (selectedMonth && selectedDay) {
      navigate(`/hubble/${selectedMonth.label}-${selectedMonth.value}`);
    }
  }
}