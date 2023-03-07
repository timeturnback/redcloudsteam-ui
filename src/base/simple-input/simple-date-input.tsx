import React, { useState } from 'react';
import { Calendar } from '../calendar';
import { SimpleInputWrapper } from './simple-input-wrapper';

interface SimpleDateInputProps {
  value: Date;
  onChange: (newValue: Date) => void;
}

export const SimpleDateInput: React.FC<SimpleDateInputProps> = ({ value, onChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleCalendarDateSelect = (date: Date) => {
    onChange(date);
    setShowCalendar(false);
  };

  return (
    <SimpleInputWrapper>
      <div>{value?.toString() || 'Input Date'}</div>
      <button type="button" onClick={handleCalendarClick}>
        Select Date
      </button>
      {showCalendar && <Calendar date={value} onSelectDate={handleCalendarDateSelect} />}
    </SimpleInputWrapper>
  );
};
