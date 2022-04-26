import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  // Logic to get amount of pages, Math.ceil to round it up
  for(let i =1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination justify-content-center mt-4 mb-4">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={()=> paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;