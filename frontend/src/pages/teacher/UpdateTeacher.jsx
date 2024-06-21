import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import TeacherForm from '../../components/TeacherForm';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateTeacher() {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState(null);
  const [schoolOptions, setSchoolOptions] = useState([]);
  const [classOptions, setClassOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/teachers/${id}`);
        setInitialValues(response.data);
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };

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

    fetchTeacher();
    fetchSchoolOptions();
    fetchClassOptions();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await axios.put(`http://localhost:5000/api/teachers/${id}`, formData);
      navigate('/AllTeachers');
    } catch (error) {
      console.error('Error updating teacher:', error);
    }
  };

  if (!initialValues) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <PageTitle activeMenu={"Modifier un enseignant"} motherMenu={"Enseignant"} />
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations de l'enseignant</h5>
            </div>
            <div className='card-body'>
              <TeacherForm mode="update" initialValues={initialValues} onSubmit={handleSubmit} schoolOptions={schoolOptions} classOptions={classOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateTeacher;
