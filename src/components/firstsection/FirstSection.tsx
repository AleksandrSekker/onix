import React from 'react';
import styled from './FirstSection.module.css';
interface Props {}

export const FirstSection = (props: Props) => {
  return (
    <section>
      <div className={styled.container}>
        <h1 className={styled.title}>Entry task to internship</h1>
        <h2 className={styled.reviewTitle}>Review Project</h2>
        <p>
          This is website about git, node, html, css. In main page you can see
          small review about this technologies, if clicked in navbar button you
          will see page with more detail information. This is react version of
          page, also you can visit{' '}
          <span>
            <a href="https://github.com/AleksandrSekker/onixhtml">
              Html version
            </a>
          </span>
        </p>
      </div>
    </section>
  );
};
