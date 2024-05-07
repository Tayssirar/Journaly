import React from 'react';
import { Nav, Pagination } from 'react-bootstrap';

function JournePagination({ activePage, handlePageChange }) {
  const pag = (size, gutter, variant, bg, circle) => (
    <Pagination
      size={size}
      className={`mt-2 ${gutter ? 'pagination-gutter' : ''} ${variant && `pagination-${variant}`} ${
        !bg && 'no-bg'
      } ${circle && 'pagination-circle'}`}
    >
      <Pagination.Item onClick={() => handlePageChange(activePage - 1)} disabled={activePage === 1}>
        <i className="la la-angle-left" />
      </Pagination.Item>
      {[...Array(8)].map((_, index) => (
        <Pagination.Item
          key={index + 1}
          active={index + 1 === activePage}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      <Pagination.Item onClick={() => handlePageChange(activePage + 1)} disabled={activePage === 8}>
        <i className="la la-angle-right" />
      </Pagination.Item>
    </Pagination>
  );

  return (
    <div>
      <Nav style={{ display: 'flex', justifyContent: 'center' }}>
        {pag('sm', true, 'warning', true, false)}
      </Nav>
      <h4 className='mb-3 mt-3'>Journée {activePage}</h4>
    </div>
  );
}

export default JournePagination;
