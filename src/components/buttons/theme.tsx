import { MdLightMode, MdDarkMode } from 'react-icons/md';

import { useThemeContext } from '@/context/theme';
import { Button } from '@/styles/buttons.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number | string;
}

export default function ThemeButton({ size = 24, ...rest }: ButtonProps) {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <Button onClick={toggleTheme} size={size} {...rest}>
      {theme === 'light' ? (
        <MdDarkMode size={size} />
      ) : (
        <MdLightMode size={size} />
      )}
    </Button>
  );
}
