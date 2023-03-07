import React, { useMemo } from 'react';
import { useCalendar } from '../useCalendar';
import styled from '@emotion/styled';

type CalendarProps = {
  date: Date;
  onSelectDate: (date: Date) => void;
};

const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
`;

const Th = styled.th`
  padding: 0.5rem;
  text-align: center;
`;

const Td = styled.td`
  padding: 0.5rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

const SelectedDay = styled(Td)`
  background-color: #0077cc;
  color: white;
  font-weight: bold;
`;

const DisabledDay = styled(Td)`
  color: #ccc;
  cursor: default;
`;

const PrevMonthButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  font-weight: bold;
`;

const NextMonthButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  font-weight: bold;
`;

const MonthAndYear = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

export const Calendar: React.FC<CalendarProps> = ({ date, onSelectDate }) => {
  const { days, month, year, handleDateClick, handlePrevMonthClick, handleNextMonthClick } =
    useCalendar({
      date,
      onSelectDate
    });

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const weekArr = useMemo(() => getWeeksArray(days), [days]);

  return (
    <>
      <MonthAndYear>
        <PrevMonthButton onClick={handlePrevMonthClick}>{'<'}</PrevMonthButton>
        {month} {year}
        <NextMonthButton onClick={handleNextMonthClick}>{'>'}</NextMonthButton>
      </MonthAndYear>
      <Table>
        <thead>
          <tr>
            {weekDays.map(weekDay => (
              <Th key={weekDay}>{weekDay}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weekArr.map((week, idx) => (
            <tr key={`week${idx}`}>
              {week.map(day => (
                <>
                  {day.getMonth() === month ? (
                    day.getMonth() === date.getMonth() && day.getDate() === date.getDate() ? (
                      <SelectedDay onClick={() => handleDateClick(day)}>
                        {day.getDate()}
                      </SelectedDay>
                    ) : (
                      <Td onClick={() => handleDateClick(day)}>{day.getDate()}</Td>
                    )
                  ) : (
                    <DisabledDay>{day.getDate()}</DisabledDay>
                  )}
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

function getWeeksArray(days: Date[]): Date[][] {
  const weeks: Date[][] = [];
  const daysCopy = [...days];
  while (daysCopy.length > 0) {
    weeks.push(daysCopy.splice(0, 7));
  }
  return weeks;
}
