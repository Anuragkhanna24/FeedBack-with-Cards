
import React from 'react';
import './Pagination.css';

const CustomPagination = ({ pageCount, currentPage, onPageChange }) => {
  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination-container">
      <ul className="pagination-list">
        {Array.from({ length: pageCount }).map((_, index) => (
          <li key={index} className="pagination-item">
            <button
              className={`pagination-link ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomPagination;
