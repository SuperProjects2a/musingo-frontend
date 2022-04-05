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
      <Pagination>
        {currentPage > 1 ? (
          <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
        ) : (
          <Pagination.Prev disabled />
        )}

        {pageNumbers.length > 10 ? (
          <>
            {/* {currentPage > 4 ? (
              currentPage < pageNumbers.length - 3 ? ( */}
            {currentPage > 6 ? (
              currentPage < pageNumbers.length - 5 ? (
                <>
                  <Pagination.Item onClick={() => paginate(1)}>
                    {1}
                  </Pagination.Item>
                  <Pagination.Ellipsis />
                  {pageNumbers
                    .filter(
                      (number) =>
                        number > currentPage - 4 && number < currentPage + 4
                    )
                    .map((number) => (
                      <Pagination.Item
                        onClick={() => paginate(number)}
                        active={currentPage == number}
                      >
                        {number}
                      </Pagination.Item>
                    ))}
                  <Pagination.Ellipsis />
                  <Pagination.Item onClick={() => paginate(pageNumbers.length)}>
                    {pageNumbers.length}
                  </Pagination.Item>
                </>
              ) : (
                <>
                  <Pagination.Item onClick={() => paginate(1)}>
                    {1}
                  </Pagination.Item>
                  <Pagination.Ellipsis />
                  {pageNumbers
                    .filter(
                      (number) =>
                        number >
                        currentPage -
                          5 -
                          (4 - (pageNumbers.length - currentPage))
                    )
                    .map((number) => (
                      <Pagination.Item
                        onClick={() => paginate(number)}
                        active={currentPage == number}
                      >
                        {number}
                      </Pagination.Item>
                    ))}
                </>
              )
            ) : (
              <>
                {pageNumbers
                  .filter(
                    (number) => number < currentPage + 4 + (6 - currentPage)
                  )
                  .map((number) => (
                    <Pagination.Item
                      onClick={() => paginate(number)}
                      active={currentPage == number}
                    >
                      {number}
                    </Pagination.Item>
                  ))}
                <Pagination.Ellipsis />
                <Pagination.Item onClick={() => paginate(pageNumbers.length)}>
                  {pageNumbers.length}
                </Pagination.Item>
              </>
            )}
          </>
        ) : (
          <>
            {pageNumbers.map((number) => (
              <Pagination.Item
                onClick={() => paginate(number)}
                active={currentPage == number}
              >
                {number}
              </Pagination.Item>
            ))}
            {/* {currentPage < pageNumbers.length ? (
              <Pagination.Next onClick={() => paginate(currentPage + 1)} />
            ) : (
              <Pagination.Next disabled />
            )} */}
          </>
        )}
        {/* {pageNumbers.map((number) => (
          <Pagination.Item
            onClick={() => paginate(number)}
            active={currentPage == number}
          >
            {number}
          </Pagination.Item>
        ))} */}
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
