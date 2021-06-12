import React from 'react';
import styles from './scss/Pagination.module.scss';

interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate: (number: number) => void;
}

const PaginationByPages = ({ postsPerPage, totalPosts, paginate }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className={styles.pagination}>
          {pageNumbers.map((number) => (
            <div className={styles.page__item} key={number}>
              <button type="button" onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PaginationByPages;
