import { useSelector } from 'react-redux';
import { selectLanguage } from '../redux/languagesSlice.ts';

const useLanguages = (english: string, russian: string, ukranian: string) => {
  let currentLanguage = '';
  const language = useSelector(selectLanguage);
  if (language === 'en') {
    currentLanguage = english;
  } else if (language === 'ru') {
    currentLanguage = russian;
  } else if (language === 'ua') {
    currentLanguage = ukranian;
  }
  return { currentLanguage };
};
export default useLanguages;
