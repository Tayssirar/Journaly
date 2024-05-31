import React, { useState, useRef } from 'react';
import { Card, CardBody, CardHeader, Table } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import { useLocation } from 'react-router-dom';
import CustomJoditEditor from '../../../components/CustomJoditEditor';
import '../../../assets/css/fonts/customFonts.css';  // Ensure CSS is imported here

const Langue = () => {
    const location = useLocation();
    const { selectedExam } = location.state || {};

    console.log("🚀 ~ Langue ~ selectedExam:", selectedExam);

    const [content, setContent] = useState('');
    const componentRef = useRef();
    const editorRef = useRef(null);

    if (!selectedExam) {
        return <div>Error: No exam selected</div>;
    }

    return (
        <div className='doc-container'>
            <React.Fragment>
                <div className='exam-area'>
                    <Card>
                        <CardHeader>
                            <ReactToPrint
                                trigger={() => <button className="btn btn-light" type="button">
                                    <i className="fa fa-print" /> Imprimer
                                </button>}
                                content={() => componentRef.current}
                            />
                        </CardHeader>
                        <CardBody>
                            <CustomJoditEditor content={content} setContent={setContent} editorRef={editorRef} />
                        </CardBody>
                    </Card>
                </div>
                <div className='exam-preview'>
                    <Card>
                        <CardBody ref={componentRef}>
                            <Table responsive bordered className='exam-table'>
                                <thead className="text-center">
                                    <tr>
                                        <th>
                                            <h4>{selectedExam.ecole}</h4>
                                            <br />
                                            <h4>{selectedExam.classeLabel} ....</h4>
                                        </th>
                                        <th>
                                            <h4>{selectedExam.evaTypeLabel}</h4>
                                            <br />
                                            <h5>{selectedExam.date}</h5>
                                        </th>
                                        <th>
                                            <h4>Nom et Prénom</h4><br />
                                            <p>.......................</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan="3">
                                            <div
                                                className="textarea_editor text-black bg-transparent"
                                                dangerouslySetInnerHTML={{ __html: content }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">
                                            <div className="text-center">
                                                <img src={selectedExam.selectedImage} alt="Bonne chance" className="img-fluid" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment>
        </div>
    );
};

export default Langue;
