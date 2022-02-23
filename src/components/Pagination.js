import React, { useEffect, useState } from "react";

const Pagination = ({
  setCurrentPage,
  currentEmployee,
  totalPageNumber,
  sorteEmployee,
}) => {
  const [currentButton, setCurrentButton] = useState(1);
  const numberPage = [];
  for (let i = 1; i <= totalPageNumber; i++) {
    numberPage.push(i);
  }

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [setCurrentPage, currentButton]);

  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing
        <b> {currentEmployee.length} </b>
        out of
        <b> {sorteEmployee.length} </b>
      </div>
      <ul className="pagination">
        <li
          className={`${
            currentButton === 1 ? "page-item disabled" : "page-item"
          }`}
        >
          <a
            href="#"
            onClick={() =>
              setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            Previors
          </a>
        </li>

        {numberPage.map((page, index) => {
          return (
            <li
              key={index}
              className={`${
                currentButton === page ? "page-item active" : "page-item"
              }`}
            >
              <a
                href="#"
                className="page-link"
                onClick={() => {
                  setCurrentButton(page);
                }}
              >
                {page}
              </a>
            </li>
          );
        })}

        <li
          className={`${
            currentButton === numberPage.length
              ? "page-item disabled"
              : "page-item"
          }`}
        >
          <a
            href="#"
            onClick={() =>
              setCurrentButton((next) =>
                next === numberPage.length ? next : next + 1
              )
            }
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
