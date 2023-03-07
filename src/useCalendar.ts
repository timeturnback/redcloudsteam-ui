import { useState, useEffect } from 'react';

interface UseCalendarProps {
  date: Date;
  onSelectDate: (date: Date) => void;
}

interface CalendarData {
  month: number;
  year: number;
  days: Date[];
}

export const useCalendar = ({ date, onSelectDate }: UseCalendarProps) => {
  const [calendarData, setCalendarData] = useState<CalendarData>({
    month: date.getMonth(),
    year: date.getFullYear(),
    days: getDaysInMonth(date)
  });

  useEffect(() => {
    setCalendarData({
      month: date.getMonth(),
      year: date.getFullYear(),
      days: getDaysInMonth(date)
    });
  }, [date]);

  const handlePrevMonthClick = () => {
    const newDate = new Date(calendarData.year, calendarData.month - 1, date.getDate());
    setCalendarData({
      month: newDate.getMonth(),
      year: newDate.getFullYear(),
      days: getDaysInMonth(newDate)
    });
  };

  const handleNextMonthClick = () => {
    const newDate = new Date(calendarData.year, calendarData.month + 1, date.getDate());
    setCalendarData({
      month: newDate.getMonth(),
      year: newDate.getFullYear(),
      days: getDaysInMonth(newDate)
    });
  };

  const handleDateClick = (day: Date) => {
    onSelectDate(day);
  };

  return {
    month: calendarData.month,
    year: calendarData.year,
    days: calendarData.days,
    handlePrevMonthClick,
    handleNextMonthClick,
    handleDateClick
  };
};

const getDaysInMonth = (date: Date): Date[] => {
  const days: Date[] = [];
  const year = date.getFullYear();
  const month = date.getMonth();

  const numDaysInMonth = new Date(year, month + 1, 0).getDate();
  for (let i = 1; i <= numDaysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  if (firstDayOfMonth > 0) {
    const numDaysInPrevMonth = new Date(year, month, 0).getDate();
    for (let i = firstDayOfMonth; i > 0; i--) {
      const day = new Date(year, month - 1, numDaysInPrevMonth - i + 1);
      days.unshift(day);
    }
  }

  const lastDayOfMonth = new Date(year, month + 1, 0).getDay();
  if (lastDayOfMonth < 6) {
    const numDaysInNextMonth = 6 - lastDayOfMonth;
    for (let i = 1; i <= numDaysInNextMonth; i++) {
      const day = new Date(year, month + 1, i);
      days.push(day);
    }
  }

  return days;
};
