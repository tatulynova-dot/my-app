import { ReactNode } from 'react';
import styles from './Text.module.css';

type TextSize = 'small' | 'medium' | 'large' | 'xlarge';
type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
type TextColor = 'primary' | 'secondary' | 'accent-green' | 'accent-red' | 'accent-cyan';

interface TextProps {
  children: ReactNode;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  className?: string;
}

export const Text = ({ 
  children, 
  size = 'medium', 
  weight = 'normal',
  color = 'primary',
  className = ''
}: TextProps) => {
  const classes = [
    styles.text,
    styles[`size-${size}`],
    styles[`weight-${weight}`],
    styles[`color-${color}`],
    className
  ].filter(Boolean).join(' ');

  return <span className={classes}>{children}</span>;
};