import { FaApple } from 'react-icons/fa';

interface IconProps {
  size?: number;
}

export const AppleIcon = ({ size = 20 }: IconProps) => {
  const Icon = FaApple as any;
  return <Icon size={size} color="#77797B" />;
};