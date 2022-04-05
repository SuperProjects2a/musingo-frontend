import React from "react";
import { FC } from "react";
import { Pagination, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface Pag {
  postsPerPage: number;
  totalPosts: number;
  paginate: Function;
  currentPage: number;
}

// const Pagination: FC<Pagination> = ({ postsPerPage, totalPosts, paginate }) => {
const PaginationSearch: FC<Pag> = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      {/* <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul> */}
      <Pagination>
        {currentPage > 1 ? (
          <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
        ) : (
          <Pagination.Prev disabled />
        )}

        {pageNumbers.map((number) => (
          <Pagination.Item onClick={() => paginate(number)}>
            {number}
          </Pagination.Item>
        ))}
        {currentPage < pageNumbers.length ? (
          <Pagination.Next onClick={() => paginate(currentPage + 1)} />
        ) : (
          <Pagination.Next disabled />
        )}
      </Pagination>
    </nav>
  );
};

export default PaginationSearch;
