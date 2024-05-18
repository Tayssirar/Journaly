import React from 'react'
import { Row, Col, Button } from "react-bootstrap";
import home from "../assets/images/home.gif";
import NavHome from '../layout/nav/NavHome';


function Home() {
  return (
    <div className="fix-wrapper">
       <NavHome/>
      <div className="">
          <Row>

            <Col xl={6}>
              <div className="grid-col mt-5"><img src={home} alt="" style={{ width: '110%' }} />
              </div>
            </Col>
            <Col xl={6}>
              <div className="grid-col mb-4 mt-5 text-center">
                <h1 className='text-primary fs-36 mb-5 '>Bienvenue sur Journali.tn</h1>
                <h1 className='text-muted fs-3'>Que vous soyez directeur, inspecteur, assistant ou enseignant, 
                  notre plateforme a été conçue pour simplifier et améliorer chaque aspect de la gestion éducative.</h1>
                  <Button as="a" variant="primary" href="/chooseUser" className="mt-3">
                                        Se connecter
                  </Button>
              </div>
            </Col>
          </Row>
      </div>
    </div>
  )
}

export default Home
