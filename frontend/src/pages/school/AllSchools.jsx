import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/PageTitle';
import { Dropdown, Row, Tab, TabContainer } from 'react-bootstrap';
import ListGridView from '../../components/ListGridView';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { theadSchoolData } from '../../data/TheadData';

function AllSchools() {
  const [schools, setSchools] = useState([]);
  const [sort, setSortData] = useState(10);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/schools');
      setSchools(response.data);
    } catch (error) {
      console.error('Error fetching schools:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/schools/${id}`);
      setSchools(schools.filter(school => school._id !== id));
    } catch (error) {
      console.error('Error deleting school:', error);
    }
  };

  const DataSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredData = schools.filter((item) => {
      const data = `${item.name} ${item.address}`.toLowerCase();
      return data.includes(searchText);
    });
    setSchools(filteredData);
  };

  const chargeData = (first, sec) => {
    const paginatedData = schools.slice(first, sec);
    return paginatedData;
  };

  let pagination = Array(Math.ceil(schools.length / sort))
    .fill()
    .map((_, i) => i + 1);

  const onClick = (i) => {
    setActivePage(i);
  };

  return (
    <div>
      <PageTitle activeMenu={"Tous les écoles"} motherMenu={"École"} />
      <Row>
        <TabContainer defaultActiveKey={"List"}>
          <ListGridView />
          <div className="col-lg-12">
            <Tab.Content className="row tab-content">
              <Tab.Pane eventKey="List" className="col-lg-12">
                <div className='card'>
                  <div className="card-header">
                    <h4 className="card-title">Tous les écoles</h4>
                    <Link to={"/AddSchool"} className="btn btn-primary">+ Ajouter Une Nouvelle</Link>
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
                              <input type="search" className="" placeholder="" onChange={DataSearch} />
                            </label>
                          </div>
                        </div>
                        <table className='display dataTable no-footer w-100'>
                          <thead>
                            <tr>
                              {theadSchoolData.map((item, ind) => (
                                <th key={ind}>{item.heading}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {chargeData(activePage * sort, (activePage + 1) * sort).map((data, ind) => (
                              <tr key={ind}>
                                <td>{data.name}</td>
                                <td>{data.address}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>
                                  <Link to={`/UpdateSchool/${data._id}`} className="btn btn-xs sharp btn-primary me-1"><i className="fa fa-pencil" /></Link>
                                  <button onClick={() => handleDelete(data._id)} className="btn btn-xs sharp btn-danger"><i className="fa fa-trash" /></button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className='d-sm-flex text-center justify-content-between align-items-center mt-3'>
                          <div className='dataTables_info'>
                            Affichage de {activePage * sort + 1} à{' '}
                            {schools.length > (activePage + 1) * sort
                              ? (activePage + 1) * sort
                              : schools.length}{' '}
                            sur {schools.length} entrées
                          </div>
                          <div className='dataTables_paginate paging_simple_numbers'>
                            <Link className='paginate_button previous disabled' to='#' onClick={() => activePage > 0 && onClick(activePage - 1)}>Précédent</Link>
                            <span>
                              {pagination.map((number, i) => (
                                <Link key={i} to='#' className={`paginate_button ${activePage === i ? 'current' : ''}`} onClick={() => onClick(i)}>{number}</Link>
                              ))}
                            </span>
                            <Link className='paginate_button next' to='#' onClick={() => activePage + 1 < pagination.length && onClick(activePage + 1)}>Suivant</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Grid" className="col-lg-12">
                <div className="row">
                  {schools.map((school, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                      <div className="card card-profile">
                        <div className="card-header justify-content-end pb-0 border-0">
                          <Dropdown>
                            <Dropdown.Toggle as="button" className="btn btn-link i-false" type="button">
                              <span className="dropdown-dots fs--1"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" className="dropdown-menu dropdown-menu-right border py-0">
                              <div className="py-2">
                                <Link to={`/UpdateSchool/${school._id}`} className="dropdown-item">Modifier</Link>
                                <button onClick={() => handleDelete(school._id)} className="dropdown-item text-danger">Supprimer</button>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="card-body pt-2">
                          <div className="text-center">
                            <div className="profile-photo">
                              <img src={school.profile} width="100" className="img-fluid rounded-circle" alt="" />
                            </div>
                            <ul className="list-group mb-3 list-group-flush">
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <strong>Nom:</strong>{school.name}
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <strong>Adresse:</strong>{school.address}
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <strong>Téléphone:</strong>{school.phone}
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <strong>Email:</strong>{school.email}
                              </li>
                            </ul>
                            <Link to={`/SchoolProfile/${school._id}`} className="btn btn-outline-primary btn-rounded mt-3 px-4">Afficher Profil</Link>
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

export default AllSchools;
