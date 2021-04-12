import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
const useFetchWithPagination = (url: string, amount: number) => {
  const [loaded, setLoaded] = useState(Boolean);
  const [state, setState] = useState([]);
  const [isError, setIsError] = useState(Boolean);
  const [current, setCurrent] = useState([]);
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
      setCurrent(newArr.slice(0, amount));
    } catch (error) {
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchData();
    return () => setLoaded(false);
    // eslint-disable-next-line
  }, []);
  return {
    loaded,
    state,
    isError,
    current,
    setCurrent,
  };
};
export default useFetchWithPagination;
