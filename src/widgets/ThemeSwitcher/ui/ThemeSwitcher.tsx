import { useTheme } from "app/providers/Theme";
import ThemeIcon from "shared/assets/icons/theme.svg";
import { classNames } from "shared/lib/classNames";
import { Button, ThemeButton } from "shared/ui/Button";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <ThemeIcon />
    </Button>
  );
};
