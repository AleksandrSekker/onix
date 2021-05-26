import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const useFetch = (url: string, isChange: boolean) => {
  const [loaded, setLoaded] = useState<boolean>();
  const [state, setState] = useState<any>([]);
  const [isError, setIsError] = useState<boolean>();
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const newArr = json.map((x: object) => ({
        ...x,
        id: uuid(),
      }));
      setLoaded(true);
      setState(newArr);
    } catch (error) {
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchData();
    return () => setLoaded(false);
  }, [isChange]);
  return {
    loaded,
    state,
    setState,
    isError,
  };
};
export default useFetch;
