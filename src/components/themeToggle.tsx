import React, { FC } from 'react';
import { FaRegSun, FaRegMoon} from 'react-icons/fa';
import { ThemeContext, Themes } from '../context/theme';

const ThemeToggle: FC = () => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => {
      const isDark = theme === Themes.Dark;

      return (
        isDark ? <FaRegSun onClick={toggleTheme}/> : <FaRegMoon onClick={toggleTheme}/>
      );
    }}
  </ThemeContext.Consumer>
);

export default ThemeToggle;