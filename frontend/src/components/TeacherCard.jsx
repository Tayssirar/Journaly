import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Cards from './Cards';
import SVGICON from './SvgIcon';

export const DefaultCard = () => {
   const [nbrStudent, setNbrStudent] = useState('');
   const [nbrTeacher, setNbrTeacher] = useState('');
   const [studentPercent, setStudentPercent] = useState('');
   const [teacherPercent, setTeacherPercent] = useState('');
   const [pastJr, setPastJr] = useState('');
   const [pastJrPercent, setPastJrPercent] = useState('');
   const [leftJr, setLeftJr] = useState('');
   const [leftJrPercent, setLeftJrPercent] = useState('');

   useEffect(() => {
      // Fetch data from the backend
      fetch('/api/dashboard-data')
         .then(response => response.json())
         .then(data => {
            setNbrStudent(data.nbrStudent);
            setNbrTeacher(data.nbrTeacher);
            setStudentPercent(data.studentPercent);
            setTeacherPercent(data.teacherPercent);
            setPastJr(data.pastJr);
            setPastJrPercent(data.pastJrPercent);
            setLeftJr(data.leftJr);
            setLeftJrPercent(data.leftJrPercent);
         })
         .catch(error => console.error('Error fetching data:', error));
   }, []);

   const cardData = [
      { title: "Jours passés", number: pastJr, icon: SVGICON.daysPassed, percent: pastJrPercent, color: "warning" },
      { title: "Jours restants", number: leftJr, icon: SVGICON.daysRemaining, percent: leftJrPercent, color: "success" },
      { title: "Élèves", number: nbrStudent, icon: SVGICON.user, percent: studentPercent, color: "danger" },
      { title: "Enseignants", number: nbrTeacher, icon: SVGICON.teacher, percent: teacherPercent, color: "primary" }
   ];

   return (
      <div>
         <Row>
            {cardData.map((item, index) => (
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

export default DefaultCard;
