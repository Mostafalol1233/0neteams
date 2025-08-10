import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
};

const initialState: ThemeProviderState = {
  theme: 'light',
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const updateTheme = () => {
      const hour = new Date().getHours();
      const isDayTime = hour >= 6 && hour < 18;
      const newTheme = isDayTime ? 'light' : 'dark';
      
      setTheme(newTheme);
      
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Initial theme setting
    updateTheme();

    // Update theme every minute to catch time changes
    const interval = setInterval(updateTheme, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProviderContext.Provider value={{ theme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
