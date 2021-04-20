import { useContext } from 'react';
import { ThemeContext } from '../App';

const useDarkThemeContext = (style: any) => {
  const checked = useContext(ThemeContext);
  const darkTheme = checked ? style.dark : '';
  return { darkTheme, checked };
};
export default useDarkThemeContext;
