import { useSelector } from 'react-redux';
// @ts-ignore
import { selectCheck } from '../redux/checkedSlice.ts';

const useDarkTheme = (style: any) => {
  const checked = useSelector(selectCheck);
  const darkTheme = checked ? style.dark : '';
  return { darkTheme };
};
export default useDarkTheme;
