# BS Calendar React

A comprehensive React hook and utility library for working with Bikram Sambat (Nepali calendar) dates, holidays, and calendar functionality.

## Features

- 🗓️ Convert between Gregorian and Bikram Sambat dates
- 🎉 Built-in Nepali holidays support
- 📅 Calendar view generation with previous/next month padding
- 🕐 Timezone-aware date handling (Asia/Kathmandu)
- ⚛️ React hook for easy integration
- 📱 TypeScript support with full type definitions

## Installation

```bash
npm install bs-calendar-react
```

## Quick Start

```typescript
import { useCalendar } from 'bs-calendar-react';

function MyCalendarComponent() {
  const { 
    today, 
    monthsWithHolidays, 
    currentBikYear, 
    currentBikMonth 
  } = useCalendar({});

  return (
    <div>
      <h2>Today: {today.date}</h2>
      <h3>Current Bikram Sambat: {currentBikYear}-{currentBikMonth}</h3>
      
      {monthsWithHolidays.map((day, index) => (
        <div key={index}>
          <span>{day.day}</span>
          {day.holiday && day.holiday.length > 0 && (
            <span> - {day.holiday.join(', ')}</span>
          )}
        </div>
      ))}
    </div>
  );
}
```

## API Reference

### `useCalendar(props)`

Main React hook for calendar functionality.

#### Parameters

```typescript
interface Props {
  year?: number;   // Bikram Sambat year
  month?: number;  // Bikram Sambat month (1-12)
}
```

#### Returns

```typescript
{
  today: IMonthDay;                           // Today's date information
  monthsWithHolidays: IMonthDayWithHoliday[]; // Calendar days with holidays
  currentBikDay: number;                      // Current Bikram Sambat day
  currentBikDate: IBikDate;                   // Current Bikram Sambat date object
  currentBikMonth: number;                    // Current Bikram Sambat month
  currentNoOfMonths: number;                  // Number of days in current month
  currentBikYear: number;                     // Current Bikram Sambat year
  getThisMonths: () => IMonthDay[];          // Function to get current month days
  getMonthDaysWithHolidays: () => IMonthDayWithHoliday[]; // Function to get days with holidays
}
```

### Utility Functions

#### `getCurrentDate()`
Get current date in Bikram Sambat format.

```typescript
const currentBSDate = getCurrentDate();
// Returns: { year: 2081, month: 3, day: 15 }
```

#### `daysInMonth(year, month)`
Get number of days in a specific Bikram Sambat month.

```typescript
const days = daysInMonth(2081, 3); // Returns number of days in Jestha 2081
```

#### `getNextMonth(date)` / `getPrevMonth(date)`
Navigate between months.

```typescript
const currentDate = { year: 2081, month: 3, day: 15 };
const nextMonth = getNextMonth(currentDate);
const prevMonth = getPrevMonth(currentDate);
```

#### `mapHolidays(date)`
Get calendar days with holiday information for a specific month.

```typescript
const daysWithHolidays = mapHolidays({ year: 2081, month: 3, day: 1 });
```

## Type Definitions

### `IBikDate`
```typescript
interface IBikDate {
  year: number;
  month: number;
  day: number;
}
```

### `IHoliday`
```typescript
interface IHoliday {
  bs_date: string;     // Bikram Sambat date (YYYY-MM-DD)
  holiday: string[];   // Array of holiday names
  date: string;        // Formatted date string
}
```

### `IMonthDay`
```typescript
interface IMonthDay {
  date: string;        // Formatted date (YYYY-MM-DD)
  month: number;       // Month number
  day: number;         // Day number
}
```

### `IMonthDayWithHoliday`
```typescript
interface IMonthDayWithHoliday extends IMonthDay {
  bs_date: string;     // Bikram Sambat date string
  holiday: string[];   // Array of holidays for this date
  date: string;        // Formatted date (YYYY-MM-DD)
}
```

## Usage Examples

### Display Current Month Calendar

```typescript
import { useCalendar } from 'bs-calendar-react';

function Calendar() {
  const { monthsWithHolidays, currentBikYear, currentBikMonth } = useCalendar({});

  return (
    <div className="calendar">
      <h2>{currentBikYear} - Month {currentBikMonth}</h2>
      <div className="calendar-grid">
        {monthsWithHolidays.map((day, index) => (
          <div 
            key={index} 
            className={`calendar-day ${day.holiday?.length ? 'holiday' : ''}`}
          >
            <span>{day.day}</span>
            {day.holiday?.map((holiday, idx) => (
              <small key={idx}>{holiday}</small>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Navigate to Specific Month

```typescript
import { useCalendar } from 'bs-calendar-react';

function CalendarWithNavigation() {
  const [selectedYear, setSelectedYear] = useState(2081);
  const [selectedMonth, setSelectedMonth] = useState(3);

  const { monthsWithHolidays } = useCalendar({
    year: selectedYear,
    month: selectedMonth
  });

  return (
    <div>
      <div className="navigation">
        <button onClick={() => setSelectedMonth(prev => prev > 1 ? prev - 1 : 12)}>
          Previous Month
        </button>
        <span>{selectedYear} - {selectedMonth}</span>
        <button onClick={() => setSelectedMonth(prev => prev < 12 ? prev + 1 : 1)}>
          Next Month
        </button>
      </div>
      
      <div className="calendar-grid">
        {monthsWithHolidays.map((day, index) => (
          <div key={index} className="calendar-day">
            {day.day}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Check Today's Holidays

```typescript
import { useCalendar } from 'bs-calendar-react';

function TodayHolidays() {
  const { today, monthsWithHolidays } = useCalendar({});

  const todayData = monthsWithHolidays.find(day => day.date === today.date);

  return (
    <div>
      <h3>Today's Date: {today.date}</h3>
      {todayData?.holiday?.length > 0 ? (
        <div>
          <h4>Today's Holidays:</h4>
          <ul>
            {todayData.holiday.map((holiday, index) => (
              <li key={index}>{holiday}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No holidays today</p>
      )}
    </div>
  );
}
```

## Notes

- All dates are handled in Asia/Kathmandu timezone
- The calendar generates a 42-day grid (6 weeks × 7 days) including padding from previous and next months
- Holiday data is loaded from a JSON constants file
- Bikram Sambat is the official calendar of Nepal

## Dependencies

This package depends on a Bikram Sambat converter utility and holiday constants. Make sure all peer dependencies are properly installed.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Add your license information here]