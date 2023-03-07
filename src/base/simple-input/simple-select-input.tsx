import React from 'react';
import styled from '@emotion/styled';
import { SimpleInputWrapper } from './simple-input-wrapper';

type SimpleSelectInputOption = {
  value: string;
  label: string;
};

type SimpleSelectInputProps = {
  options: SimpleSelectInputOption[];
  leftComp?: React.ReactNode;
  rightComp?: React.ReactNode;
  label?: string;
  error?: string;
} & React.HTMLProps<HTMLSelectElement>;

const StyledSelect = styled.select`
  border: 1px solid gray;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
`;

const StyledOption = styled.option``;

const StyledLeftComp = styled.span`
  margin-right: 0.5rem;
`;

const StyledRightComp = styled.span`
  margin-left: 0.5rem;
`;

export const SimpleSelectInput: React.FC<SimpleSelectInputProps> = ({
  label,
  error,
  options,
  leftComp,
  rightComp
}) => {
  return (
    <SimpleInputWrapper label={label} error={error}>
      {leftComp && <StyledLeftComp>{leftComp}</StyledLeftComp>}
      <StyledSelect>
        {options.map(option => (
          <StyledOption key={option.value} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </StyledSelect>
      {rightComp && <StyledRightComp>{rightComp}</StyledRightComp>}
    </SimpleInputWrapper>
  );
};
