import React from "react";
import styles from "./scss/Pagination.module.scss";
interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination = ({ postsPerPage, totalPosts, paginate }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <div className={styles.pagination}>
          {pageNumbers.map(number => (
            <div className={styles.page__item} key={number}>
              <p onClick={() => paginate(number)} className={styles.page__link}>
                {number}
              </p>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};
