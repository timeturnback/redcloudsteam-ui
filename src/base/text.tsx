import React, { FC } from 'react';
import { css, cx } from '@emotion/css';

interface TextProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  m2?: boolean;
  preset?: TextPresets;
}

export const Text: FC<TextProps> = props => {
  const { text, className, preset = 'p1', m2, children } = props;
  return (
    <div className={cx(m2 && 'm-2', presetClassName[preset], className)}>{text || children}</div>
  );
};

type TextPresets = keyof typeof presetClassName;
const presetClassName = {
  h1: css`
    color: white;
    font-size: 4rem;
    font-weight: normal;
  `,
  h1p: css`
    color: white;
    font-size: 4rem;
    font-weight: 600;
  `,
  h2: css`
    color: white;
    font-size: 3rem;
    font-weight: normal;
  `,
  h2p: css`
    color: white;
    font-size: 3rem;
    font-weight: 600;
  `,
  h3: css`
    color: white;
    font-size: 2rem;
    font-weight: normal;
  `,
  h3p: css`
    color: white;
    font-size: 2rem;
    font-weight: 600;
  `,
  h4: css`
    color: white;
    font-size: 1.5rem;
    font-weight: normal;
  `,
  h4p: css`
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
  `,

  p1: css`
    color: white;
    font-size: 1.25rem;
    font-weight: normal;
  `,
  p1p: css`
    color: white;
    font-size: 1.25rem;
    font-weight: 500;
  `,
  p2: css`
    color: white;
    font-size: 1rem;
    font-weight: normal;
  `,
  p2p: css`
    color: white;
    font-size: 1rem;
    font-weight: 500;
  `,
  p3: css`
    color: white;
    font-size: 0.875rem;
    font-weight: normal;
  `,
  p3p: css`
    color: white;
    font-size: 0.875rem;
    font-weight: 500;
  `,
  p4: css`
    color: white;
    font-size: 0.75rem;
    font-weight: normal;
  `,
  p4p: css`
    color: white;
    font-size: 0.75rem;
    font-weight: 500;
  `,

  label: css`
    color: white;
    font-size: 0.875rem;
    font-weight: normal;
  `,
  error: css`
    color: #e53e3e;
    font-size: 0.875rem;
  `,

  ls: css`
    color: #3182ce;
    font-size: 0.875rem;
    font-weight: 500;
  `,
  lm: css`
    color: #3182ce;
    font-size: 1rem;
    font-weight: 500;
  `,
  ll: css`
    color: #3182ce;
    font-size: 1rem;
    font-weight: 500;
  `
};
