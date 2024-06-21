import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import Form from '../../components/userAIHForm';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateInspector() {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInspector = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/inspectors/${id}`);
        setInitialValues(response.data);
      } catch (error) {
        console.error('Error fetching inspector data:', error);
      }
    };

    fetchInspector();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await axios.put(`http://localhost:5000/api/inspectors/update/${id}`, formData);
      navigate('/AllInspectors');
    } catch (error) {
      console.error('Error updating inspector:', error);
    }
  };

  if (!initialValues) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <PageTitle activeMenu={"Modifier un inspecteur"} motherMenu={"Inspecteur"} />
      <div className='row'>
        <div className="col-xl-12 col-xxl-12 col-sm-12">
          <div className='card'>
            <div className="card-header">
              <h5 className="card-title">Les informations d'un inspecteur</h5>
            </div>
            <div className='card-body'>
              <Form mode="update" initialValues={initialValues} onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateInspector;
