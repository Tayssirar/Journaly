import React, { useState } from 'react'
import { Dropdown, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { theadJournalViewData } from '../../data/TheadData'
import { usePrint } from '../../assets/context/PrintContext';
import ReactToPrint from 'react-to-print';


function TeacherJournal() {
    const [journals, setJournals] = useState([]);
    const [sort, setSortData] = useState(10);
    const [data, setData] = useState([]);
    const [activePage, setActivePage] = useState(0);
    const printRef = usePrint();

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
        const updatesData =  journals.filter(item =>{            
            let selectdata = `${item.num} ${item.classe} ${item.module}  ${item.journee} ${item.creationDate}${item.updateDate} ${item.status}`.toLowerCase();                          
            return  selectdata.includes(e.target.value.toLowerCase())
        });        
        setJournals([...updatesData]);
        setActivePage(0);        
    }
  
  return (
    <div>
        <Row>
            <div className='col-lg-12'>
                  <div className='card'>
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
                                  {theadJournalViewData.map((item, ind)=>(
                                    <th key={ind}
                                    >{item.heading}
                                    </th>
                                  ))}                                               
                                </tr>
                              </thead>
                              <tbody>
                                {journals.map((data, ind)=>(
                                  <tr key={ind}>
                                    <td>{data.num}</td>                                                    
                                    <td>{data.classe}</td>                                                    
                                    <td>{data.module}</td>                                                    
                                    <td>{data.journee}</td>
                                    <td>{data.Date}</td>                                                                                                                                                  
                                    <td>{data.comment}</td>
                                    <td>
                                      <ReactToPrint
                                          trigger={() => <button className="btn btn-light" type="button">
                                              <i className="fa fa-print" /> Imprimer
                                          </button>}
                                          content={() => printRef.current}
                                      />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            <div className='d-sm-flex text-center justify-content-between align-items-center mt-3'>
                              <div className='dataTables_info'>
                              Affichage de {' '}
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
            </div>
      </Row>
    </div>
  );
}
export default TeacherJournal
