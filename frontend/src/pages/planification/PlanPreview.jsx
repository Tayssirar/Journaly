import React, { useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle, Table } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ZoomButton from '../../components/ZoomButton';
import ReactToPrint from 'react-to-print';

const PlanPreview = React.forwardRef(({ classe, theme, subTheme, education_a, activities }, ref) => {
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
      {/* Page 1: Journée 1 to 4 */}
      <div
        style={{
          width: '297mm',
          height: '210mm',
        }}
      >
        <TransformWrapper
          initialScale={zoom}
          minScale={0.5}
          maxScale={3}
          wheel={{
            step: 0.1,
          }}
        >
          {({ zoomIn, zoomOut}) => (
            <React.Fragment>
              <div>
                <ZoomButton zoomIn={zoomIn} zoomOut={zoomOut}/>
                <ReactToPrint
                      trigger={() => <button className="btn btn-light" type="button">
                        <i className="fa fa-print" />    Imprimer</button>}
                      content={() => componentRef.current}
                />
              </div>
              <TransformComponent>
                <Card>
                  <CardBody ref={componentRef}>
                    <Table responsive>
                      <thead>
                        <tr className="table-primary">
                          <th colSpan="2">classe: {classe}</th>
                          <th colSpan="3">thème: {theme}</th>
                        </tr>
                        <tr className="table-primary">
                          <th colSpan="3">sous-thème: {subTheme}</th>
                          <th colSpan="2">éducation à: {education_a}</th>
                        </tr>
                        <tr className="table-success">
                          <th>Activité</th>
                          <th>Journée 1</th>
                          <th>Journée 2</th>
                          <th>Journée 3</th>
                          <th>Journée 4</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Ajoutez les lignes du tableau ici */}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>

      {/* Page 2: Journée 1 to 8 */}
      {/* Ajoutez d'autres pages ou contenu si nécessaire */}
    </div>
  );
});

export default PlanPreview;
