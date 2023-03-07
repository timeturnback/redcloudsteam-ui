import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';

interface LoadingIndicatorProps {
  loadingSize?: number;
  loadingColor?: string;
  loadingSpeed?: number;
  loadingThickness?: number;
  style?: React.CSSProperties;
}

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const OuterCircle = styled.div<LoadingIndicatorProps>`
  position: relative;
  animation: ${spinAnimation} ${({ loadingSpeed }) => loadingSpeed}s linear infinite;
`;

const InnerCircle = styled.div<LoadingIndicatorProps>`
  width: ${({ loadingSize }) => loadingSize}px;
  height: ${({ loadingSize }) => loadingSize}px;
  border-radius: 50%;
  border: ${({ loadingThickness }) => loadingThickness}px solid transparent;
  border-top-color: ${({ loadingColor }) => loadingColor};
`;

const InnerCircleOverlay = styled.div<LoadingIndicatorProps>`
  width: ${({ loadingSize }) => loadingSize}px;
  height: ${({ loadingSize }) => loadingSize}px;
  border-radius: 50%;
  border: ${({ loadingThickness }) => loadingThickness}px solid rgba(255, 255, 255, 0.3) !important;
  position: absolute;
  top: 0;
`;

export const LoadingIndicator: FC<LoadingIndicatorProps> = ({
  loadingSize = 22,
  loadingColor = '#eee',
  loadingSpeed = 1,
  loadingThickness = 3,
  style
}) => {
  return (
    <OuterCircle loadingSize={loadingSize} style={style} loadingSpeed={loadingSpeed}>
      <InnerCircle
        loadingSize={loadingSize}
        loadingThickness={loadingThickness}
        loadingColor={loadingColor}
      />
      <InnerCircleOverlay loadingSize={loadingSize} loadingThickness={loadingThickness} />
    </OuterCircle>
  );
};
