import { useSelector } from "react-redux";
import { selectCheck } from "../redux/checkedSlice";
const useDarkTheme = (style: any) => {
  const checked = useSelector(selectCheck);
  let darkTheme = checked ? style.dark : "";
  return { darkTheme };
};
export default useDarkTheme;
