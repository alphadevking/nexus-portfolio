"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex items-center space-x-4">
            <button
                className="p-2 rounded-full"
                onClick={toggleTheme}
            >
                {theme === 'light' ? (
                    <FiSun className="w-6 h-6 text-purple-950 transition-transform transform rotate-0 hover:rotate-180" />
                ) : (
                    <FiMoon className="w-6 h-6 text-purple-50 transition-transform transform rotate-0 hover:rotate-180" />
                )}
            </button>
        </div>
    );
}
