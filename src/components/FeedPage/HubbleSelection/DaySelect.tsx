import moment from "moment";
import { useEffect, useState } from "react";
import { SelectOption } from "../../../types/Interfaces";
import { Select } from "../../Select/Select";

export function DaySelect({
  selectedMonth,
}: {
  selectedMonth: SelectOption | undefined;
}) {
  const [daysOptions, setDaysOptions] = useState<SelectOption[]>([]);
  const [selectedDay, setSelectedDay] = useState<SelectOption | undefined>();

  useEffect(() => {
    if (!selectedMonth) {
      setDaysOptions(generateDayOptions(31));
      setSelectedDay(undefined);
      return;
    }

    const numDays = getDaysInMonth(selectedMonth.value);
    setDaysOptions(generateDayOptions(numDays));

    if (selectedDay && selectedDay.value > numDays) {
      setSelectedDay(undefined);
    }
  }, [selectedDay, selectedMonth]);

  return (
    <Select
      onChange={(option: SelectOption | undefined) => setSelectedDay(option)}
      options={daysOptions}
      placeholder="Select Day"
      selectedOption={selectedDay}
    />
  );

  function getDaysInMonth(month: number | string): number {
    return moment(`${month}`, "M").daysInMonth();
  }

  function generateDayOptions(numDays: number): SelectOption[] {
    return Array.from({ length: numDays }, (_, idx) => ({
      label: (idx + 1).toString(),
      value: idx + 1,
    }));
  }
}
