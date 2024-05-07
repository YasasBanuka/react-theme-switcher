import { createContext, useContext, useState } from 'react';

// Create a React context named ThemeContext
const ThemeContext = createContext(undefined);

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  // Use useState hook to manage the initial theme state (light by default)
  const [theme, setTheme] = useState("light");

  // Function to toggle the theme state (light -> dark or vice versa)
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light"); // Typo correction

  // Return the ThemeProvider component, providing the theme and toggleTheme function to its children
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// useTheme hook
export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
