import React, { useState, useEffect, useRef, useCallback } from 'react';
import PageTitle from '../../components/PageTitle';
import { Dropdown, Row, Tab, TabContainer } from 'react-bootstrap';
import ListGridView from '../../components/ListGridView';
import { Link } from 'react-router-dom';
import { theadEventData } from '../../data/TheadData';
import axios from 'axios';

function AllEvents() {
  const [events, setEvents] = useState([]);
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [sort, setSortData] = useState(10);
  const activePage = useRef(0);

  // Fetch all events on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events/all');
        setEvents(response.data);
        setDisplayedEvents(response.data.slice(0, sort));
      } catch (error) {
        console.error('There was an error fetching the events!', error);
      }
    };

    fetchEvents();
  }, [sort]);

  const chargeData = useCallback((first, sec) => {
    setDisplayedEvents(events.slice(first, sec));
  }, [events]);

  useEffect(() => {
    chargeData(activePage.current * sort, (activePage.current + 1) * sort);
  }, [events, sort, chargeData]);

  const pagination = Array(Math.ceil(events.length / sort))
    .fill()
    .map((_, i) => i + 1);

  const onClick = (i) => {
    activePage.current = i;
    chargeData(i * sort, (i + 1) * sort);
  };

  const DataSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredEvents = events.filter(item => {
      const eventData = `${item.title} ${item.eventType} ${item.startDate} ${item.endDate} ${item.details}`.toLowerCase();
      return eventData.includes(searchTerm);
    });
    setDisplayedEvents(filteredEvents.slice(0, sort));
    activePage.current = 0;
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      setEvents(events.filter(event => event._id !== id));
    } catch (error) {
      console.error('There was an error deleting the event!', error);
    }
  };

  return (
    <div>
      <PageTitle activeMenu={"Tous les évènements"} motherMenu={"Évènements"} />
      <Row>
        <TabContainer defaultActiveKey={"List"}>
          <ListGridView />
          <div className="col-lg-12">
            <Tab.Content className="row tab-content">
              <Tab.Pane eventKey="List" className="col-lg-12">
                <div className='card'>
                  <div className="card-header">
                    <h4 className="card-title">Tous les évènements </h4>
                    <Link to={"/AddEvent"} className="btn btn-primary">+ Ajouter Un Nouveau</Link>
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
                              {theadEventData.map((item, ind) => (
                                <th key={ind}>{item.heading}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {displayedEvents.map((data, ind) => (
                              <tr key={ind}>
                                <td>{data.title}</td>
                                <td>{data.eventType}</td>
                                <td>{data.startDate}</td>
                                <td>{data.endDate}</td>
                                <td>{data.details}</td>
                                <td>
                                  <Link to={`/UpdateEvent/${data._id}`} className="btn btn-xs sharp btn-primary me-1">
                                    <i className="fa fa-pencil" />
                                  </Link>
                                  <button onClick={() => handleDelete(data._id)} className="btn btn-xs sharp btn-danger">
                                    <i className="fa fa-trash" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className='d-sm-flex text-center justify-content-between align-items-center mt-3'>
                          <div className='dataTables_info'>
                            Affichage de {activePage.current * sort + 1} à{' '}
                            {events.length > (activePage.current + 1) * sort
                              ? (activePage.current + 1) * sort
                              : events.length}{' '}
                            sur {events.length} entrées
                          </div>
                          <div className='dataTables_paginate paging_simple_numbers' id='example5_paginate'>
                            <Link className='paginate_button previous disabled' to='#' onClick={() => activePage.current > 0 && onClick(activePage.current - 1)}>
                              Précédent
                            </Link>
                            <span>
                              {pagination.map((number, i) => (
                                <Link key={i} to='#' className={`paginate_button ${activePage.current === i ? 'current' : ''}`} onClick={() => onClick(i)}>
                                  {number}
                                </Link>
                              ))}
                            </span>
                            <Link className='paginate_button next' to='#' onClick={() => activePage.current + 1 < pagination.length && onClick(activePage.current + 1)}>
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
                  {displayedEvents.map((event, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                      <div className="card card-profile">
                        <div className="card-header justify-content-end pb-0 border-0">
                          <Dropdown>
                            <Dropdown.Toggle as="button" className="btn btn-link i-false" type="button">
                              <span className="dropdown-dots fs--1"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" className="dropdown-menu dropdown-menu-right border py-0">
                              <div className="py-2">
                                <Link to={`/UpdateEvent/${event._id}`} className="dropdown-item">Modifier</Link>
                                <button onClick={() => handleDelete(event._id)} className="dropdown-item text-danger">Supprimer</button>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="card-body pt-2">
                          <div className="text-center">
                            <ul className="list-group mb-3 list-group-flush">
                              {Object.keys(event).map((key, ind) => (
                                <li className="list-group-item px-0 d-flex justify-content-between" key={ind}>
                                  <strong>{key}:</strong> {event[key]}
                                </li>
                              ))}
                            </ul>
                            <Link to={`/EventProfile/${event._id}`} className="btn btn-outline-primary btn-rounded mt-3 px-4">Afficher Profil</Link>
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

export default AllEvents;
