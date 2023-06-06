import React from 'react';
import styled from '@emotion/styled';
import { SimpleInputWrapper } from './simple-input-wrapper';

type SimpleSelectInputOption = {
  value: string;
  label: string;
};

interface SimpleSelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SimpleSelectInputOption[];
  leftComp?: React.ReactNode;
  rightComp?: React.ReactNode;
  label?: string;
  error?: string;
}

const StyledSelect = styled.select`
  border: 1px solid gray;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  &:not(:valid) {
    color: gray;
  }
`;

const StyledOption = styled.option`
  &:first-of-type {
    color: gray;
  }
`;

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
  rightComp,
  ...rest
}) => {
  return (
    <SimpleInputWrapper label={label} error={error}>
      {leftComp && <StyledLeftComp>{leftComp}</StyledLeftComp>}
      <StyledSelect {...rest}>
        <StyledOption value="" disabled hidden selected>
          Select
        </StyledOption>
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
