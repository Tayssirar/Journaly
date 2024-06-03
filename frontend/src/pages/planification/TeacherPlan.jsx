import React, { useEffect, useState } from 'react';
import { Dropdown, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { theadPlanViewData } from '../../data/TheadData';
import { usePrint } from '../../assets/context/PrintContext';
import ReactToPrint from 'react-to-print';
import axios from 'axios';
import FeedbackModal from '../../components/FeedbackModal';

function TeacherPlan({ userRole }) {
    const [plans, setPlans] = useState([]);
    const [sort, setSortData] = useState(10);
    const [data, setData] = useState([]);
    const [activePage, setActivePage] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [currentComment, setCurrentComment] = useState('');
    const [currentIndex, setCurrentIndex] = useState(null);
    const printRef = usePrint();

    // Static data for testing
    useEffect(() => {
        const staticData = [
            { num: 1, classe: 'Class 1', unite: 'Unit 1', module: 'Module 1' },
            { num: 2, classe: 'Class 2', unite: 'Unit 2', module: 'Module 2' },
            { num: 3, classe: 'Class 3', unite: 'Unit 3', module: 'Module 3' },
            // Add more static data as needed
        ];
        setPlans(staticData);
        setData(staticData);
    }, []);

    // Fetch comments from API (hypothetical endpoint)
    useEffect(() => {
        axios.get('/api/comments')
            .then(response => {
                const updatedData = plans.map(plan => {
                    const commentData = response.data.find(comment => comment.num === plan.num);
                    return { ...plan, comment: commentData ? commentData.comment : plan.comment };
                });
                setPlans(updatedData);
                setData(updatedData);
            })
            .catch(error => console.error('Error fetching comments:', error));
    }, []);

    const handleCommentChange = (index, newComment) => {
        const updatedPlans = [...plans];
        updatedPlans[index].comment = newComment;
        setPlans(updatedPlans);
        setData(updatedPlans);
    };

    const chargeData = (first, sec) => {
        const items = document.querySelectorAll('.data-item');
        items.forEach((item, index) => {
            if (index >= first && index < sec) {
                item.classList.remove('d-none');
            } else {
                item.classList.add('d-none');
            }
        });
    };

    useEffect(() => {
        chargeData(0, sort);
    }, [data, sort]);

    let pagination = Array(Math.ceil(data.length / sort))
        .fill()
        .map((_, i) => i + 1);

    const onClick = (i) => {
        setActivePage(i);
        chargeData(i * sort, (i + 1) * sort);
    };

    function DataSearch(e) {
        const updatesData = plans.filter(item => {
            let selectdata = `${item.num} ${item.classe} ${item.unite} ${item.module} ${item.comment}`.toLowerCase();
            return selectdata.includes(e.target.value.toLowerCase());
        });
        setPlans([...updatesData]);
        setActivePage(0);
    }

    const handleShowModal = (index) => {
        setCurrentIndex(index);
        setCurrentComment(plans[index].comment);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const handleSaveComment = () => {
        handleCommentChange(currentIndex, currentComment);
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
                                                {theadPlanViewData.map((item, ind) => (
                                                    <th key={ind}>{item.heading}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {plans.map((data, ind) => (
                                                <tr key={ind} className="data-item">
                                                    <td>{data.num}</td>
                                                    <td>{data.classe}</td>
                                                    <td>{data.unite}</td>
                                                    <td>{data.module}</td>
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
                                            {data.length > (activePage + 1) * sort
                                                ? (activePage + 1) * sort
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

export default TeacherPlan;
