'use client';
import { MockData, mockData } from '@/utils/data';
import React, { useState } from 'react';

const itemsPerPage = 10;
const maxDisplayedPages = 2;

const PaginationExample: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = Math.ceil(mockData.length / itemsPerPage);

  const handlePageChange = (newPage: number): void => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // eslint-disable-next-line @typescript-eslint/ban-types
  const generatePageNumbers = (): Array<number | null> => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const result: Array<number | null> = [];

    // Starting page numbers
    for (let i = 1; i <= Math.min(maxDisplayedPages, totalPages); i++) {
      result.push(i);
    }

    // Ellipsis
    if (maxDisplayedPages < totalPages) {
      result.push(null);
    }

    // Ending page numbers
    for (
      let i = Math.max(totalPages - maxDisplayedPages + 1, maxDisplayedPages + 1);
      i <= totalPages;
      i++
    ) {
      result.push(i);
    }

    return result;
  };

  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const displayedData: MockData[] = mockData.slice(startIndex, endIndex);

  console.log((generatePageNumbers() as number[]).map((pageNumber) => pageNumber));

  return (
    <div>
      <h1>Data from makeFlatData:</h1>
      <ul>
        {displayedData.map((data) => (
          <li key={data.id}>{`${data.firstName} ${data.lastName}, Age: ${data.age}`}</li>
        ))}
      </ul>
      <div className="inline-flex -space-x-px text-sm">
        <button
          className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => {
            handlePageChange(currentPage - 1);
          }}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {generatePageNumbers().map((pageNumber) => {
          if (pageNumber === null) {
            return (
              <span
                key={Math.random()}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                ...
              </span>
            );
          }

          return (
            <button
              key={pageNumber}
              onClick={() => {
                handlePageChange(pageNumber);
              }}
              disabled={currentPage === pageNumber}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={() => {
            handlePageChange(currentPage + 1);
          }}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationExample;
