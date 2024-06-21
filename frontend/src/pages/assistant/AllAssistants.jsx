import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import { Dropdown, Row, Tab, TabContainer } from 'react-bootstrap';
import ListGridView from '../../components/ListGridView';
import { Link } from 'react-router-dom';
import { theadAssistantData } from '../../data/TheadData';
import axios from 'axios';

function AllAssistants() {
  const [assistants, setAssistants] = useState([]);
  const [sort, setSortData] = useState(10);
  const [activePage, setActivePage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchInspectors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/assistants/all');
        setAssistants(response.data);
      } catch (error) {
        console.error('Error fetching assistants data:', error);
      }
    };

    fetchInspectors();
  }, []);

  const filteredInspectors = assistants.filter((assistant) => {
    const selectData = `${assistant.firstName} ${assistant.lastName} ${assistant.region} ${assistant.gender} ${assistant.phone} ${assistant.schools.map(school => school.name).join(' ')} ${assistant.email}`.toLowerCase();
    return selectData.includes(searchQuery.toLowerCase());
  });

  const paginatedAssistants = filteredInspectors.slice(activePage * sort, (activePage + 1) * sort);

  const pagination = Array(Math.ceil(filteredInspectors.length / sort))
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
      await axios.delete(`http://localhost:5000/api/assistants/${id}`);
      setAssistants(assistants.filter(assistant => assistant._id !== id));
    } catch (error) {
      console.error('Error deleting assistant:', error);
    }
  };

  return (
    <div>
      <PageTitle activeMenu={'Tous les assistants'} motherMenu={'Assistants'} />
      <Row>
        <TabContainer defaultActiveKey={'List'}>
          <ListGridView />
          <div className="col-lg-12">
            <Tab.Content className="row tab-content">
              <Tab.Pane eventKey="List" className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Tous les assistants</h4>
                    <Link to={"/AddAssistant"} className="btn btn-primary">+ Ajouter Un Nouveau</Link>
                  </div>
                  <div className="card-body">
                    <div className="dataTables_wrapper no-footer">
                      <div className="table-responsive">
                        <div className="justify-content-between d-sm-flex">
                          <div className="dataTables_length">
                            <label className="d-flex align-items-center">
                              Afficher{' '}
                              <Dropdown className="search-drop">
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
                              Chercher:{' '}
                              <input type="search" className="" placeholder="" onChange={handleSearchChange} />
                            </label>
                          </div>
                        </div>
                        <table className="display dataTable no-footer w-100">
                          <thead>
                            <tr>
                              {theadAssistantData.map((item, ind) => (
                                <th key={ind}>{item.heading}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                          {paginatedAssistants.map((assistant, ind) => (
                              <tr key={ind}>
                                <td><img className="rounded-circle" width="35" src={assistant.profile} alt="" /> </td>
                                <td>{assistant.firstName} {assistant.lastName}</td>
                                <td>{assistant.region}</td>
                                <td>{assistant.gender}</td>
                                <td>{new Date(assistant.birthDate).toLocaleDateString()}</td>
                                <td>{assistant.schools.map(school => school.name).join(', ')}</td>
                                <td>{assistant.phone}</td>
                                <td>{assistant.email}</td>
                                  <td>
                                    <Link to={`/UpdateAssistant/${assistant._id}`} className="btn btn-xs sharp btn-primary me-1">
                                      <i className="fa fa-pencil" />
                                    </Link>
                                    <button onClick={() => handleDelete(assistant._id)} className="btn btn-xs sharp btn-danger">
                                      <i className="fa fa-trash" />
                                    </button>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                        <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                          <div className="dataTables_info">
                            Affichage de {activePage * sort + 1} à{' '}
                            {Math.min((activePage + 1) * sort, assistants.length)} sur {assistants.length} entrées
                          </div>
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="example5_paginate"
                          >
                            <Link
                              className={`paginate_button previous ${
                                activePage === 0 ? 'disabled' : ''
                              }`}
                              to="#"
                              onClick={() =>
                                setActivePage((prev) => Math.max(prev - 1, 0))
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
                  {assistants.map((assistant, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                      <div className="card card-profile">
                        <div className="card-header justify-content-end pb-0 border-0">
                          <Dropdown>
                            <Dropdown.Toggle
                              as="button"
                              className="btn btn-link i-false"
                              type="button"
                            >
                              <span className="dropdown-dots fs--1"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu
                              align="end"
                              className="dropdown-menu dropdown-menu-right border py-0"
                            >
                              <div className="py-2">
                                <Link to={`/UpdateAssistant/${assistant._id}`} className="dropdown-item">
                                  Modifier
                                </Link>
                                <button
                                  onClick={() => handleDelete(assistant._id)}
                                  className="dropdown-item text-danger"
                                >
                                  Supprimer
                                </button>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="card-body pt-2">
                          <div className="text-center">
                            <div className="profile-photo">
                              <img
                                src={assistant.profile}
                                width="100"
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <ul className="list-group mb-3 list-group-flush">
                              {Object.keys(assistant).map((key, ind) => (
                                <li
                                  className="list-group-item px-0 d-flex justify-content-between"
                                  key={ind}
                                >
                                  <strong> {key}: </strong>
                                  {assistant[key]}
                                </li>
                              ))}
                            </ul>
                            <Link
                              to={`/AssistantProfile/${assistant._id}`}
                              className="btn btn-outline-primary btn-rounded mt-3 px-4"
                            >
                              Afficher Profil
                            </Link>
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

export default AllAssistants;
