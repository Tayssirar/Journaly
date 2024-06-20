import React from 'react';
import { Link } from 'react-router-dom';

function PageTitle({ activeMenu, motherMenu }) {
  return (
    <div className="page-title">
      <h4>{activeMenu}</h4>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="#">{motherMenu}</Link>
        </li>
        <li className="breadcrumb-item active">{activeMenu}</li>
      </ol>
    </div>
  );
}

export default PageTitle;
