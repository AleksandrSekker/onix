import React from 'react';
import styled from './ComonentDetail.module.css';
interface Props {
  title: string;
  content: string;
}

export const ComonentDetail = (props: Props) => {
  return (
    <div className={styled.container}>
      <h1 className={styled.title}>{props.title}</h1>
      <p className={styled.content}>{props.content}</p>
    </div>
  );
};
