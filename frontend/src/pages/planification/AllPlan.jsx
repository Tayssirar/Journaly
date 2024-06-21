import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import { Dropdown, Row, Tab, TabContainer } from 'react-bootstrap';
import ListGridView from '../../components/ListGridView';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { theadPlanData } from '../../data/TheadData';

function AllPlan() {
    const [plans, setPlans] = useState([]);
    const [sort, setSortData] = useState(10);
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/plans/');
                setPlans(response.data);
            } catch (error) {
                console.error('Error fetching plans:', error);
            }
        };
        fetchPlans();
    }, []);

    const updateStatus = async (id, newStatus) => {
        try {
            await axios.put(`http://localhost:5000/api/plans/${id}`, { status: newStatus });
            setPlans(plans.map(plan => plan._id === id ? { ...plan, status: newStatus } : plan));
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const deletePlan = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/plans/${id}`);
            setPlans(plans.filter(plan => plan._id !== id));
        } catch (error) {
            console.error('Error deleting plan:', error);
        }
    };

    const chargeData = (first, sec) => {
        for (let i = 0; i < plans.length; ++i) {
            if (i >= first && i < sec) {
                plans[i].classList.remove('d-none');
            } else {
                plans[i].classList.add('d-none');
            }
        }
    };

    const onClick = (i) => {
        setActivePage(i);
        chargeData(i * sort, (i + 1) * sort);
    };

    const pagination = Array(Math.ceil(plans.length / sort)).fill().map((_, i) => i + 1);

    const DataSearch = (e) => {
        const updatesData = plans.filter(item => {
            let selectdata = `${item.num} ${item.classe} ${item.unite} ${item.module} ${item.creationDate} ${item.updateDate} ${item.status}`.toLowerCase();
            return selectdata.includes(e.target.value.toLowerCase());
        });
        setPlans([...updatesData]);
        setActivePage(0);
    };

    return (
        <div>
            <PageTitle activeMenu={"Toutes les planifications"} motherMenu={"Plan"} />
            <Row>
                <TabContainer defaultActiveKey={"List"}>
                    <ListGridView />
                    <div className="col-lg-12">
                        <Tab.Content className="row tab-content">
                            <Tab.Pane eventKey="List" className="col-lg-12">
                                <div className='card'>
                                    <div className="card-header">
                                        <h4 className="card-title">Toutes les planifications</h4>
                                        <Link to={"/AddPlan"} className="btn btn-primary">+ Ajouter Un Nouveau</Link>
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
                                                <table className='className="display dataTable no-footer w-100'>
                                                    <thead>
                                                        <tr>
                                                            {theadPlanData.map((item, ind) => (
                                                                <th key={ind}>{item.heading}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {plans.map((data, ind) => (
                                                            <tr key={ind}>
                                                                <td>{data.classe}</td>
                                                                <td>{data.subTheme}</td>
                                                                <td>
                                                                    {data.status}
                                                                    <button className='btn btn-warning' onClick={() => updateStatus(data._id, data.status === 'public' ? 'private' : 'public')}>
                                                                        {data.status === 'public' ? 'Set Private' : 'Set Public'}
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <Link to={`/UpdatePlan/${data._id}`} className="btn btn-xs sharp btn-primary me-1"><i className="fa fa-pencil" /></Link>
                                                                    <button onClick={() => deletePlan(data._id)} className="btn btn-xs sharp btn-danger"><i className="fa fa-trash" /></button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                <div className='d-sm-flex text-center justify-content-between align-items-center mt-3'>
                                                    <div className='dataTables_info'>
                                                        Affichage de {activePage * sort + 1} à{' '}
                                                        {plans.length > (activePage + 1) * sort
                                                            ? (activePage + 1) * sort
                                                            : plans.length}{' '}
                                                        sur {plans.length} entrées
                                                    </div>
                                                    <div className='dataTables_paginate paging_simple_numbers'>
                                                        <Link
                                                            className='paginate_button previous disabled'
                                                            to='#'
                                                            onClick={() => activePage > 0 && onClick(activePage - 1)}
                                                        >
                                                            Précédent
                                                        </Link>
                                                        <span>
                                                            {pagination.map((number, i) => (
                                                                <Link
                                                                    key={i}
                                                                    to='#'
                                                                    className={`paginate_button ${activePage === i ? 'current' : ''}`}
                                                                    onClick={() => onClick(i)}
                                                                >
                                                                    {number}
                                                                </Link>
                                                            ))}
                                                        </span>
                                                        <Link
                                                            className='paginate_button next'
                                                            to='#'
                                                            onClick={() => activePage + 1 < pagination.length && onClick(activePage + 1)}
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
                        </Tab.Content>
                    </div>
                </TabContainer>
            </Row>
        </div>
    );
}

export default AllPlan;
