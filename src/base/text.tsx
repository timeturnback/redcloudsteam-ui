import React, { FC, useContext } from 'react';
import { css, cx } from '@emotion/css';
import { ThemeContext, DEFAULT_THEME } from '../context';

interface TextProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  m2?: boolean;
  preset?: TextPresets;
}

export const Text: FC<TextProps> = props => {
  const { themeObject } = useContext(ThemeContext);
  const { textColors } = themeObject || DEFAULT_THEME;

  const { text, className, preset = 'p1', m2, children } = props;
  return (
    <div
      className={cx(
        m2 &&
          css`
            margin: 6px;
          `,
        css`
          color: ${textColors};
        `,
        presetClassName[preset],
        className
      )}
    >
      {text || children}
    </div>
  );
};

type TextPresets = keyof typeof presetClassName;
const presetClassName = {
  h1: css`
    font-size: 2.25rem;
    font-weight: normal;
  `,
  h1p: css`
    font-size: 2.25rem;
    font-weight: 600;
  `,
  h2: css`
    font-size: 1.875rem;
    font-weight: normal;
  `,
  h2p: css`
    font-size: 1.875rem;
    font-weight: 600;
  `,
  h3: css`
    font-size: 1.5rem;
    font-weight: normal;
  `,
  h3p: css`
    font-size: 1.5rem;
    font-weight: 600;
  `,
  h4: css`
    font-size: 1.25rem;
    font-weight: normal;
  `,
  h4p: css`
    font-size: 1.25rem;
    font-weight: 600;
  `,

  p1: css`
    font-size: 1.125rem;
    font-weight: normal;
  `,
  p1p: css`
    font-size: 1.125rem;
    font-weight: 500;
  `,
  p2: css`
    font-size: 1rem;
    font-weight: normal;
  `,
  p2p: css`
    font-size: 1rem;
    font-weight: 500;
  `,
  p3: css`
    font-size: 0.875rem;
    font-weight: normal;
  `,
  p3p: css`
    font-size: 0.875rem;
    font-weight: 500;
  `,
  p4: css`
    font-size: 0.75rem;
    font-weight: normal;
  `,
  p4p: css`
    font-size: 0.75rem;
    font-weight: 500;
  `,

  label: css`
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
    font-size: 1.125rem;
    font-weight: 500;
  `
};
