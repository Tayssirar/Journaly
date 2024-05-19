import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Cards from './Cards';
import SvgIcon from './SvgIcon';

export const DefaultCard = () => {
   const [nbrStudent, setNbrStudent] = useState('');
   const [studentPercent, setStudentPercent] = useState('');
   const [pastJr, setPastJr] = useState('');
   const [pastJrPercent, setPastJrPercent] = useState('');
   const [leftJrPercent, setLeftJrPercent] = useState('');
   const [leftJr, setLeftJr] = useState('');

   useEffect(() => {
      // Fetch data from the backend here
      fetch('/api/dashboard-data')
         .then(response => response.json())
         .then(data => {
            setNbrStudent(data.nbrStudent);
            setStudentPercent(data.studentPercent);
            setPastJr(data.pastJr);
            setPastJrPercent(data.pastJrPercent);
            setLeftJr(data.leftJr);
            setLeftJrPercent(data.leftJrPercent);
         })
         .catch(error => console.error('Error fetching data:', error));
   }, []);

   const card = [
      { title: "Jours passés", number: pastJr, icon: SvgIcon.grid, percent: pastJrPercent, color: "warning" },
      { title: "Jours restants", number: leftJr, icon: SvgIcon.grid, percent: leftJrPercent, color: "success" },
      { title: "Élève", number: nbrStudent, icon: SvgIcon.user, percent: studentPercent, color: "danger" },
   ];

   return (
      <div>
         <Row>
            {card.map((item, index) => (
               <Col xl={3} xxl={4} lg={4} sm={4} key={index}>
                  <div className="widget-stat card">
                     <div className="card-body p-4">
                        <Cards title={item.title} number={item.number} percent={item.percent} icon={item.icon} color={item.color} />
                     </div>
                  </div>
               </Col>
            ))}
         </Row>
      </div>
   );
};
