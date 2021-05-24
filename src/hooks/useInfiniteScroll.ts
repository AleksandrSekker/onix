import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/pagination/reducers';

const useInfiniteScroll = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [count, setCount] = useState(10);
  const amount = 10;
  const dispatch = useDispatch();
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
    dispatch(fetchData(count));
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
    isFetching
  };
};

export default useInfiniteScroll;
