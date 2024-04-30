import React from 'react';
import { Link } from 'react-router-dom';

const TeacherItem = ({ data }) => (
  <tr>
    <td><img className="rounded-circle" width="35" src={data.profile} alt="" /></td>
    <td>{data.nom}</td>
    <td>{data.region}</td>
    <td>{data.sexe}</td>
    <td>{data.diplome}</td>
    <td>{data.nomination}</td>
    <td><Link to={"#"}><strong>{data.mobile}</strong></Link></td>
    <td><Link to={"#"}><strong>{data.email}</strong></Link></td>
    <td>
      <Link to={"#"} className="btn btn-xs sharp btn-primary me-1"><i className="fa fa-pencil" /></Link>
      <Link to={"#"} className="btn btn-xs sharp btn-danger"><i className="fa fa-trash" /></Link>
    </td>
  </tr>
);

export default TeacherItem;