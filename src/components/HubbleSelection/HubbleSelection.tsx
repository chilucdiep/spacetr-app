import globals from "../../App.module.scss";
import styles from "./HubbleSelection.module.scss";
import moment from "moment";
import { useEffect, useState } from "react";

import { DaySelect } from "./DaySelect";
import { useNavigate, useParams } from "react-router-dom";
import { Select } from "../Select/Select";
import Button from "../Button/Button";
import { SelectOption } from "../../types/SelectOption";

const monthsOptions = moment
  .months()
  .map((month, idx) => ({ label: month, value: idx + 1 }));

export default function HubbleSelection() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      const [monthFromUrl, dayFromUrl]: any = id.split("-");
      setSelectedDay({ label: dayFromUrl, value: dayFromUrl });

      const monthFromUrlOption = monthsOptions.filter(
        (month) => month.label === monthFromUrl
      );
      setSelectedMonth(monthFromUrlOption[0]);
    }
  }, [id]);

  const [selectedMonth, setSelectedMonth] = useState<
    SelectOption | undefined
  >();
  const [selectedDay, setSelectedDay] = useState<SelectOption | undefined>();
  const [hasError, setHasError] = useState<boolean>(false);

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

  const errorMarkup = hasError ? (
    <p className={globals.Error}>Both fields need to be filled</p>
  ) : null;

  return (
    <section className={styles.HubbleContainer}>
      <h3 className={globals.SectionTitle}>
        What Did Hubble See on Your Birthday?
      </h3>
      <div className={styles.SelectContainer}>
        {monthSelectComponentMarkup}
        {daySelectComponentMarkup}
      </div>
      {errorMarkup}
      <Button label="Submit" fullWidth onClick={navigateToHubblePicturePage} />
    </section>
  );

  function navigateToHubblePicturePage() {
    if (!(selectedMonth && selectedDay)) {
      setHasError(true);
      return;
    }

    if (selectedMonth && selectedDay) {
      setHasError(false);
      navigate(`/hubble/${selectedMonth.label}-${selectedDay.value}`);
    }
  }
}
