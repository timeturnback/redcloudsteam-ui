import React from 'react';
import { FC, InputHTMLAttributes } from 'react';
import { SimpleInputWrapper, SimpleInputWrapperProps } from './simple-input-wrapper';
import styled from '@emotion/styled';

interface SimpleTextInputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    SimpleInputWrapperProps {
  multiline?: boolean;
  prefix?: string;
  suffix?: string;
  inputType?: 'number' | 'text';
  noMargin?: boolean;
}

const InputWrapper = styled.div<{ error?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid;
  background-color: transparent;
  padding: 0.5rem;
  border-color: ${({ error }) => error && 'rgb(239, 68, 68 ,1)'};
`;

const PrefixSuffixText = styled.div`
  font-size: 1rem;
  color: white;
`;

const TextInput = styled.input`
  min-width: 0;
  flex: 1;
  background-color: transparent;
  color: white;
  outline: none;
  font-size: 14px;
  &::placeholder {
    color: rgb(161, 167, 180);
  }
`;

const TextArea = styled.textarea`
  min-width: 0;
  flex: 1;
  background-color: transparent;
  color: white;
  outline: none;
  font-size: 14px;
  &::placeholder {
    color: rgb(161, 167, 180);
  }
`;

export const SimpleTextInput: FC<SimpleTextInputProps> = ({
  className,
  label,
  error,
  multiline,
  prefix,
  suffix,
  onChange,
  inputType,
  noMargin,
  ...rest
}) => {
  const _onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const overrideEvent = {
      ...e
    };
    if (inputType === 'number') {
      overrideEvent.target.value = e.target.value.replace(/[^0-9]/g, '');
    }
    onChange?.(overrideEvent);
  };

  return (
    <SimpleInputWrapper noMargin={noMargin} className={className} label={label} error={error}>
      <InputWrapper error={error}>
        {prefix ? <PrefixSuffixText>{prefix}</PrefixSuffixText> : null}
        {multiline ? (
          <TextArea onChange={_onChange} {...rest} />
        ) : (
          <TextInput onChange={_onChange} {...rest} />
        )}
        {suffix ? <PrefixSuffixText>{suffix}</PrefixSuffixText> : null}
      </InputWrapper>
    </SimpleInputWrapper>
  );
};
