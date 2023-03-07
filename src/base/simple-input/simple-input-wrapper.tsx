import React from 'react';
import type { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

import { Text } from '../text';

export interface SimpleInputWrapperProps {
  label?: string;
  error?: string;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  onChangeValue?: (value: string) => void;
  noMargin?: boolean;
}

const Container = styled.div<{ noMargin?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: ${({ noMargin }) => (noMargin ? 0 : '0.5rem 1rem')};
`;

export const SimpleInputWrapper: FC<SimpleInputWrapperProps> = ({
  className,
  label,
  error,
  children,
  noMargin
}) => {
  return (
    <Container className={className} noMargin={noMargin}>
      {label ? (
        <Text className="mb-2" preset="label">
          {label}
        </Text>
      ) : null}
      {children}
      {error ? (
        <Text className="mt-2" preset="error">
          {error}
        </Text>
      ) : null}
    </Container>
  );
};
