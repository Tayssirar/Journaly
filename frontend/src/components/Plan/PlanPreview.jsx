import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Table } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ZoomButton from '../ZoomButton';
import { usePrint } from '../../assets/context/PrintContext';
import ReactToPrint from 'react-to-print';



const PlanPreview = React.forwardRef(({ classe, theme, subTheme, education_a, planData }, ref) => {
  const [zoom, setZoom] = useState(1);
  const componentRef = React.useRef();
  const [data, setData] = useState([]);
  const printRef = usePrint();

  
  useEffect(() => {
    if (planData) {
      setData(planData); 
    }
    printRef.current = componentRef.current;
  }, [planData, printRef]);



  return (
    <div>
      {/* Page 1: Journée 1 to 4 */}
        <TransformWrapper
          initialScale={zoom}
          minScale={0.5}
          maxScale={3}
          wheel={{
            step: 0.1,
          }}
          content={() => componentRef.current}
        >
          {({ zoomIn, zoomOut }) => (
            <React.Fragment>
              <div className='d-flex mr-auto p-2'>
                <ZoomButton zoomIn={zoomIn} zoomOut={zoomOut} />
                <ReactToPrint
                  trigger={() => <button className="btn btn-light" type="button">
                    <i className="fa fa-print" /> Imprimer
                  </button>}
                  content={() => componentRef.current}
                />
              </div>
              <TransformComponent>
              <Col lg={12}>
                <Card>
                  <CardBody ref={componentRef}>
                    <Table responsive >
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
                          <th>Journée 1</th>
                          <th>Journée 2</th>
                          <th>Journée 3</th>
                          <th>Journée 4</th>
                        </tr>
                      </thead>
                      <tbody >
                      {Object.keys(planData.journee || {}).slice(0, 4).map((day, index) => (
                        <td key={index} >
                          {planData.journee[day].sections.map((section, secIndex) => (
                            <tr key={secIndex}>
                              <h4>{section.title}</h4>
                              {Object.keys(section.content).map((field) => (
                                <p key={field}><strong>{field.replace(/_/g, ' ')}:</strong> {section.content[field]}</p>
                              ))}
                            </tr>
                          ))}
                        </td>
                      ))}

                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>

      {/* Page 2: Journée 5 to 8 */}
    </div>
  );
});

export default PlanPreview;
