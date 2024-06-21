import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/PageTitle';
import { Dropdown, Row, Tab, TabContainer } from 'react-bootstrap';
import ListGridView from '../../components/ListGridView';
import { Link } from 'react-router-dom';
import { theadRapportData } from '../../data/TheadData';
import axios from 'axios';

function AllRapports() {
  const [rapports, setRapports] = useState([]);
  const [sort, setSortData] = useState(10);
  const [activePage, setActivePage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchRapports = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/rapports');
        setRapports(response.data);
      } catch (error) {
        console.error('Error fetching rapports data:', error);
      }
    };

    fetchRapports();
  }, []);

  const filteredRapports = rapports.filter((rapport) => {
    const selectData = `${rapport.numRapport} ${rapport.teacherName} ${rapport.school} ${rapport.date} ${rapport.updateDate} ${rapport.status}`.toLowerCase();
    return selectData.includes(searchQuery.toLowerCase());
  });

  const paginatedRapports = filteredRapports.slice(activePage * sort, (activePage + 1) * sort);

  const pagination = Array(Math.ceil(filteredRapports.length / sort))
    .fill()
    .map((_, i) => i + 1);

  const onClick = (i) => {
    setActivePage(i);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setActivePage(0); // Reset to first page on search
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/rapports/${id}`);
      setRapports(rapports.filter(rapport => rapport._id !== id));
    } catch (error) {
      console.error('Error deleting rapport:', error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/rapports/${id}`, { status: newStatus });
      setRapports(rapports.map(rapport => rapport._id === id ? response.data : rapport));
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div>
      <PageTitle activeMenu={"Tous les rapports"} motherMenu={"Rapport"} />
      <Row>
        <TabContainer defaultActiveKey={"List"}>
          <ListGridView />
          <div className="col-lg-12">
            <Tab.Content className="row tab-content">
              <Tab.Pane eventKey="List" className="col-lg-12">
                <div className='card'>
                  <div className="card-header">
                    <h4 className="card-title">Tous les rapports </h4>
                    <Link to={"/AddRapport"} className="btn btn-primary">+ Ajouter Un Nouveau</Link>
                  </div>
                  <div className='card-body'>
                    <div className='dataTables_wrapper no-footer'>
                      <div className='table-responsive'>
                        <div className="justify-content-between d-sm-flex">
                          <div className='dataTables_length'>
                            <label className='d-flex align-items-center'>
                              Afficher
                              <Dropdown className='search-drop'>
                                <Dropdown.Toggle as="div" className="search-drop-btn">
                                  {sort}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item onClick={() => setSortData(10)}>10</Dropdown.Item>
                                  <Dropdown.Item onClick={() => setSortData(20)}>20</Dropdown.Item>
                                  <Dropdown.Item onClick={() => setSortData(30)}>30</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              entrées
                            </label>
                          </div>
                          <div className="dataTables_filter">
                            <label>
                              Chercher:
                              <input type="search"
                                className=""
                                placeholder=""
                                onChange={handleSearchChange}
                              />
                            </label>
                          </div>
                        </div>
                        <table className='display dataTable no-footer w-100'>
                          <thead>
                            <tr>
                              {theadRapportData.map((item, ind) => (
                                <th key={ind}>{item.heading}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {paginatedRapports.map((data, ind) => (
                              <tr key={ind}>
                                <td>{data.numRapport}</td>
                                <td>{data.teacherName}</td>
                                <td>{data.school}</td>
                                <td>{new Date(data.date).toLocaleDateString()}</td>
                                <td>{data.updateDate ? new Date(data.updateDate).toLocaleDateString() : 'N/A'}</td>
                                <td>
                                  <select value={data.status} onChange={(e) => handleStatusChange(data._id, e.target.value)}>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                  </select>
                                </td>
                                <td>
                                  <Link to={`/UpdateRapport/${data._id}`} className="btn btn-xs sharp btn-primary me-1"><i className="fa fa-pencil" /></Link>
                                  <button onClick={() => handleDelete(data._id)} className="btn btn-xs sharp btn-danger"><i className="fa fa-trash" /></button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className='d-sm-flex text-center justify-content-between align-items-center mt-3'>
                          <div className='dataTables_info'>
                            Affichage de {activePage * sort + 1} à{' '}
                            {filteredRapports.length > (activePage + 1) * sort
                              ? (activePage + 1) * sort
                              : filteredRapports.length}{' '}
                            sur {filteredRapports.length} entrées
                          </div>
                          <div
                            className='dataTables_paginate paging_simple_numbers'
                            id='example5_paginate'
                          >
                            <Link
                              className='paginate_button previous disabled'
                              to='#'
                              onClick={() =>
                                activePage > 0 && onClick(activePage - 1)
                              }
                            >
                              Précédent
                            </Link>
                            <span>
                              {pagination.map((number, i) => (
                                <Link
                                  key={i}
                                  to='#'
                                  className={`paginate_button  ${activePage === i ? 'current' : ''}`}
                                  onClick={() => onClick(i)}
                                >
                                  {number}
                                </Link>
                              ))}
                            </span>
                            <Link
                              className='paginate_button next'
                              to='#'
                              onClick={() =>
                                activePage + 1 < pagination.length &&
                                onClick(activePage + 1)
                              }
                            >
                              Suivant
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Grid" className="col-lg-12">
                <div className="row">
                  {rapports.map((rapport, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                      <div className="card card-profile">
                        <div className="card-header justify-content-end pb-0 border-0">
                          <Dropdown>
                            <Dropdown.Toggle as="button" className="btn btn-link i-false" type="button">
                              <span className="dropdown-dots fs--1"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" className="dropdown-menu dropdown-menu-right border py-0">
                              <div className="py-2">
                                <Link to={`/UpdateRapport/${rapport._id}`} className="dropdown-item">Modifier</Link>
                                <button onClick={() => handleDelete(rapport._id)} className="dropdown-item text-danger">Supprimer</button>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="card-body pt-2">
                          <div className="text-center">
                            <ul className="list-group mb-3 list-group-flush">
                              {Object.keys(rapport).map((key, ind) => (
                                <li className="list-group-item px-0 d-flex justify-content-between" key={ind}>
                                  <strong>{key}:</strong>{rapport[key].toString()}
                                </li>
                              ))}
                            </ul>
                            <Link to={`/UpdateRapport/${rapport._id}`} className="btn btn-outline-primary btn-rounded mt-3 px-4">Afficher</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </TabContainer>
      </Row>
    </div>
  );
}

export default AllRapports;
