import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentPosts, selectPagination } from '../redux/pagination/actions';

const useDragAndDrop = () => {
  const state = useSelector(selectPagination);
  const dispatch = useDispatch();
  const draggingItem: React.MutableRefObject<any> = useRef();
  const dragOverItem: React.MutableRefObject<number | undefined | null> = useRef();
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    draggingItem.current = position;
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragOverItem.current = position;
    const listCopy = [...state];
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);
    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    dispatch(currentPosts(listCopy));
  };
  return { handleDragEnter, handleDragStart };
};
export default useDragAndDrop;
