import React from "react";
import { FC } from "react";

interface Pagination {
  postsPerPage: number;
  totalPosts: number;
  paginate: Function;
}

// const Pagination: FC<Pagination> = ({ postsPerPage, totalPosts, paginate }) => {
const Pagination: FC<Pagination> = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
