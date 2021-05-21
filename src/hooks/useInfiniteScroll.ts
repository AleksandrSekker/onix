import { useEffect, useState } from 'react';

const useInfiniteScroll = (url: string) => {
  const [state, setState] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [count, setCount] = useState(10);
  const amount = 10;
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setState(json.slice(0, count));
    } catch (error) {
      setIsError(true);
    }
  };
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
  };
  const fetchMoreListItems = () => {
    setTimeout(() => {
      setCount(count + amount);
      setIsFetching(false);
    }, 2000);
  };
  useEffect(() => {
    fetchData();
  }, [count]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);
  return {
    state, isFetching, isError, setState 
  };
};

export default useInfiniteScroll;
