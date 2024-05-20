import React from 'react'
import { Row, Col, Button, Card, CardBody } from "react-bootstrap";
import home from "../assets/images/home.gif";
import skybg from "../assets/images/skybg1.jpg"
import skybook from "../assets/images/skybook.jpg"
import NavHome from '../layout/nav/NavHome';


function Home() {
const headmasterAction = [
{
  icon:'',
  description: 'ifkùlf',
}
];
const inspectorAction = [
  {
    icon:'',
    description: 'ifkùlf',
  }
  ];
  const teacherAction = [
    {
      icon:'',
      description: 'Créer le journal, la planification, les évaluations en simple clique.',
    }
    ];

  return (
    <div className="fix-wrapper">
       <NavHome/>
          <Row>
          <div className='bg-container-home'>
            <img src={skybg} alt='sky background' />
            <div className="content-container-home   text-center">
              <h1 className='text-white fs-36 mb-3 '>Bienvenue  </h1>
              <h1 className=' fs-3'>Que vous soyez directeur, inspecteur, assistant ou enseignant, notre plateforme a été conçue pour simplifier et améliorer chaque aspect de la gestion éducative.</h1>
              <Button as="a" variant="warning" href="/chooseUser" className="mt-3">
                Se connecter
              </Button>
            </div>
            <div className='bg-container-home'>
            <img src={skybook} alt=' background' />
            <div className="text-left-container">
              <h1 className='text-black fs-30 mb-3 '>Vos tâches n'ont jamais été aussi rapide à faire !  </h1>
              <h1 className='text-warning fs-3'>Découvrez comment économiser plusieurs heures de travail chaque semaine grâce à Journaly</h1>
             </div>
            </div>

          </div>
          <div className='row'>
            <h1 className='text-black text-center mb-5'>Vous êtes un(e)</h1>
            <Col xl={4}>
              <h4 className='text-primary text-center'>directeur(ice) !</h4>
            <Card>
            {headmasterAction.map((action, index) => (
              <CardBody key={index}>
                {action.icon} {action.description}
              </CardBody>
            ))}
            </Card>
            </Col>  
            <Col xl={4}>
              <h4 className='text-success text-center'>inspecteur(ice) ou assistant(e) !</h4>
            <Card>
              {inspectorAction.map((action, index) => (
                <CardBody key={index}>
                  {action.icon} {action.description}
                </CardBody>
              ))}
            </Card>
            </Col>
            <Col xl={4}>
              <h4 className='text-danger text-center'>enseignant(e) !</h4>
            <Card>
              {teacherAction.map((action, index) => (
                <CardBody key={index}>
                  {action.icon} {action.description}
                </CardBody>
              ))}
            </Card>
            </Col>       
              <div className="d-flex justify-content-center"><img src={home} alt="animation gif" style={{ width: '100%' }} />
              </div>
          </div> 
          </Row>

    </div>
  )
}

export default Home
