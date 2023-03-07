import React, { FC } from 'react';
import styled from '@emotion/styled';

interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px dashed #718096;
  border-radius: 0.375rem;
  padding: 0.75rem;
`;

const Title = styled.div`
  margin-bottom: 0.625rem;
  font-size: 0.875rem;
  color: #a0aec0;
`;

export const ComponentCard: FC<ComponentCardProps> = ({ title, children }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      {children}
    </CardContainer>
  );
};
