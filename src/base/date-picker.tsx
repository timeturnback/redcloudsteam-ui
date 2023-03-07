import React, { useState } from 'react';
import styled from '@emotion/styled';

const DatePickerWrapper = styled.div`
  display: inline-block;
`;

const Input = styled.input`
  appearance: none;
  background-color: white;
  border: 1px solid #cbd5e0;
  border-radius: 0.25rem;
  color: #4a5568;
  font-size: 1rem;
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  position: relative;
  width: 100%;
  z-index: 1;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    border-color: #4299e1;
  }
`;

export const DatePicker: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDate(value ? new Date(value) : null);
  };

  return (
    <DatePickerWrapper>
      <Input type="date" value={date?.toISOString().substr(0, 10)} onChange={handleChange} />
    </DatePickerWrapper>
  );
};
