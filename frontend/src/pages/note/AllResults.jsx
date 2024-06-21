import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import { Dropdown, Row, Tab, TabContainer } from 'react-bootstrap';
import ListGridView from '../../components/ListGridView';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { theadResultsData } from '../../data/TheadData';

function AllResults() {
  const [results, setResults] = useState([]);
  const [sort, setSortData] = useState(10);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/notes');
      setResults(response.data);
    } catch (err) {
      console.error('Error fetching results:', err);
    }
  };

  const chargeData = (first, sec) => {
    for (var i = 0; i < results.length; ++i) {
      if (i >= first && i < sec) {
        results[i].classList.remove('d-none')
      } else {
        results[i].classList.add('d-none')
      }
    }
  }
  activePage === 0 && chargeData(0, sort)

  let pagination = Array(Math.ceil(results.length / sort))
    .fill()
    .map((_, i) => i + 1)

  const onClick = (i) => {
    setActivePage(i)
    chargeData(activePage * sort, (activePage + 1) * sort)
  }

  function DataSearch(e) {
    const updatesData = results.filter(item => {
      let selectdata = `${item.classe} ${item.groupe} ${item.evaluationType} ${item.noteType} ${item.student}`.toLowerCase();
      return selectdata.includes(e.target.value.toLowerCase())
    });
    setResults([...updatesData]);
    setActivePage(0);
  }

  return (
    <div>
      <PageTitle activeMenu={"Toutes les résultats"} motherMenu={"Note"} />
      <Row>
        <TabContainer defaultActiveKey={"List"}>
          <ListGridView />
          <div className="col-lg-12">
            <Tab.Content className="row tab-content">
              <Tab.Pane eventKey="List" className="col-lg-12">
                <div className='card'>
                  <div className="card-header">
                    <h4 className="card-title">Toutes les résultats </h4>
                    <Link to={"/AddNote"} className="btn btn-primary">+ Ajouter Un Nouveau</Link>
                  </div>
                  <div className='card-body'>
                    <div className='dataTables_wrapper no-footer'>
                      <div className='table-responsive '>
                        <div className="justify-content-between d-sm-flex">
                          <div className='dataTables_length'>
                            <label className='d-flex align-items-center'>
                              Afficher
                              <Dropdown className='search-drop'>
                                <Dropdown.Toggle as="div" className="search-drop-btn">
                                  {sort}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item onClick={() => setSortData('10')}>10</Dropdown.Item>
                                  <Dropdown.Item onClick={() => setSortData('20')}>20</Dropdown.Item>
                                  <Dropdown.Item onClick={() => setSortData('30')}>30</Dropdown.Item>
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
                                onChange={DataSearch}
                              />
                            </label>
                          </div>
                        </div>
                        <table className='className="display dataTable no-footer w-100'>
                          <thead>
                            <tr>
                              {theadResultsData.map((item, ind) => (
                                <th key={ind}
                                >{item.heading}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {results.map((data, ind) => (
                              <tr key={ind}>
                                <td>{data.classe}</td>
                                <td>{data.groupe}</td>
                                <td>{data.evaluationType}</td>
                                <td>{data.noteType}</td>
                                <td>{data.student}</td>
                                <td>{data.total}</td>
                                <td>
                                  <Link to={`/UpdateNote/${data._id}`} className="btn btn-xs sharp btn-primary me-1"><i className="fa fa-pencil" /></Link>
                                  <Link to={`/DeleteNote/${data._id}`} className="btn btn-xs sharp btn-danger"><i className="fa fa-trash" /></Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className='d-sm-flex text-center justify-content-between align-items-center mt-3'>
                          <div className='dataTables_info'>
                            Affichage de {activePage * sort + 1} à{' '}
                            {results.length > (activePage + 1) * sort
                              ? (activePage + 1) * sort
                              : results.length}{' '}
                            sur {results.length} entrées
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
                                  className={`paginate_button  ${
                                    activePage === i ? 'current' : ''
                                    } `}
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
                  {results.map((Note, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                      <div className="card card-profile">
                        <div className="card-header justify-content-end pb-0 border-0">
                          <Dropdown>
                            <Dropdown.Toggle as="button" className="btn btn-link i-false" type="button">
                              <span className="dropdown-dots fs--1"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" className="dropdown-menu dropdown-menu-right border py-0">
                              <div className="py-2">
                                <Link to={`/UpdateNote/${Note._id}`} className="dropdown-item">Modifier</Link>
                                <Link to={`/DeleteNote/${Note._id}`} className="dropdown-item text-danger">Supprimer</Link>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="card-body pt-2">
                          <div className="text-center">
                            <ul className="list-group mb-3 list-group-flush">
                              {Object.keys(Note).map((key, ind) => (
                                <li className="list-group-item px-0 d-flex justify-content-between" key={ind}>
                                  <strong> {key}: </strong>{Note[key]}
                                </li>
                              ))}
                            </ul>
                            <Link to={`/UpdateNote/${Note._id}`} className="btn btn-outline-primary btn-rounded mt-3 px-4">Afficher</Link>
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

export default AllResults;
