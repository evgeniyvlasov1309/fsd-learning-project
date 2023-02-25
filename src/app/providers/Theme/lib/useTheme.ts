import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "app/providers/Theme/lib/ThemeContext";
import { useContext, useEffect } from "react";

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        // @ts-ignore
        document.body.classList = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    function toggleTheme() {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
    }

    return { theme, toggleTheme };
}
