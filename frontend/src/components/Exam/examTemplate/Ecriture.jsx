import React, { useState, useRef } from 'react';
import { Card, CardBody, CardHeader, Table } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import { useLocation } from 'react-router-dom';
import CustomJoditEditor from '../../../components/CustomJoditEditor';

const Ecriture = () => {
    const location = useLocation();
    const { selectedExam } = location.state || {};

    console.log("🚀 ~ Ecriture ~ selectedExam:", selectedExam);

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
                            <h3 className='text-danger'>Astuces!</h3>
                            <p>1. Sélectionner la police "Lignes" ou "lignesSyes" et la taille de police 28 <br/>

                              2. Choisir la couleur si vous voulez que les lignes soient d'un certaine couleur <br/>

                              3. Au clavier, taper la touche correspondant à la réglure souhaitée (de 1 à 9, la touce + ou la touche ° ) <br/>

                              touche 1 : ligne simple <br/>

                              touche 2 : double ligne gauteur 2mm <br/>

                              touche 3 : double ligne hauteur 3mm<br/>

                              touche 4 : double ligne hauteur 4mm <br/>

                              touche 5 : des petits carreaux 5mm <br/>

                              touche 6 et 8 : réglures seyès de dimensions différentes <br/>

                              touches 7 et 9 : réglures seyès sans repères verticaux de dimensions différentes <br/>

                              Pour créer une seconde ligne, il faut appuyer sur la touche 'entrée' avant de taper à nouveau la touche choisie <br/>

                              4. Une fois la réglure choisie,  placez-vous sur la ligne correspondante (en début de ligne) et basculez alors dans la police choisie. Les caractères suivants se poseront sur la gauche de la page <br/>
                            </p>
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
                                                className="textarea_editor text-black bg-transparent "
                                                dangerouslySetInnerHTML={{ __html: content }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">
                                            <div className="text-center">
                                                <img src={selectedExam.selectedImage} alt="critère d'évaluation" className="img-fluid" />
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

export default Ecriture;
