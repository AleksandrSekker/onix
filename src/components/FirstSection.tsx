import React from 'react';
import styled from '../scss/FirstSection.module.scss';
import { useSelector } from 'react-redux';
import { selectCheck } from '../redux/checkedSlice';
interface Props {}

export const FirstSection = (props: Props) => {
  const checked = useSelector(selectCheck);
  const title = 'Entry task to internship';
  const reviewTitle = 'Review Project';
  return (
    <section className={`${checked ? styled.dark : ''}`}>
      <div className="container">
        <h1 className={styled.title}>{title}</h1>
        <h2 className={styled.review__title}>{reviewTitle}</h2>
        <p>
          This is website about git, node, html, css. In main page you can see
          small review about this technologies, if clicked in navbar button you
          will see page with more detail information
        </p>
      </div>
    </section>
  );
};
