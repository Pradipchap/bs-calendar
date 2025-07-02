import bikramSambat from "./converter";
import holidays from "../holidays.json";
interface IBikDate {
  year: number;
  month: number;
  day: number;
}

interface Props {
  year?: number;
  month?: number;
}

interface IHoliday {
  bs_date: string;
  holiday: string[];
  date: string; //yyyy-mm-dd
}

interface IMonthDay {
  date: string; //yyyy-mm-dd
  month: number;
  day: number;
}

interface IMonthDayWithHoliday extends IMonthDay {
  bs_date: string;
  holiday: string[];
  date: string; //yyyy-mm-dd
}

export const useCalendar = ({ year, month }: Props) => {
  const currentGregDate = new Date();
  const currentTemoBikDate: IBikDate = bikramSambat.toBik(currentGregDate);
  let currentBikDate: IBikDate;
  if (year) {
    if (!month) currentBikDate = { year, month: 1, day: 1 };
    else currentBikDate = { year, month, day: 1 };
  } else {
    if (month) {
      currentBikDate = { ...currentTemoBikDate, month, day: 1 };
    } else currentBikDate = currentTemoBikDate;
  }

  const currentBikDay = extractDayFromBikDate(currentBikDate);

  const currentBikMonth = extractMonthFromBikDate(currentBikDate);
  const currentBikYear = extractYearFromBikDate(currentBikDate);
  const currentNoOfMonths = daysInMonth(currentBikYear, currentBikMonth);

  const getThisMonths = () => {
    return currentMonthDays(currentBikDate);
  };
  const getMonthDaysWithHolidays = (): IMonthDayWithHoliday[] => {
    return mapHolidays(currentBikDate);
  };

  const monthsWithHolidays: IMonthDayWithHoliday[] = getMonthDaysWithHolidays();
  return {
    monthsWithHolidays,
    getMonthDaysWithHolidays,
    currentBikDay,
    currentBikDate,
    currentBikMonth,
    currentNoOfMonths,
    currentBikYear,
    getThisMonths
  };
};

export const extractDayFromBikDate = (date: IBikDate) => {
  return date["day"];
};

export const extractMonthFromBikDate = (date: IBikDate) => {
  return date["month"];
};
export const extractYearFromBikDate = (date: IBikDate) => {
  return date["year"];
};

export const daysInMonth = (year: number, month: number) => {
  return bikramSambat.daysInMonth(year, month);
};

export const currentMonthDays = (date: IBikDate): IMonthDay[] => {
  const gregDate: IBikDate = bikramSambat.toGreg(date.year, date.month, 1);

  const currentMonthDate = new Date(gregDate.year, gregDate.month - 1, gregDate.day);
  const todayWeekDay = currentMonthDate.getDay() % 7;
  const currentMonthDays = daysInMonth(date.year, date.month);
  const nextMonth = getNextMonth(date);
  const prevMonth = getPrevMonth(date);
  const totalDays = todayWeekDay + currentMonthDays;
  const prevDays: IMonthDay[] = new Array(todayWeekDay).fill(0).map((_, index) => {
    return {
      date: `${date.year}-${prevMonth.month}-${prevMonth.day - (todayWeekDay - 1 - index)}`,
      month: prevMonth.month,
      day: prevMonth.day - (todayWeekDay - 1 - index)
    };
  });
  const thisMonthDays: IMonthDay[] = new Array(currentMonthDays).fill(0).map((_, index) => {
    return {
      date: `${date.year}-${date.month}-${index + 1}`,
      month: date.month,
      day: index + 1
    };
  });
  const nextMonthDays: IMonthDay[] = new Array(42 - totalDays).fill(0).map((_, index) => {
    return { date: `${date.year}-${nextMonth.month}-${index + 1}`, month: nextMonth.month, day: index + 1 };
  });

  const finalDays = [...prevDays, ...thisMonthDays, ...nextMonthDays];
  return finalDays;
};

export const getNextMonth = (date: IBikDate): IBikDate => {
  const gregDate: IBikDate = bikramSambat.toGreg(date.year, date.month, date.day);

  console.log("first", date, gregDate);
  const nextMonthDate = new Date(
    gregDate.month === 11 ? gregDate.year + 1 : gregDate.year,
    gregDate.month === 11 ? 0 : gregDate.month + 1
  );
  console.log("second", nextMonthDate);
  const nextMonthBikDate = {
    year: date.month === 12 ? date.year + 1 : date.year,
    month: date.month === 12 ? 1 : date.month + 1,
    day: date.day
  };
  console.log("third", nextMonthBikDate);

  const totalDays = bikramSambat.daysInMonth(nextMonthBikDate.year, nextMonthBikDate.month);

  console.log("goru", bikramSambat.toBik(nextMonthDate));

  const finalDate = { ...bikramSambat.toBik(nextMonthDate), day: totalDays };
  console.log("ifna", finalDate);
  return finalDate;
};

export const getPrevMonth = (date: IBikDate): IBikDate => {
  const gregDate: IBikDate = bikramSambat.toGreg(date.year, date.month, date.day);

  const nextMonthDate = new Date(
    gregDate.month === 0 ? gregDate.year - 1 : gregDate.year,
    gregDate.month === 0 ? 11 : gregDate.month - 1
  );
  const nextMonthBikDate = {
    year: date.month === 1 ? date.year - 1 : date.year,
    month: date.month === 1 ? 12 : date.month - 1,
    day: date.day
  };

  const totalDays = bikramSambat.daysInMonth(nextMonthBikDate.year, nextMonthBikDate.month);
  const finalDate = { ...bikramSambat.toBik(nextMonthDate), day: totalDays };
  return finalDate;
};

export const mapHolidays = (date: IBikDate) => {
  const days = currentMonthDays(date);
  const finalDays = days.map(item => {
    const holidayItem = holidays[item.date];
    if (holidayItem) {
      return { ...item, ...holidayItem[item.date] };
    }
    return item;
  });
  return finalDays;
};
