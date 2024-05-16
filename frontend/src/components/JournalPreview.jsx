import React, { useState } from 'react';
import { Card, CardBody, Col, Table } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ZoomButton from './ZoomButton';
import ReactToPrint from 'react-to-print';

const JournalPreview= React.forwardRef(({ previewData, classe, theme, subTheme, education_a, journee },ref) => {
  const [zoom, setZoom] = useState(1);
  const componentRef = React.useRef();


  const zoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3));
  };

  const zoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5));
  };

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
          {({ zoomIn, zoomOut}) => (
            <div>
                <ZoomButton zoomIn={zoomIn} zoomOut={zoomOut}/>
                <ReactToPrint
                  trigger={() => (
                    <button className="btn btn-light" type="button">
                      <i className="fa fa-print" /> Imprimer
                    </button>
                  )}
                  content={() => componentRef.current}
                />
              <TransformComponent>
                <Col lg={9}>
                <Card >
                  <CardBody ref={componentRef}>
                    <div >
                  <Table responsive >
                            <thead className="table-primary">
                                <tr>
                                    <th colSpan="2">Date</th>
                                    <th colSpan="2">Classe {classe} horaire du au</th>
                                </tr>
                                <tr>
                                    <th>Unité {theme}</th>
                                    <th colSpan="3">thème {theme}</th>
                                    <th>Éducation à :</th>
                                </tr>
                                <tr>
                                    <th>Module {subTheme} Journée {journee}</th>
                                    <th colSpan="3">sou-thème {subTheme}</th>
                                    <th>{education_a}</th>
                                </tr>
                            </thead>
                        </Table>
                        <Table responsive bordered>
                            <thead className="table-warning">
                                <tr>
                                    <th style={{  whiteSpace: 'normal' }}>Activité + Durée</th>
                                    <th style={{ whiteSpace: 'normal' }}>Les objectifs spécifiques</th>
                                    <th style={{  whiteSpace: 'normal' }}>Les objectifs de la séance</th>
                                    <th style={{ whiteSpace: 'normal' }}>Contenus / supports</th>
                                    <th>Étapes</th>
                                    <th style={{ whiteSpace: 'normal' }}>La compétence de vie</th>
                                    <th style={{ whiteSpace: 'normal' }}>Observation</th>
                                </tr>
                            </thead>
                        </Table>
                      </div>
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

export default JournalPreview
