import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/PageTitle'
import Form from '../../components/userAIHForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AddAssistant() {
  const navigate = useNavigate();
  const [schoolOptions, setSchoolOptions] = useState([]);

  useEffect(() => {
      const fetchSchoolOptions = async () => {
          try {
              const response = await axios.get('http://localhost:5000/api/schools');
              setSchoolOptions(response.data.map(school => ({ value: school._id, label: school.name })));
          } catch (error) {
              console.error('Error fetching school options:', error);
          }
      };

      fetchSchoolOptions();
  }, []);

  const handleSubmit = async (formData) => {
      try {
          await axios.post('http://localhost:5000/api/assistants/add', formData);
          navigate('/AllAssistants');
      } catch (error) {
          console.error('Error adding assistant:', error);
      }
  };

  return (
    <div>
      <PageTitle activeMenu={"Ajouter un assistant"} motherMenu={"Assistant"}/>
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations d'un assistant</h5>
            </div>
            <div className='card-body'>
            <Form mode="add"
             onSubmit={handleSubmit} 
              schoolOptions={schoolOptions}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAssistant
