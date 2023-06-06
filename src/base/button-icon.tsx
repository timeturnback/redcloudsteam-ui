import { css, cx } from '@emotion/css';
import type { FC, MouseEventHandler } from 'react';
import React from 'react';

export interface ButtonIconProps {
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  bgColor?: string;
  iconColor?: string;
  size?: number;
}

const buttonStyle = css`
  border: 1px solid #d1d5db;
  padding: 4px;
  border-radius: 4px;
  margin: 6px;
`;

export const ButtonIcon: FC<ButtonIconProps> = ({
  Icon,
  onClick,
  className,
  bgColor,
  iconColor,
  size
}) => {
  const buttonClass = cx(
    buttonStyle,
    bgColor &&
      css`
        background-color: ${bgColor};
        border: none;
      `,
    className
  );

  const iconClass = cx(
    css`
      height: ${size ? `${size}px` : '20px'};
      width: ${size ? `${size}px` : '20px'};
      color: ${iconColor || '#6b7280'};
    `
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      <Icon className={iconClass} />
    </button>
  );
};
