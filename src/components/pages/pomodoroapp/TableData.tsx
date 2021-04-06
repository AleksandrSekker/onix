import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Array.module.scss";
import React from "react";

interface Props {
  result: any;
  handleDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    position: number
  ) => void;
  handleDragEnter: (
    e: React.DragEvent<HTMLDivElement>,
    position: number
  ) => void;
  deleteHandler: any;
}
interface State {
  title: string;
  _id: string;
  year: number;
  subtitle: string;
}

export const TableData = ({
  result,
  handleDragStart,
  handleDragEnter,
  deleteHandler,
}: Props) => {
  return (
    <div>
      {result.map(({ title, _id, year, subtitle }: State, index: number) => {
        return (
          <div
            onDragStart={e => handleDragStart(e, index)}
            onDragOver={e => e.preventDefault()}
            onDragEnter={e => handleDragEnter(e, index)}
            key={index}
            draggable
            className={styles.array}>
            <div className={styles.flex__container}>
              <div className={styles.title__container}>
                <p>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <p>{title}</p>
              </div>
              <div className={styles.edit__container}>
                <p>{year}</p>
                <p>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteHandler(_id)}
                  />
                </p>
              </div>
            </div>
            <p>{subtitle}</p>
          </div>
        );
      })}
    </div>
  );
};
