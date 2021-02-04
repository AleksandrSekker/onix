import React from 'react';
import styled from '../../scss/ComonentDetail.module.scss';
import { useSelector } from 'react-redux';
import { selectCheck } from '../../redux/checked/checkedSlice';
interface Props {
  title: string;
  content: string;
}

export const ComonentDetail = (props: Props) => {
  const checked = useSelector(selectCheck);
  return (
    <section className={checked ? styled.dark : ''}>
      <div className="container">
        <h1 className={styled.title}>{props.title}</h1>
        <p className={styled.content}>{props.content}</p>
      </div>
    </section>
  );
};
