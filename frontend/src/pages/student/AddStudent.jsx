import React, { useState, useEffect } from 'react';
import StudentForm from '../../components/StudentForm';
import PageTitle from '../../components/PageTitle';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const navigate = useNavigate();
 
  const handleSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:5000/api/students/add', formData);
      navigate('/AllStudents');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div>
      <PageTitle activeMenu={"Ajouter un élève"} motherMenu={"Élève"}/>
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations d'un élève</h5>
            </div>
            <div className='card-body'>
              <StudentForm mode="add" onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
