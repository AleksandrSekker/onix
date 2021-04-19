import { useContext } from 'react';
// @ts-ignore
import { ThemeContext } from '../App.tsx';

const useDarkThemeContext = (style: any) => {
  const checked = useContext(ThemeContext);
  const darkTheme = checked ? style.dark : '';
  return { darkTheme };
};
export default useDarkThemeContext;
