import type { FC, ReactElement, SVGProps } from 'react';
import React from 'react';
import { css, cx } from '@emotion/css';
import { LoadingIndicator } from './loading-indicator';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  preset?: keyof typeof presetClassName;
  large?: boolean;
  className?: string;
  heroIcon?: (props: SVGProps<SVGSVGElement>) => ReactElement;
  fetching?: boolean;
}

const ButtonContainer = ({ large, preset }: Pick<ButtonProps, 'large' | 'preset'>) => css`
  display: flex;
  margin: 6px;
  padding: ${large ? '12' : '6'}px ${large ? '16' : '8'}px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  ${preset ? presetClassName[preset] : null};
`;

export const Button: FC<ButtonProps> = props => {
  const { text, preset = 'primary', large, className, fetching, children, ...rest } = props;

  return (
    <button className={cx(ButtonContainer({ large, preset }), className)} {...rest}>
      {fetching ? (
        <LoadingIndicator style={{ marginRight: 4 }} />
      ) : props.heroIcon ? (
        <props.heroIcon />
      ) : null}
      {text || children}
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
    &:disabled {
      background-color: #aaa;
      cursor: not-allowed;
    }
  `,
  secondary: css`
    background-color: #7c8e96;
    font-weight: 500;
    color: #ffffff;
    &:hover {
      background-color: #0a1c28;
    }
    &:disabled {
      background-color: #aaa;
      cursor: not-allowed;
    }
  `,
  bordered: css`
    border: 1px solid #000000;
    font-weight: 500;
  `
};
