import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import { Dropdown, Row, Tab, TabContainer } from 'react-bootstrap';
import ListGridView from '../../components/ListGridView';
import { Link } from 'react-router-dom';
import { theadTeacherData } from '../../data/TheadData';
import axios from 'axios';

function AllTeachers() {
  const [teachers, setTeachers] = useState([]);
  const [sort, setSortData] = useState(10);
  const [activePage, setActivePage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/teachers/');
        setTeachers(response.data);
      } catch (error) {
        console.error('Error fetching teachers data:', error);
      }
    };

    fetchTeachers();
  }, []);

  const filteredTeachers = teachers.filter((teacher) => {
    const selectData = `${teacher.prenom} ${teacher.nom} ${teacher.region} ${teacher.genre} ${teacher.telephone} ${teacher.email}`.toLowerCase();
    return selectData.includes(searchQuery.toLowerCase());
  });

  const paginatedTeachers = filteredTeachers.slice(activePage * sort, (activePage + 1) * sort);

  const pagination = Array(Math.ceil(filteredTeachers.length / sort))
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
      await axios.delete(`http://localhost:5000/api/teachers/${id}`);
      setTeachers(teachers.filter(teacher => teacher._id !== id));
    } catch (error) {
      console.error('Error deleting teacher:', error);
    }
  };

  return (
    <div>
      <PageTitle activeMenu={"Tous les enseignants"} motherMenu={"Enseignants"} />
      <Row>
        <TabContainer defaultActiveKey={"List"}>
          <ListGridView />
          <div className="col-lg-12">
            <Tab.Content className="row tab-content">
              <Tab.Pane eventKey="List" className="col-lg-12">
                <div className='card'>
                  <div className="card-header">
                    <h4 className="card-title">Tous les enseignants </h4>
                    <Link to={"/AddTeacher"} className="btn btn-primary">+ Ajouter Un Nouveau</Link>
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
                              {theadTeacherData.map((item, ind) => (
                                <th key={ind}>{item.heading}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {paginatedTeachers.map((teacher, ind) => (
                              <tr key={ind}>
                                <td>{teacher.prenom} {teacher.nom}</td>
                                <td>{teacher.region}</td>
                                <td>{teacher.genre}</td>
                                <td>{new Date(teacher.dateNaissance).toLocaleDateString()}</td>
                                <td>{teacher.diplome}</td>
                                <td>{teacher.telephone}</td>
                                <td>{teacher.email}</td>
                                <td>
                                  <Link to={`/UpdateTeacher/${teacher._id}`} className="btn btn-xs sharp btn-primary me-1"><i className="fa fa-pencil" /></Link>
                                  <Link onClick={() => handleDelete(teacher._id)} className="btn btn-xs sharp btn-danger"><i className="fa fa-trash" /></Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className='d-sm-flex text-center justify-content-between align-items-center mt-3'>
                          <div className='dataTables_info'>
                            Affichage de {activePage * sort + 1} à{' '}
                            {filteredTeachers.length > (activePage + 1) * sort
                              ? (activePage + 1) * sort
                              : filteredTeachers.length}{' '}
                            sur {filteredTeachers.length} entrées
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
                  {teachers.map((teacher, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                      <div className="card card-profile">
                        <div className="card-header justify-content-end pb-0 border-0">
                          <Dropdown>
                            <Dropdown.Toggle as="button" className="btn btn-link i-false" type="button">
                              <span className="dropdown-dots fs--1"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" className="dropdown-menu dropdown-menu-right border py-0">
                              <div className="py-2">
                                <Link to={`/UpdateTeacher/${teacher._id}`} className="dropdown-item">Modifier</Link>
                                <Link onClick={() => handleDelete(teacher._id)} className="dropdown-item text-danger">Supprimer</Link>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="card-body pt-2">
                          <div className="text-center">
                            <div className="profile-photo">
                              <img src={teacher.profile} width="100" className="img-fluid rounded-circle" alt="" />
                            </div>
                            <ul className="list-group mb-3 list-group-flush">
                              <li className="list-group-item px-0 d-flex justify-content-between"><strong>Prénom:</strong> {teacher.prenom}</li>
                              <li className="list-group-item px-0 d-flex justify-content-between"><strong>Nom:</strong> {teacher.nom}</li>
                              <li className="list-group-item px-0 d-flex justify-content-between"><strong>Région:</strong> {teacher.region}</li>
                              <li className="list-group-item px-0 d-flex justify-content-between"><strong>Genre:</strong> {teacher.genre}</li>
                              <li className="list-group-item px-0 d-flex justify-content-between"><strong>Date de naissance:</strong> {new Date(teacher.dateNaissance).toLocaleDateString()}</li>
                              <li className="list-group-item px-0 d-flex justify-content-between"><strong>Diplôme:</strong> {teacher.diplome}</li>
                              <li className="list-group-item px-0 d-flex justify-content-between"><strong>Téléphone:</strong> {teacher.telephone}</li>
                              <li className="list-group-item px-0 d-flex justify-content-between"><strong>Email:</strong> {teacher.email}</li>
                            </ul>
                            <Link to={`/TeacherProfile/${teacher._id}`} className="btn btn-outline-primary btn-rounded mt-3 px-4">Afficher Profil</Link>
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

export default AllTeachers;
