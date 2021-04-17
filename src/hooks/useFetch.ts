import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const useFetch = (url: string, isChange: boolean) => {
  const [loaded, setLoaded] = useState(Boolean);
  const [state, setState]: any = useState([]);
  const [isError, setIsError] = useState(Boolean);
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
