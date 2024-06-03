import React, { useEffect, useState } from 'react';
import { Dropdown, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { theadExamViewData } from '../../data/TheadData';
import { usePrint } from '../../assets/context/PrintContext';
import ReactToPrint from 'react-to-print';
import FeedbackModal from '../FeedbackModal';

function TeacherExam({ userRole }) {
    const [exams, setExams] = useState([]);
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
                { num: 1, classe: 'Class 1', module: 'Module 1', journee: '2023-05-01', Date: '2023-06-01', comment: 'Initial comment 1' },
                { num: 2, classe: 'Class 2', module: 'Module 2', journee: '2023-05-02', Date: '2023-06-02', comment: 'Initial comment 2' },
                { num: 3, classe: 'Class 3', module: 'Module 3', journee: '2023-05-03', Date: '2023-06-03', comment: 'Initial comment 3' },
                // Add more static data as needed
            ];
            setExams(staticData);
            setFilteredData(staticData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        chargeData(0, sort);
    }, [filteredData, sort]);

    const chargeData = (first, sec) => {
        setFilteredData(exams.slice(first, sec));
    };

    const pagination = Array(Math.ceil(exams.length / sort))
        .fill()
        .map((_, i) => i + 1);

    const onClick = (i) => {
        setActivePage(i);
        chargeData(i * sort, (i + 1) * sort);
    };

    const DataSearch = (e) => {
        const updatesData = exams.filter(item => {
            let selectdata = `${item.num} ${item.classe} ${item.module} ${item.journee} ${item.Date} ${item.comment}`.toLowerCase();
            return selectdata.includes(e.target.value.toLowerCase());
        });
        setExams(updatesData);
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
        const updatedExams = [...exams];
        const globalIndex = activePage * sort + currentIndex;
        updatedExams[globalIndex].comment = currentComment;
        setExams(updatedExams);
        setFilteredData(updatedExams.slice(activePage * sort, (activePage + 1) * sort));
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
                                                {theadExamViewData.map((item, ind) => (
                                                    <th key={ind}>{item.heading}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData.map((data, ind) => (
                                                <tr key={ind}>
                                                    <td>{data.num}</td>
                                                    <td>{data.classe}</td>
                                                    <td>{data.module}</td>
                                                    <td>{data.journee}</td>
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

export default TeacherExam;
