import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import Form from '../../components/userAIHForm';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateAssistant() {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAssistant = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/assistants/${id}`);
        setInitialValues(response.data);
      } catch (error) {
        console.error('Error fetching assistant data:', error);
      }
    };

    fetchAssistant();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await axios.put(`http://localhost:5000/api/assistants/update/${id}`, formData);
      navigate('/AllAssistants');
    } catch (error) {
      console.error('Error updating inspector:', error);
    }
  };

  if (!initialValues) {
    return <p>Loading...</p>;
  }


  return (
    <div>
      <PageTitle activeMenu={"Modifier un assistant"} motherMenu={"Assistant"} />
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations d'un assistant</h5>
            </div>
            <div className='card-body'>
              <Form mode="update" initialValues={initialValues} onSubmit={handleSubmit}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateAssistant;
