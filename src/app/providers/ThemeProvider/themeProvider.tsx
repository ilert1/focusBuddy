"use client";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localStorage";
import { Theme } from "@/shared/const/theme";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
    const [isThemeInited, setThemeInited] = useState(false);

    useEffect(() => {
        let fallbackTheme: Theme | null = null;

        if (typeof window !== "undefined") {
            fallbackTheme = localStorage.getItem(
                LOCAL_STORAGE_THEME_KEY
            ) as Theme;
        }

        const effectiveTheme = initialTheme || fallbackTheme || Theme.LIGHT;
        setTheme(effectiveTheme);
        setThemeInited(true);
    }, [initialTheme]);

    useEffect(() => {
        if (!isThemeInited) return;

        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme, isThemeInited]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
