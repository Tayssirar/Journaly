import React, { useEffect, useState } from 'react';
import { Dropdown, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { theadRapportViewData } from '../../data/TheadData';
import { usePrint } from '../../assets/context/PrintContext';
import ReactToPrint from 'react-to-print';
import FeedbackModal from '../FeedbackModal';

function TeacherRapport({ userRole }) {
    const [rapports, setRapports] = useState([]);
    const [sort, setSortData] = useState(10);
    const [filteredData, setFilteredData] = useState([]);
    const [activePage, setActivePage] = useState(0);
    const printRef = usePrint();
    const [showModal, setShowModal] = useState(false);
    const [currentComment, setCurrentComment] = useState('');
    const [currentIndex, setCurrentIndex] = useState(null);

    useEffect(() => {
        // Replace with your data fetching logic
        const fetchData = async () => {
            const staticData = [
                { num: 1, enseignant: 'Enseignant 1', ecole: 'École 1', Date: '2023-06-01', comment: 'Initial comment 1' },
                { num: 2, enseignant: 'Enseignant 2', ecole: 'École 2', Date: '2023-06-02', comment: 'Initial comment 2' },
                { num: 3, enseignant: 'Enseignant 3', ecole: 'École 3', Date: '2023-06-03', comment: 'Initial comment 3' },
                // Add more static data as needed
            ];
            setRapports(staticData);
            setFilteredData(staticData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        chargeData(0, sort);
    }, [filteredData, sort]);

    const chargeData = (first, sec) => {
        setFilteredData(rapports.slice(first, sec));
    };

    const pagination = Array(Math.ceil(rapports.length / sort))
        .fill()
        .map((_, i) => i + 1);

    const onClick = (i) => {
        setActivePage(i);
        chargeData(i * sort, (i + 1) * sort);
    };

    const DataSearch = (e) => {
        const updatesData = rapports.filter(item => {
            let selectdata = `${item.num} ${item.enseignant} ${item.ecole} ${item.Date} ${item.comment}`.toLowerCase();
            return selectdata.includes(e.target.value.toLowerCase());
        });
        setRapports(updatesData);
        setActivePage(0);
        chargeData(0, sort);
    };

    const handleShowModal = (index) => {
        setCurrentIndex(index);
        setCurrentComment(filteredData[index].comment);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const handleSaveComment = () => {
        const updatedRapports = [...rapports];
        const globalIndex = activePage * sort + currentIndex;
        updatedRapports[globalIndex].comment = currentComment;
        setRapports(updatedRapports);
        setFilteredData(updatedRapports.slice(activePage * sort, (activePage + 1) * sort));
        setShowModal(false);
    };

    return (
        <div>
            <Row>
                <div className="col-lg-12">
                    <div className='card'>
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
                                                    onChange={DataSearch}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <table className='display dataTable no-footer w-100'>
                                        <thead>
                                            <tr>
                                                {theadRapportViewData.map((item, ind) => (
                                                    <th key={ind}>{item.heading}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData.map((data, ind) => (
                                                <tr key={ind}>
                                                    <td>{data.num}</td>
                                                    <td>{data.enseignant}</td>
                                                    <td>{data.ecole}</td>
                                                    <td>{data.Date}</td>
                                                    <td>
                                                        <Button variant="primary" onClick={() => handleShowModal(ind)}>
                                                            Feedback
                                                        </Button>
                                                    </td>
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
                                            Affichage de{' '}
                                            {filteredData.length > (activePage + 1) * sort
                                                ? (activePage + 1) * sort
                                                : filteredData.length}{' '}
                                            sur {filteredData.length}  entrées
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
                                                        className={`paginate_button  ${activePage === i ? 'current' : ''} `}
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
                </div>
            </Row>

            <FeedbackModal
                show={showModal}
                handleClose={handleCloseModal}
                comment={currentComment}
                setComment={setCurrentComment}
                userRole={userRole}
                handleSave={handleSaveComment}
            />
        </div>
    );
}

export default TeacherRapport;
