import { useEffect, useState } from "react";

export default function useAstrologicalSign(date: string) {
  const [signName, setSignName] = useState<string | undefined>(undefined);
  const [month, day] = date.split(" ");
  const monthIndex = new Date(`${month} 1`).getMonth();
  const dayInt = parseInt(day, 10);

  const signArray = [
    { name: "Capricorn", startMonth: 0, startDay: 1, endMonth: 0, endDay: 19 },
    { name: "Aquarius", startMonth: 0, startDay: 20, endMonth: 1, endDay: 18 },
    { name: "Pisces", startMonth: 1, startDay: 19, endMonth: 2, endDay: 20 },
    { name: "Aries", startMonth: 2, startDay: 21, endMonth: 3, endDay: 19 },
    { name: "Taurus", startMonth: 3, startDay: 20, endMonth: 4, endDay: 20 },
    { name: "Gemini", startMonth: 4, startDay: 21, endMonth: 5, endDay: 20 },
    { name: "Cancer", startMonth: 5, startDay: 21, endMonth: 6, endDay: 22 },
    { name: "Leo", startMonth: 6, startDay: 23, endMonth: 7, endDay: 22 },
    { name: "Virgo", startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
    { name: "Libra", startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
    { name: "Scorpio", startMonth: 9, startDay: 23, endMonth: 10, endDay: 21 },
    {
      name: "Sagittarius",
      startMonth: 10,
      startDay: 22,
      endMonth: 11,
      endDay: 21,
    },
    {
      name: "Capricorn",
      startMonth: 11,
      startDay: 22,
      endMonth: 11,
      endDay: 31,
    },
  ];

  const sign = signArray.find((sign) => {
    const sameMonth =
      monthIndex >= sign.startMonth && monthIndex <= sign.endMonth;
    const sameDay =
      (monthIndex === sign.startMonth && dayInt >= sign.startDay) ||
      (monthIndex === sign.endMonth && dayInt <= sign.endDay);
    return sameMonth && sameDay;
  });

  useEffect(() => {
    setSignName(sign?.name);
  }, [sign]);

  return { signName };
}
