import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Loader } from "../../Loader";
import dataCall from "../../DataCall";
import { Error } from "../../Error";
import { TableData } from "./TableData";
import { AddModal } from "./AddModal";

export const ArrayDB = () => {
  const [state, setState] = useState([]);
  const [title, setTitle] = useState(String);
  const [subTitle, setSubTitle] = useState(String);
  const [year, setYear] = useState(1);
  const [isChange, setIsChange] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [linkAdd, setLinkAdd] = useState(false);
  const [isLoaded, setIsLoaded] = useState(Boolean);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    dataCall(
      "https://guarded-brook-68937.herokuapp.com/api/todo",
      setIsLoaded,
      setState,
      setisError
    );
    return () => {
      setIsLoaded(false);
    };
  }, [isChange]);
  const pushHandler = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "https://guarded-brook-68937.herokuapp.com/api/todo",
        data: {
          title: title,
          subtitle: subTitle,
          year: year,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.status >= 200 && response.status < 300) {
        console.log("success");
        setIsChange(!isChange);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const deleteHandler = async (id: string) => {
    const response = await axios.delete(
      `https://guarded-brook-68937.herokuapp.com/api/todo/${id}`
    );
    try {
      if (response.status >= 200 && response.status < 300) {
        console.log("success");
        setIsChange(!isChange);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const modalToggler = () => {
    setIsModal(!isModal);
  };

  const draggingItem: any = useRef();
  const dragOverItem: any = useRef();
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    position: number
  ) => {
    draggingItem.current = position;
  };

  const handleDragEnter = (
    e: React.DragEvent<HTMLDivElement>,
    position: number
  ) => {
    dragOverItem.current = position;
    const listCopy = [...state];
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setState(listCopy);
  };
  const result = state;
  return (
    <div>
      {isError && <Error />}
      {!isLoaded ? (
        <Loader />
      ) : (
        <TableData
          result={result}
          handleDragEnter={handleDragEnter}
          handleDragStart={handleDragStart}
          deleteHandler={deleteHandler}
        />
      )}
      <AddModal
        isModal={isModal}
        setTitle={setTitle}
        year={year}
        setYear={setYear}
        linkAdd={linkAdd}
        setSubTitle={setSubTitle}
        setLinkAdd={setLinkAdd}
        modalToggler={modalToggler}
        pushHandler={pushHandler}
      />
    </div>
  );
};
