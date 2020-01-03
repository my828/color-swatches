import React, { useState } from "react";

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
  const [activePage, setActivePage] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const styles = {
    list: {
      display: "flex",
      listStyle: "none",
      justifyContent: "space-around",
      width: "50%",
    }
  };
  let handleClick = number => {
    setActivePage(number);
    paginate(number);
  };
  return (
    <nav>
      <ul className="mx-auto" style={styles.list}>
        {pageNumbers.map(number => (
          <li
            key={number}
            style={
              activePage === number
                ? {
                    borderBottom: "1.5px solid",
                    fontWeight: "bold",
                    width: "20px",
                    textAlign: "center"
                  }
                : {}
            }
          >
            <a onClick={() => handleClick(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
