// Import necessary components
import React from 'react'; // React library
import "./Styles.css"; // Import styles for the switch component

// Import the `useTheme` hook from the ThemeContext
import { useTheme } from "../ThemeContext";

const Switch = () => {
  // Destructure theme and toggleTheme from the context
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">  {/* Label element for accessibility */}
      <input
        type="checkbox"
        // Set checked state based on current theme
        checked={theme === "light"}
        // Trigger toggleTheme on checkbox change
        onChange={toggleTheme}
      />
      <span className="slider round" />  {/* Visual representation of the switch */}
    </label>
  );
};

export default Switch;
