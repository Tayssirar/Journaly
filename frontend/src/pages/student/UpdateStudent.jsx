import React, { useState, useEffect } from 'react';
import StudentForm from '../../components/StudentForm';
import PageTitle from '../../components/PageTitle';
import axios from 'axios';
import {useParams,  useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/students/${id}`);
        setInitialValues(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudent();
  }, [id]); 
  const handleSubmit = async (formData) => {
    try {
      await axios.post(`http://localhost:5000/api/students/update/${id}`, formData);
      navigate('/AllStudents');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };
  if (!initialValues) {
    return <p>Loading...</p>;
  }


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
              <StudentForm mode="add" initialValues={initialValues} onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
