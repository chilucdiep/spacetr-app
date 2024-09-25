import moment from "moment";
import { useEffect, useState } from "react";
import { Select } from "../Select/Select";
import { SelectOption } from "../../types/SelectOption";

interface DaySelect {
  selectedMonth: SelectOption | undefined;
  selectedDay: SelectOption | undefined;
  setSelectedDay: (option: SelectOption | undefined) => void;
}

export function DaySelect({
  selectedMonth,
  selectedDay,
  setSelectedDay,
}: DaySelect) {
  const [daysOptions, setDaysOptions] = useState<SelectOption[]>([]);

  useEffect(() => {
    if (!selectedMonth) {
      setDaysOptions(generateDayOptions(31));
      return;
    }

    const numDays = getDaysInMonth(selectedMonth.value);
    setDaysOptions(generateDayOptions(numDays));

    if (selectedDay && Number(selectedDay.value) > numDays) {
      setSelectedDay(undefined);
    }
  }, [selectedDay, selectedMonth, setSelectedDay]);

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
