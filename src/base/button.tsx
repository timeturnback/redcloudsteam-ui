import type { FC, ReactElement, SVGProps } from 'react';
import React from 'react';
import { css, cx } from '@emotion/css';
import { LoadingIndicator } from './loading-indicator';

interface ButtonProps {
  text?: string;
  preset: keyof typeof presetClassName;
  large?: boolean;
  className?: string;
  heroIcon?: (props: SVGProps<SVGSVGElement>) => ReactElement;
  onClick?: () => void;
  fetching?: boolean;
}

const ButtonContainer = ({
  large,
  preset,
  className
}: Pick<ButtonProps, 'large' | 'preset' | 'className'>) => css`
  display: flex;
  margin: 8px;
  padding: ${large ? '12' : '6'}px ${large ? '16' : '8'}px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  ${presetClassName[preset]};
  ${className};
`;

export const Button: FC<ButtonProps> = props => {
  const { text, preset = 'primary', large, className, onClick, fetching } = props;

  return (
    <button className={cx(ButtonContainer({ large, preset, className }))} onClick={onClick}>
      {fetching ? (
        <LoadingIndicator style={{ marginRight: 4 }} />
      ) : props.heroIcon ? (
        <props.heroIcon />
      ) : null}
      {text}
    </button>
  );
};

const presetClassName = {
  white: css`
    background-color: #ffffff;
    font-weight: 500;
    color: #000000;
  `,
  primary: css`
    background-color: #4a90e2;
    font-weight: 500;
    color: #ffffff;
    &:hover {
      background-color: #2f73b7;
    }
  `,
  secondary: css`
    background-color: #7c8e96;
    border: 1px solid #0a1c28;
    font-weight: 500;
    color: #ffffff;
    &:hover {
      background-color: #0a1c28;
    }
  `,
  bordered: css`
    border: 1px solid #000000;
    font-weight: 500;
  `
};
