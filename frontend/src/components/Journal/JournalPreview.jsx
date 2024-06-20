import React, { useState } from 'react';
import { Card, CardBody, Col, Table } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ZoomButton from '../ZoomButton';
import ReactToPrint from 'react-to-print';

const JournalPreview = React.forwardRef(({ previewData, date, time1, time2, classe,  subTheme, education_a, journee }, ref) => {
  const [zoom, setZoom] = useState(1);
  const componentRef = React.useRef();

  return (
    <div>
      <TransformWrapper
        initialScale={zoom}
        minScale={0.5}
        maxScale={3}
        wheel={{
          step: 0.1,
        }}
      >
        {({ zoomIn, zoomOut }) => (
          <div className=''>
            <ZoomButton zoomIn={zoomIn} zoomOut={zoomOut} />
            <ReactToPrint
              trigger={() => (
                <button className='btn btn-light' type='button'>
                  <i className='fa fa-print' /> Imprimer
                </button>
              )}
              content={() => componentRef.current}
            />
            <TransformComponent>
              <Col lg={12}>
                <Card>
                  <CardBody ref={componentRef}>
                    <Table responsive>
                      <thead className='table-primary'>
                        <tr>
                          <th colSpan='2'>Date: {date}</th>
                          <th colSpan='3'>Classe: {classe} horaire du {time1.toLocaleTimeString()} au {time2}</th>
                          <th rowSpan={3}>Éducation à: {education_a}</th>
                        </tr>
                        <tr>
                          <th colSpan='2'>Journée: {journee}</th>
                          <th colSpan='3'>Sous-thème: {subTheme}</th>
                        </tr>
                      </thead>
                    </Table>
                    <Table responsive bordered>
                      <thead className='table-warning'>
                        <tr>
                          <th style={{ whiteSpace: 'normal' }}>Activité + Durée</th>
                          <th style={{ whiteSpace: 'normal' }}>Les objectifs spécifiques</th>
                          <th style={{ whiteSpace: 'normal' }}>Les objectifs de la séance</th>
                          <th style={{ whiteSpace: 'normal' }}>Contenus / supports</th>
                          <th>Étapes</th>
                          <th style={{ whiteSpace: 'normal' }}>La compétence de vie</th>
                          <th style={{ whiteSpace: 'normal' }}>Observation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {previewData.map((preData, index) => (
                          <tr key={index}>
                            <td>
                              <strong>{preData.title}</strong>
                              <br />
                              {preData.content.Type} <br /> {preData.content.Duré}
                            </td>
                            <td>{preData.content.Les_objectifs_spécifiques}</td>
                            <td>{preData.content.Les_objectifs_de_la_séance}</td>
                            <td>{preData.content.contenu} <br /> {preData.content.La_situation} <br /> {preData.content.Les_supports} <br />{preData.content.Les_structures} <br />{preData.content.Les_lexiques}</td>
                            <td>{preData.content.Les_étapes}</td>
                            <td>{preData.content.La_compétence_de_vie}</td>
                            <td>{preData.content.Observation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </TransformComponent>
          </div>
        )}
      </TransformWrapper>
    </div>
  );
});

export default JournalPreview;
