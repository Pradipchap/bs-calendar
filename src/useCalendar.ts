import bikramSambat from "./converter";

//change this to latest year
export const HolidaysFromJSON = {
  "2082-01-01": {
    bs_date: "1 Baishakh 2082",
    holiday: ["Nepali New Year", "Mesha Sankranti"],
    date: "2082-01-01"
  },
  "2082-01-05": {
    bs_date: "5 Baishakh 2082",
    holiday: "Ram Navami",
    date: "2082-01-05"
  },
  "2082-01-18": {
    bs_date: "18 Baishakh 2082",
    holiday: "International Workers’ Day",
    date: "2082-01-18"
  },
  "2082-01-24": {
    bs_date: "24 Baishakh 2082",
    holiday: "Kirant Samaj Sudhar Diwas / Provincial Language Day",
    date: "2082-01-24"
  },
  "2082-01-29": {
    bs_date: "29 Baishakh 2082",
    holiday: ["Buddha Jayanti", "Ubhauli Parva"],
    date: "2082-01-29"
  },
  "2082-02-15": {
    bs_date: "15 Jestha 2082",
    holiday: ["Republic Day", "National Paddy Day / Dahi Chiura Khane Din"],
    date: "2082-02-15"
  },
  "2082-02-21": {
    bs_date: "21 Jestha 2082",
    holiday: "National Day for Elimination of Discrimination",
    date: "2082-02-21"
  },
  "2082-02-24": {
    bs_date: "24 Jestha 2082",
    holiday: "Nirjala Ekadashi",
    date: "2082-02-24"
  },
  "2082-02-30": {
    bs_date: "30 Jestha 2082",
    holiday: "Siruwa Pawani Parva (Jhapa/Morang/etc)",
    date: "2082-02-30"
  },
  "2082-03-29": {
    bs_date: "29 Asadh 2082",
    holiday: "Matatirtha Aunsi (Mother's Day)",
    date: "2082-03-29"
  },
  "2082-04-24": {
    bs_date: "24 Shrawan 2082",
    holiday: ["Janai Purnima", "Raksha Bandhan"],
    date: "2082-04-24"
  },
  "2082-04-25": {
    bs_date: "25 Shrawan 2082",
    holiday: "Gaijatra (Kathmandu Valley only)",
    date: "2082-04-25"
  },
  "2082-04-31": {
    bs_date: "31 Shrawan 2082",
    holiday: "Krishna Janmashtami",
    date: "2082-04-31"
  },
  "2082-05-07": {
    bs_date: "7 Bhadra 2082",
    holiday: "Kushe Aunsi (Father’s Day)",
    date: "2082-05-07"
  },
  "2082-05-10": {
    bs_date: "10 Bhadra 2082",
    holiday: "Haritalika Teej (women’s holiday)",
    date: "2082-05-10"
  },
  "2082-05-15": {
    bs_date: "15 Bhadra 2082",
    holiday: "Gaura Parva",
    date: "2082-05-15"
  },
  "2082-05-17": {
    bs_date: "17 Bhadra 2082",
    holiday: "Rishi Panchami",
    date: "2082-05-17"
  },
  "2082-05-21": {
    bs_date: "21 Bhadra 2082",
    holiday: "Indra Jatra (Kathmandu Valley only)",
    date: "2082-05-21"
  },
  "2082-05-22": {
    bs_date: "22 Bhadra 2082",
    holiday: "Civil Service Day",
    date: "2082-05-22"
  },
  "2082-05-30": {
    bs_date: "30 Bhadra 2082",
    holiday: "Jitiya Parva (women only)",
    date: "2082-05-30"
  },
  "2082-06-02": {
    bs_date: "2 Ashwin 2082",
    holiday: "National Education Day",
    date: "2082-06-02"
  },
  "2082-06-03": {
    bs_date: "3 Ashwin 2082",
    holiday: "Constitution Day",
    date: "2082-06-03"
  },
  "2082-06-06": {
    bs_date: "6 Ashwin 2082",
    holiday: "Ghatasthapana",
    date: "2082-06-06"
  },
  "2082-06-13": {
    bs_date: "13 Ashwin 2082",
    holiday: "Fulpati",
    date: "2082-06-13"
  },
  "2082-06-14": {
    bs_date: "14 Ashwin 2082",
    holiday: "Maha Ashtami",
    date: "2082-06-14"
  },
  "2082-06-15": {
    bs_date: "15 Ashwin 2082",
    holiday: "Maha Navami",
    date: "2082-06-15"
  },
  "2082-06-16": {
    bs_date: "16 Ashwin 2082",
    holiday: "Bijaya Dashami",
    date: "2082-06-16"
  },
  "2082-07-02": {
    bs_date: "2 Kartik 2082",
    holiday: "Kaag Tihar (start of Tihar)",
    date: "2082-07-02"
  },
  "2082-07-03": {
    bs_date: "3 Kartik 2082",
    holiday: "Laxmi Puja / Narak Chaturdashi/ kukur tihar",
    date: "2082-07-03"
  },
  "2082-07-04": {
    bs_date: "4 Kartik 2082",
    holiday: "Tihar Bida",
    date: "2082-07-04"
  },
  "2082-07-05": {
    bs_date: "5 Kartik 2082",
    holiday: "Gai Tihar & Govardhan Puja",
    date: "2082-07-05"
  },
  "2082-07-06": {
    bs_date: "6 Kartik 2082",
    holiday: "Bhai tika",
    date: "2082-07-06"
  },
  "2082-07-07": {
    bs_date: "7 Kartik 2082",
    holiday: "Tihar bida",
    date: "2082-07-07"
  },
  "2082-07-10": {
    bs_date: "10 Kartik 2082",
    holiday: "Chhath Parva",
    date: "2082-07-10"
  },
  "2082-08-18": {
    bs_date: "18 Mangsir 2082",
    holiday: "Udhauli Parva / Yomari Punhi",
    date: "2082-08-18"
  },
  "2082-09-10": {
    bs_date: "10 Poush 2082",
    holiday: "Christmas Day",
    date: "2082-09-10"
  },
  "2082-09-15": {
    bs_date: "15 Poush 2082",
    holiday: ["Tamu Lhosar", "Yomari Punhi"],
    date: "2082-09-15"
  },
  "2082-09-27": {
    bs_date: "27 Poush 2082",
    holiday: "Prithvi Jayanti",
    date: "2082-09-27"
  },
  "2082-10-01": {
    bs_date: "1 Magh 2082",
    holiday: "Maghi Parva",
    date: "2082-10-01"
  },
  "2082-10-05": {
    bs_date: "5 Magh 2082",
    holiday: "Sonam Lhosar",
    date: "2082-10-05"
  },
  "2082-10-09": {
    bs_date: "9 Magh 2082",
    holiday: "Basant Panchami (educational only)",
    date: "2082-10-09"
  },
  "2082-10-16": {
    bs_date: "16 Magh 2082",
    holiday: "Martyrs’ Day",
    date: "2082-10-16"
  },
  "2082-11-03": {
    bs_date: "3 Falgun 2082",
    holiday: "Maha Shivaratri",
    date: "2082-11-03"
  },
  "2082-11-06": {
    bs_date: "6 Falgun 2082",
    holiday: "Gyalpo Lhosar",
    date: "2082-11-06"
  },
  "2082-11-07": {
    bs_date: "7 Falgun 2082",
    holiday: "Democracy Day",
    date: "2082-11-07"
  },
  "2082-11-18": {
    bs_date: "18 Falgun 2082",
    holiday: "Fagu Purnima (in hilly districts)",
    date: "2082-11-18"
  },
  "2082-11-19": {
    bs_date: "19 Falgun 2082",
    holiday: "Fagu Purnima (in Terai districts)",
    date: "2082-11-19"
  },
  "2082-11-24": {
    bs_date: "24 Falgun 2082",
    holiday: "International Women’s Day",
    date: "2082-11-24"
  },
  "2082-12-04": {
    bs_date: "4 Chaitra 2082",
    holiday: "Ghode Jatra (Kathmandu Valley only)",
    date: "2082-12-04"
  },
  "2082-12-13": {
    bs_date: "13 Chaitra 2082",
    holiday: "Ram navami",
    date: "2082-12-13"
  }
};

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
    const holidayItem = HolidaysFromJSON[item.date];
    if (holidayItem) {
      return { ...item, ...holidayItem };
    }
    return item;
  });
  return finalDays;
};
