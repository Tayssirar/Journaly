import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/PageTitle'
import { Dropdown, Row, Tab, TabContainer } from 'react-bootstrap'
import ListGridView from '../../components/ListGridView'
import { Link } from 'react-router-dom'
import { theadTeacherData } from '../../components/UserTheadData'


function AllTeachers() {
const [teachers, setTeachers]= useState ([]);
const [sort, setSortData] = useState(10);
const [data, setData] = useState([]);
const [activePage, setActivePage] = useState(0);

const chargeData = (first, sec) => {
  for (var i = 0; i < data.length; ++i) {
    if (i >= first && i < sec) {
      data[i].classList.remove('d-none')
    } else {
      data[i].classList.add('d-none')
    }
  }
}
activePage.current === 0 && chargeData(0, sort)

let pagination = Array(Math.ceil(data.length / sort))
  .fill()
  .map((_, i) => i + 1)


const onClick = (i) => {
  activePage.current = i
  chargeData(activePage.current * sort, (activePage.current + 1) * sort)
}
  function DataSearch(e){  
    const updatesDate =  teachers.filter(item =>{            
        let selectdata = `${item.nom} ${item.department} ${item.sexe} ${item.join} ${item.education} ${item.mobile}`.toLowerCase();                          
        return  selectdata.includes(e.target.value.toLowerCase())
    });        
    setTeachers([...updatesDate]);
    setActivePage(0);        
}
  
  return (
    <div>
        <PageTitle activeMenu={"Tous les enseignants"} motherMenu={"Enseignants"}/>
        <Row>
          <TabContainer defaultActiveKey={"List"}>
            <ListGridView/>
            <div className="col-lg-12">
              <Tab.Content className="row tab-content">
                <Tab.Pane eventKey="List" className="col-lg-12">
                  <div className='card'>
                    <div className="card-header">
                      <h4 className="card-title">Tous les enseignants </h4>
                      <Link to={"/AddTeacher"} className="btn btn-primary">+ Ajouter Un Nouveau</Link>
                    </div>
                    <div className='card-body'>
                      <div  className='dataTables_wrapper no-footer'>
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
                                    <Dropdown.Item onClick={()=>setSortData('10')}>10</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>setSortData('20')}>20</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>setSortData('30')}>30</Dropdown.Item>
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
                          <table  className='className="display dataTable no-footer w-100'>
                              <thead>
                                <tr>                                                
                                  {theadTeacherData.map((item, ind)=>(
                                    <th key={ind}
                                    >{item.heading}
                                    </th>
                                  ))}                                               
                                </tr>
                              </thead>
                              <tbody>
                                {teachers.map((data, ind)=>(
                                  <tr key={ind}>
                                    <td><img className="rounded-circle" width="35" src={data.profile} alt="" /> </td>                                                                                                                       
                                    <td>{data.nom}</td>                                                    
                                    <td>{data.region}</td>                                                    
                                    <td>{data.sexe}</td>                                                    
                                    <td>{data.diplome}</td>
                                    <td>{data.nomination}</td>                                                                                                                                                  
                                    <td>{data.mobile}</td>
                                    <td>{data.email}</td>
                                    <td>
                                      <Link to={"/UpdateTeacher"} className="btn btn-xs sharp btn-primary me-1"><i className="fa fa-pencil" /></Link>
                                      <Link to={"/DeleteTeacher"} className="btn btn-xs sharp btn-danger"><i className="fa fa-trash" /></Link>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            <div className='d-sm-flex text-center justify-content-between align-items-center mt-3'>
                                                    <div className='dataTables_info'>
                                                    Affichage de {activePage.current * sort + 1} à{' '}
                                                        {data.length > (activePage.current + 1) * sort
                                                            ? (activePage.current + 1) * sort
                                                            : data.length}{' '}
                                                        sur {data.length}  entrées
                                                    </div>
                                                    <div
                                                        className='dataTables_paginate paging_simple_numbers'
                                                        id='example5_paginate'
                                                    >
                                                        <Link
                                                            className='paginate_button previous disabled'
                                                            to='#'
                                                            onClick={() =>
                                                                activePage.current > 0 && onClick(activePage.current - 1)
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
                                                                        activePage.current === i ? 'current' : ''
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
                                                                activePage.current + 1 < pagination.length &&
                                                                onClick(activePage.current + 1)
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
                                <Link to={"/UpdateTeacher"} className="dropdown-item">Modifier</Link>
                                <Link to={"/DeleteTeacher"} className="dropdown-item text-danger">Supprimer</Link>
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
                              {Object.keys(teacher).map((key, ind) => (
                                <li className="list-group-item px-0 d-flex justify-content-between" key={ind}>
                                 <strong> {key}: </strong>{teacher[key]}
                                </li>
                              ))}
                            </ul>
                            <Link to={"/TeacherProfile"} className="btn btn-outline-primary btn-rounded mt-3 px-4">Afficher Profil</Link>
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
export default AllTeachers
