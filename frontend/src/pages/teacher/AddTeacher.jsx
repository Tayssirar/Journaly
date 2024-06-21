import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/PageTitle';
import TeacherForm from '../../components/TeacherForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTeacher() {
  const navigate = useNavigate();
  const [schoolOptions, setSchoolOptions] = useState([]);
  const [classOptions, setClassOptions] = useState([]);

  useEffect(() => {
    const fetchSchoolOptions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/schools');
        setSchoolOptions(response.data.map(school => ({ value: school._id, label: school.name })));
      } catch (error) {
        console.error('Error fetching school options:', error);
      }
    };

    const fetchClassOptions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/classes');
        setClassOptions(response.data.map(classItem => ({ value: classItem._id, label: classItem.name })));
      } catch (error) {
        console.error('Error fetching class options:', error);
      }
    };

    fetchSchoolOptions();
    fetchClassOptions();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:5000/api/teachers', formData);
      navigate('/AllTeachers');
    } catch (error) {
      console.error('Error adding teacher:', error);
    }
  };

  return (
    <div>
      <PageTitle activeMenu={"Ajouter un enseignant"} motherMenu={"Enseignant"} />
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations de l'enseignant</h5>
            </div>
            <div className='card-body'>
              <TeacherForm
                mode="add"
                onSubmit={handleSubmit}
                schoolOptions={schoolOptions}
                classOptions={classOptions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTeacher;
