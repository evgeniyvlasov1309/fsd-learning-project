import { useTheme } from "app/providers/Theme";
import { FC } from "react";
import ThemeIcon from "shared/assets/icons/theme.svg";
import { classNames } from "shared/lib/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            <ThemeIcon />
        </Button>
    );
};
